import clientPromise from '../../lib/mongodb';
import { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import UserProfile from '../../components/Profile/UserProfile';

// Source: https://auth0.github.io/nextjs-auth0/modules/frontend_use_user.html
export default function UserProfilePage({ orgs }) {
  const { user, error, isLoading } = useUser();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
  var orgIDs = {};
  if (!user) {
    orgIDs = {
      followed: [],
      managed: []
    };
  } else {
    orgIDs = {
      followed: user['https://ucrclubs.com/following'],
      managed: user['https://ucrclubs.com/adminFor']
    };
  }
  
  useEffect(() => {
    console.log(user);
    const orgIDsString = JSON.stringify(orgIDs);
    fetch(`api/user-orgs/${orgIDsString}`)
      .then((res) => console.log(res));
  });
  
  return (
    <div className="flex flex-col grow">
      <UserProfile user={user} orgs={orgs} />
    </div>
  );
}
