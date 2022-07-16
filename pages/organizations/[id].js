import clientPromise from '../../lib/mongodb';

export default function OrgProfile({ posts }) {
  console.log(posts);
  return (
    <div>
      <h1>Organization Page</h1>
    </div>
  );
}

// export async function getStaticPaths() {
//   const db = (await clientPromise).db('JumbleDB');
//   const paths = await db.collection('Posts').distinct('message_author');

//   return {
//     paths: paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps({ params }) {
  const db = (await clientPromise).db('JumbleDB');
  console.log(params);
  const posts = await db.collection('Posts').find({ message_author: params });

  console.log(posts);

  return {
    props: {},
  };
}
