import clientPromise from '../lib/mongodb';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Timeline from '../components/Timeline/Timeline';

export default function Home({ isConnected, posts }) {
  useEffect(() => {
    const connection = isConnected
      ? 'You are connected to MongoDB'
      : 'You are NOT connected to MongoDB';
    console.log(connection);
  });

  return (
    <div className={styles.container}>
      <Timeline posts={posts}></Timeline>
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
      //.limit(10) //limits amount of queries from MongoDB to only 10 entries
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
