import clientPromise from '../../lib/mongodb';
import Timeline from '../../components/Timeline/Timeline';
import OrgInfo from '../../components/Organizations/OrgInfo';

export default function OrgProfilePage({ posts, orgInfo }) {
  console.log(posts);
  return (
    <div className="flex flex-col grow">
      <OrgInfo {...orgInfo} />
      {!posts?.length ? (
        <div className="flex grow bg-gray-200 items-center justify-center">
          <p className="text-center text-lg">
            {`Sorry! ${orgInfo.org_name} hasn\'t made any announcements yet.`}
          </p>
        </div>
      ) : (
        <Timeline posts={posts} />
      )}
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
