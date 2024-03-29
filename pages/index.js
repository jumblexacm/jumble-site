import clientPromise from '../lib/mongodb';
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/Home.module.css';
import Timeline from '../components/Timeline/Timeline';
import TimelineToggle from '../components/Timeline/TimelineToggle';
import UserTimeline from '../components/Timeline/UserTimeline';
import { useUser } from '@auth0/nextjs-auth0';

export default function Home({ isConnected, posts }) {
  const { user, error, isLoading } = useUser();
  const [userPosts, setUserPosts] = useState([]);
  const [userPostToggle, setUserPostToggle] = useState(true);

  const didMount = useRef(false);

  const toggleUserPosts = () => {
    setUserPostToggle((prevState) => !prevState);
  };

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      if (!isConnected) {
        console.warn('Error connecting to database');
      }
    }

    if (user) {
      const filteredPosts = posts.filter((post) => {
        return user['https://ucrclubs.com/following'].includes(post.org_id);
      });
      if (filteredPosts.length == 0) {
        setUserPostToggle(false);
      }
      setUserPosts(filteredPosts);
    }
  }, [isConnected, user, posts]);

  return (
    <div className={styles.container}>
      {user && (
        <TimelineToggle
          toggleUserPosts={toggleUserPosts}
          userPostToggle={userPostToggle}
        />
      )}
      {user && userPostToggle ? (
        <UserTimeline
          posts={userPosts}
          following={user['https://ucrclubs.com/following']}
        />
      ) : (
        <Timeline posts={posts}></Timeline>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise; //connects to Database when publishing
    const db = client.db(process.env.MONGODB_DB);
    const posts = await db
      .collection('Posts')
      .find()
      .sort({ _id: -1 })
      // https://stackoverflow.com/a/5128574
      // _id, created by MongoDB and starts with document creation time
      // -1, signifies the sort is formatted descending (newest at top -> oldest)
      .toArray();
    return {
      props: {
        isConnected: true,
        posts: JSON.parse(JSON.stringify(posts)),
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        isConnected: false,
      },
    };
  }
}
