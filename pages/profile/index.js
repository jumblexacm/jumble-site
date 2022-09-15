import { useUser } from '@auth0/nextjs-auth0';
import {
  UserProfile,
  BlankUserProfile,
} from '../../components/Profile/UserProfile';

// Source: https://auth0.github.io/nextjs-auth0/modules/frontend_use_user.html
export default function UserProfilePage({ orgs }) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="flex flex-col grow">
      {user ? <UserProfile user={user} /> : <BlankUserProfile />}
    </div>
  );
}
