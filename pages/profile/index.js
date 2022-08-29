import { useUser } from '@auth0/nextjs-auth0';
import UserProfile from '../../components/Profile/UserProfile';
import SignInButton from '../../components/Profile/SignInButton';
import SignOutButton from '../../components/Profile/SignOutButton';

// Source: https://auth0.github.io/nextjs-auth0/modules/frontend_use_user.html
export default function UserProfilePage() {
  const { user, error, isLoading } = useUser();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) return <SignInButton />;
  
  return (
    <div className="flex flex-col grow">
      <UserProfile user={user} />
      <SignOutButton />
    </div>
  );
}
