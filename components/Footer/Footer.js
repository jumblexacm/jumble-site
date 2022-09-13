import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo-full-transparent.png';
import styles from './Footer.module.css';
import { forwardRef } from 'react';

function Footer(props, ref) {
  return (
    <footer ref={ref} className={styles.footer}>
      <div className={styles.contentWrapper}>
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
                  alt={'UCR Clubs Logo'}
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
              href="mailto:ucrclubs@gmail.com"
              className="hover:text-blue-600"
            >
              ucrclubs@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default forwardRef(Footer);
