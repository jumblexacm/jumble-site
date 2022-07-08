import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Timeline from '../components/Timeline';

export default function Home({ isConnected, posts }) {

  useEffect(() => {
    const connection = (isConnected) ? ('You are connected to MongoDB') : ('You are NOT connected to MongoDB');
    console.log(connection); 
  }, );

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
  )
}

export async function getServerSideProps(context) {
  // Temporary sample posts to simulate MongoDB data
  const SAMPLE_POSTS = [
    {
      postID: 1,
      orgID: 1,
      date: 'July 7, 2022',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      msgAtch: null
    },
    {
      postID: 2,
      orgID: 1,
      date: 'July 7, 2022',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      msgAtch: null
    },
    {
      postID: 3,
      orgID: 2,
      date: 'July 7, 2022',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      msgAtch: null
    },
    {
      postID: 4,
      orgID: 3,
      date: 'July 7, 2022',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      msgAtch: null
    },
  ]; 
  
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { 
        isConnected: true,
        posts: SAMPLE_POSTS, 
      },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { 
        isConnected: false, 
        posts: SAMPLE_POSTS,
      },
    }
  }
}
