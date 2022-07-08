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
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia risus in magna vehicula, nec imperdiet dui pellentesque. Suspendisse fringilla elit id dapibus feugiat. Aliquam imperdiet aliquam eros ut porttitor. Morbi diam risus, vehicula ut purus at, aliquet tempor felis.',
      msgAtch: null
    },
    {
      postID: 2,
      orgID: 1,
      date: 'July 9, 2022',
      msg: 'Nulla eu orci ac ligula vehicula accumsan vel et ex. Sed feugiat porta lectus, gravida tincidunt justo. Phasellus ac cursus enim. Ut lacus sapien, aliquet sit amet aliquet a, porta aliquam nisi. Nunc vitae dolor et nisl porta fringilla in vel felis. Morbi in orci et augue sodales egestas.',
      msgAtch: null
    },
    {
      postID: 3,
      orgID: 2,
      date: 'July 12, 2022',
      msg: 'Proin ullamcorper ex ut laoreet maximus. Vestibulum in purus sit amet metus tristique sollicitudin vitae eu lectus. Donec vestibulum est id euismod pretium. Nam lacus nisl, porttitor eu ante et, hendrerit pulvinar velit. Nulla aliquet at leo vitae suscipit. Etiam eget dictum tellus. Nullam tristique magna odio, sed sollicitudin velit blandit quis. Donec lectus tellus, consectetur quis lorem sit amet, imperdiet dictum ex. Pellentesque fermentum id massa ut maximus.',
      msgAtch: null
    },
    {
      postID: 4,
      orgID: 3,
      date: 'August 4, 2022',
      msg: 'Sed eget laoreet sapien, non dapibus dolor. Maecenas molestie, tortor ac sodales tempus, dui erat consectetur ante, id facilisis eros quam id orci. In aliquam, ligula at mollis porta, arcu felis pretium tellus, tempus finibus leo nibh eu arcu. In sagittis lectus lacus, et lobortis lacus ultrices vel. Pellentesque metus magna, fermentum a magna et, faucibus faucibus mi. Ut semper nulla sed scelerisque vestibulum. Pellentesque a odio turpis. Aliquam et iaculis magna.',
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
