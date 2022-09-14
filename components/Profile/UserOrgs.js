import styles from './UserProfile.module.css';
import Link from 'next/link';
import OrgList from '../Organizations/OrgList';

function UserOrgs({ className, heading, orgs, noOrgsMessage }) {
  return (
    <div className={className}>
      <br/>
      <div className={styles.userProfileOrgsHeading}>{heading}</div>
      {orgs.length ? (
        <div>
          <OrgList orgs={orgs}></OrgList>
          <div className={styles.userProfileOrgsNote}>
            <Link href='/organizations'>
              <a className="hover:text-blue-600">
                <em>Click here to explore more orgs.</em>
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.userProfileOrgsNote}>
          {noOrgsMessage} &nbsp;
          <Link href='/organizations'>
            <a className="hover:text-blue-600">
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
