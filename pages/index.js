import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Timeline from '../components/Timeline';

export default function Home({ isConnected, posts }) {
  useEffect(() => {
    const connection = isConnected
      ? 'You are connected to MongoDB'
      : 'You are NOT connected to MongoDB';
    console.log(connection);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Jumble</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Timeline posts={posts}></Timeline>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise //connects to Database when publishing
    const db = client.db('JumbleDB')
    // Temporary sample posts to simulate MongoDB data
    const Posts = await db 
    .collection("Posts")
    .find({}, { projection: { _id: 0, message_id: 0 } })
    .sort({date: 1}) //+1, signifies the sort is formatted ascending(newest -> oldest)
    //.limit(10)
    .toArray()

    return {
      props: {
        isConnected: true,
        posts: Posts
        //posts: JSON.parse(JSON.stringify(Posts)),
      } 
    } 
  } 
  catch (e) {
    console.error(e);
    return {
      props: {
            isConnected: false,
            posts: Posts,
      },
    };
  } 
 };