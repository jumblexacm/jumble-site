import styles from './UserOrgs.module.css';
import Link from 'next/link';
import OrgList from '../Organizations/OrgList';

function UserOrgs({ className, heading, orgs, noOrgsMessage }) {
  return (
    <div className={className}>
      <br/>
      <div className={styles.userOrgsHeading}>{heading}</div>
      {orgs.length ? (
        <OrgList orgs={orgs}></OrgList>
      ) : (
        <div className={styles.userOrgsNone}>
          {noOrgsMessage} &nbsp;
          <Link href='/organizations'>
            <a className="hover:text-purple-600">
              <em>Click here to explore orgs.</em>
            </a>
          </Link>
        </div>
      )}
      <br/>
    </div>
  );
}

export default UserOrgs;
