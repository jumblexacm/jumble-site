import styles from './Navbar.module.css';
import Dropdown from './Dropdown';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/jumble-logo-full.png';
import Sidebar from './Sidebar/Sidebar';
import { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((curr) => !curr);
  };

  return (
    <header className={styles.header}>
      <div className={styles.contentWrapper}>
        <Link href="/">
          <a
            rel="noopener noreferrer"
            aria-label="Back to homepage"
            className={styles.logoLink}
          >
            <div className={styles.logoWrapper}>
              <Image
                src={logo}
                alt={'Jumble Logo'}
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
          </a>
        </Link>

        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/organizations">
              <a rel="noopener noreferrer" className={styles.a}>
                Org List
              </a>
            </Link>
          </li>
          <li className={styles.li}>
            <div className={styles.a}>
              <Dropdown />
            </div>
          </li>
        </ul>
        <HiOutlineMenu className={styles.sidebarBtn} onClick={toggleSidebar} />
        {sidebarOpen && <Sidebar toggleSidebar={toggleSidebar}></Sidebar>}
      </div>
    </header>
  );
}

export default Navbar;
