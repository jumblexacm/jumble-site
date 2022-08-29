import { useState } from 'react';
import Link from 'next/link';
// import styles from './SignInButton.module.css';

function SignOutButton({ user }) {
  return (
    <Link href='/api/auth/logout'>
      <a>Sign Out</a>
    </Link>
  );
}

export default SignOutButton;
