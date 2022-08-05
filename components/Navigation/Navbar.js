import styles from './Navbar.module.css';
import Dropdown from './Dropdown';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/jumble-logo-full.png';
import Sidebar from './Sidebar/Sidebar';
import { useState, forwardRef } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import CustomSearchBox from '../Search/CustomSearchBox';

function Navbar(props, ref) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((curr) => !curr);
  };

  return (
    <header ref={ref} className={styles.header}>
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

        <div className={styles.searchBoxWrapper}>
          <div className={styles.searchBox}>
            <CustomSearchBox />
          </div>
        </div>

        <ul className={styles.ul}>
          <li>
            <Link href="/organizations">
              <a rel="noopener noreferrer">Org List</a>
            </Link>
          </li>
          <li>
            <Dropdown />
          </li>
        </ul>
        <HiOutlineMenu className={styles.sidebarBtn} onClick={toggleSidebar} />
        {sidebarOpen && <Sidebar toggleSidebar={toggleSidebar}></Sidebar>}
      </div>
    </header>
  );
}

export default forwardRef(Navbar);
