import clientPromise from '../../lib/mongodb';
import Post from '../../components/Timeline/Post';

export default function PostPage({ post }) {
  return <div>PostPage</div>;
}

export async function getServerSideProps({ params }) {
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const post = await db
    .collection('Posts')
    .find({ message_id: params.id })
    .next();

  console.log(post);
  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
  };
}
