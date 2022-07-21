import styles from './OrgCard.module.css';
import Link from 'next/link';

function OrgCard({ description }) {
  const maxDescriptionChars = 140;
  return (
    <div className={styles.card}>
      <Link href="#">
        <a>
          <div className={styles.cardInner}>
            <div className="flex-shrink-0">
              <img
                src="https://source.unsplash.com/100x100/?portrait?1"
                alt=""
                className="object-cover object-center w-24 h-24 rounded-full bg-gray-500"
              />
            </div>
            <div className={styles.text}>
              <h2 className={styles.name}>Leroy Jenkins</h2>
              <span className={styles.description}>
                {description.length > maxDescriptionChars
                  ? description.slice(0, maxDescriptionChars) + '...'
                  : description}
              </span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
export default OrgCard;
