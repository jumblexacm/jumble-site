import { useState, useEffect } from 'react';
import styles from './UserProfile.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { SignInButton, SignOutButton} from './SignInSignOutButtons';
import OrgList from '../Organizations/OrgList';

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
    fetch(`api/user-orgs/${orgIDsString}`)
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
        <a
          href={"mailto:" + user.email}
          className="hover:text-purple-600"
        >
          {user.email}
        </a>
      </div>
      
      <SignOutButton />
      
      {isLoading ? (
      
      <div className={styles.userProfileNoOrgs}>Loading orgs...</div>
      
      ) : (
      
      <div>
      <div className={styles.userProfileManagedOrgsContainer}>
        <br/>
        <div className={styles.userProfileOrgsHeading}>Orgs You Manage</div>
        {managedOrgs.length ? (
          <OrgList orgs={managedOrgs}></OrgList>
        ) : (
          <div className={styles.userProfileNoOrgs}>
            You're not an admin for any orgs. &nbsp;
            <a
              href='/organizations'
              className="hover:text-purple-600"
            >
              <em>Click here to explore orgs.</em>
            </a>
          </div>
        )}
        <br/>
      </div>
      
      <div className={styles.userProfileFollowedOrgsContainer}>
        <br/>
        <div className={styles.userProfileOrgsHeading}>Orgs You Follow</div>
        {followedOrgs.length ? (
          <OrgList orgs={followedOrgs}></OrgList>
        ) : (
          <div className={styles.userProfileNoOrgs}>
            You're not following any orgs. &nbsp;
            <a
              href='/organizations'
              className="hover:text-purple-600"
            >
              <em>Click here to explore orgs.</em>
            </a>
          </div>
        )}
        <br/>
      </div>
      </div>
      
      )}
    
    </div>
  );
}

export default UserProfile;
