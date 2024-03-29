import OrgList from '../../components/Organizations/OrgList';
import clientPromise from '../../lib/mongodb';

export default function OrganizationsPage({ orgs }) {
  return (
    <div className="bg-gray-50">
      <h1 className="text-center font-semibold text-2xl pt-14">
        Organization List
      </h1>
      <OrgList orgs={orgs}></OrgList>
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const orgs = await db
    .collection('Orgs')
    .find({})
    .sort({ recency: -1 })
    .toArray();

  return {
    props: {
      orgs: JSON.parse(JSON.stringify(orgs)),
    },
  };
}
