import { useState } from 'react';
import Link from 'next/link';
import styles from './SignInSignOutButtons.module.css';

export function SignInButton({ user }) {
  return (
    <div className={styles.signInSignOutBtn}>
      <Link href='/api/auth/login'>
        <a>Sign In</a>
      </Link>
    </div>
  );
}

export function SignOutButton({ user }) {
  return (
    <div className={styles.signInSignOutBtn}>
      <Link href='/api/auth/logout'>
        <a>Sign Out</a>
      </Link>
    </div>
  );
}
