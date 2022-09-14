import Link from 'next/link';
import styles from './SignInSignOutButtons.module.css';

function SignInSignOutButtonTemplate({ apiRoute, text }) {
  return (
    <div className={styles.signInSignOutBtn}>
      <Link href={apiRoute}>
        <a className="hover:text-purple-600">{text}</a>
      </Link>
    </div>
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
