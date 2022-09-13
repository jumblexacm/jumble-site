import { useState, useEffect } from 'react';
import styles from './UserProfile.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { SignInButton, SignOutButton} from './SignInSignOutButtons';
import UserOrgs from './UserOrgs';

function BlankUserProfile() {
  return (
    <div className={styles.userProfileContainer}>
      <h1 className={styles.userProfileName}>Hello!</h1>
      <SignInButton />
    </div>
  );
}

function UserProfile({ user }) {
  if (!user) return <BlankUserProfile />;
  
  var orgIDs = {};
  orgIDs = {
    followed: user['https://ucrclubs.com/following'],
    managed: user['https://ucrclubs.com/adminFor']
  }
  
  var [isLoading, setIsLoading] = useState(true);
  var [followedOrgs, setFollowedOrgs] = useState([]);
  var [managedOrgs, setManagedOrgs] = useState([]);
  
  useEffect(() => {
    const orgIDsString = JSON.stringify(orgIDs);
    fetch(`api/users/${orgIDsString}`)
      .then((res) => res.json())
      .then((data) => {
        setFollowedOrgs(data.followedOrgs);
        setManagedOrgs(data.managedOrgs);
        setIsLoading(false);
      });
  }, []); // [] stops infinite loops (source: https://stackoverflow.com/a/53074436)
  
  return (
    <div className={styles.userProfileContainer}>
      <div className={styles.userProfileImageWrapper}>
        <Image
          src={user.picture}
          alt={user.name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      
      { user.name && user.name != user.email ? (
        // For example, the user is using a Google account
        <h1 className={styles.userProfileName}>Hello, {user.name}!</h1>
      ) : (
        <h1 className={styles.userProfileName}>Hello!</h1>
      ) }
      
      <div className={styles.userProfileEmail}>
        Email: &nbsp;
        <Link href={"mailto:" + user.email}>
          <a className="hover:text-blue-600">{user.email}</a>
        </Link>
      </div>
      
      <SignOutButton />
      
      {isLoading ? (
        <div className={styles.userProfileOrgsNote}>
          <em>Loading orgs...</em>
        </div>
      ) : (
        <UserOrgs
          className="bg-gray-200"
          heading="Orgs You Follow"
          orgs={followedOrgs}
          noOrgsMessage="You're not following any orgs."
        />
      )}
    
    </div>
  );
  
  /*
  // With managed orgs *and* followed orgs:
        <div>
          <UserOrgs
            className="bg-gray-200"
            heading="Orgs You Manage"
            orgs={managedOrgs}
            noOrgsMessage="You're not an admin for any orgs."
          />
          <UserOrgs
            className="bg-gray-400"
            heading="Orgs You Follow"
            orgs={followedOrgs}
            noOrgsMessage="You're not following any orgs."
          />
        </div>
  */
}

export default UserProfile;
