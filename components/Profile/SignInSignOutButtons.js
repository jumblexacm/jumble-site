import Link from 'next/link';
import styles from './SignInSignOutButtons.module.css';

function SignInSignOutButtonTemplate({ apiRoute, text }) {
  return (
    <center>
      <div className={styles.signInSignOutBtn}>
        <Link href={apiRoute}>
          <a>{text}</a>
        </Link>
      </div>
    </center>
  )
}

export function SignInButton({ user }) {
  return (
    <SignInSignOutButtonTemplate
      apiRoute='/api/auth/login'
      text="Sign In"
    />
  );
}

export function SignOutButton({ user }) {
  return (
    <SignInSignOutButtonTemplate
      apiRoute='/api/auth/logout'
      text="Sign Out"
    />
  );
}
