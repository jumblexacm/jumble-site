import { useState } from 'react';
import styles from './UserProfile.module.css';
import Image from 'next/image';
import Link from 'next/link';

function UserProfile({ user }) {
  return (
    <div className={styles.userProfileContainer}>
      <div className={styles.userImageWrapper}>
        <Image
          src={user.picture}
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h4>Hello, {user?.name}!</h4>
    </div>
  );
}

export default UserProfile;
