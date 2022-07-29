import styles from './OrgCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

function OrgCard({ org: { org_id, org_name, org_avatar_url } }) {
  const description = '';
  return (
    <div className={styles.card}>
      <Link
        href={{
          pathname: '/organizations/[id]',
          query: { id: org_id },
        }}
      >
        <a>
          <div className={styles.cardInner}>
            <div className={styles.imageWrapper}>
              <Image
                src={org_avatar_url}
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              ></Image>
            </div>
            <div className={styles.text}>
              <h1 className={styles.name}>{org_name}</h1>
              {description.length > 0 ? (
                <span className={styles.description}>{description}</span>
              ) : null}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
export default OrgCard;
