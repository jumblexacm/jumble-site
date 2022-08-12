import clientPromise from '../../lib/mongodb';
import Post from '../../components/Timeline/Post';

export default function PostPage({ post }) {
  return (
    <div>
      <Post post={post} shareable={true}></Post>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const post = await db
    .collection('Posts')
    .find({ message_id: params.id })
    .next();

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
    },
  };
}
