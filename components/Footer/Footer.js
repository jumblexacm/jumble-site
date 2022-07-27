import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/jumble-logo-full.png';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.linkWrapper}>
          <Link href="/">
            <a
              rel="noopener noreferrer"
              aria-label="Back to homepage"
              className={styles.link}
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
          <ul className={styles.leftListWrapper}>{/* Left side text */}</ul>
        </div>
        <ul className={styles.rightListWrapper}>
          <li>
            <p className="text-right">Contact Us</p>
            <a
              href="mailto:admin@joinjumble.com"
              className="hover:text-purple-600"
            >
              admin@joinjumble.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
