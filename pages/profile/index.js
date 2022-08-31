import clientPromise from '../../lib/mongodb';
import { useUser } from '@auth0/nextjs-auth0';
import UserProfile from '../../components/Profile/UserProfile';

// Source: https://auth0.github.io/nextjs-auth0/modules/frontend_use_user.html
export default function UserProfilePage({ orgs }) {
  const { user, error, isLoading } = useUser();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
  return (
    <div className="flex flex-col grow">
      <UserProfile user={user} orgs={orgs} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  
  // const { user, error, isLoading } = useUser();
  
  var orgs = [];
  
  // TODO Remove hardcoded channel IDs
  var org_ids = process.env.TMP_ORG_IDS.split(",");
  // var org_ids = params.user.org_ids;
  // var org_ids = user.org_ids;
  
  for (const org_id of org_ids) {
    orgs.push(
      await db
        .collection('Orgs')
        .find({ org_id: org_id })
        .next()
        // .sort({ recency: -1 })
    );
  }
  
  return {
    props: {
      orgs: JSON.parse(JSON.stringify(orgs)),
    },
  };
}
