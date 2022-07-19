import clientPromise from '../../lib/mongodb';
import OrgProfile from '../../components/Organizations/OrgProfile';

export default function OrgProfilePage({ posts }) {
  console.log(posts);
  return (
    <div>
      <OrgProfile posts={posts} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params.id);
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const posts = await db
    .collection('Posts')
    .find({ org_id: params.id }, { projection: { message_id: 0 } })
    .sort({ _id: -1 })
    .toArray();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}
