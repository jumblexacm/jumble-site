import { useState } from 'react';
import Link from 'next/link';
// import styles from './SignInButton.module.css';

function SignInButton({ user }) {
  return (
    <Link href='/api/auth/login'>
      <a>Sign In</a>
    </Link>
  );
}

export default SignInButton;
