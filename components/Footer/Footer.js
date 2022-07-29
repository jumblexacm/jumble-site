import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/jumble-logo-full.png';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoWrapper}>
        <Link href="/">
          <a
            rel="noopener noreferrer"
            aria-label="Back to homepage"
            className={styles.logoLink}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={logo}
                alt={'Jumble Logo'}
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
          </a>
        </Link>
      </div>
      <ul className={styles.rightListWrapper}>
        <li>
          <p className={styles.rightListText}>Contact Us</p>
          <a
            href="mailto:admin@joinjumble.com"
            className="hover:text-purple-600"
          >
            admin@joinjumble.com
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
