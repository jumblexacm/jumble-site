import { useState } from 'react';
import styles from './UserProfile.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { SignInButton, SignOutButton} from './SignInSignOutButtons';

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
  return (
    <div className={styles.userProfileContainer}>
      <div className={styles.userProfileImageWrapper}>
        <Image
          src={user.picture}
          alt=""
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
    </div>
  );
}

export default UserProfile;
