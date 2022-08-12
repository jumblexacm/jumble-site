import clientPromise from '../../lib/mongodb';
import Timeline from '../../components/Timeline/Timeline';
import OrgInfo from '../../components/Organizations/OrgInfo';

export default function OrgProfilePage({ posts, orgInfo }) {
  return (
    <div>
      <OrgInfo {...orgInfo} />
      <Timeline posts={posts} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const posts = await db
    .collection('Posts')
    .find({ org_id: params.id })
    .sort({ _id: -1 })
    .limit(10)
    .toArray();

  const orgInfo = await db
    .collection('Orgs')
    .find({ org_id: params.id })
    .next();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
      orgInfo: JSON.parse(JSON.stringify(orgInfo)),
    },
  };
}
