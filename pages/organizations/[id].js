import clientPromise from '../../lib/mongodb';
import OrgProfile from '../../components/Organizations/OrgProfile';
import Timeline from '../../components/Timeline';

export default function OrgProfilePage({ posts }) {
  console.log(posts);
  return (
    <div>
      <OrgProfile />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const db = (await clientPromise).db('JumbleDB');
  const posts = await db
    .collection('Posts')
    .find({ org_id: '996620821286092861' })
    .toArray();

  //console.log(posts);

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}
