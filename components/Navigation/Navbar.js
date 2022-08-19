import styles from './Navbar.module.css';
import Dropdown from './Dropdown/Dropdown';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/jumble-logo-full.png';
import Sidebar from './Sidebar/Sidebar';
import { useState, forwardRef } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import CustomSearchBox from '../Search/CustomSearchBox';
import { useUser } from '@auth0/nextjs-auth0';
import UserDropdown from './Dropdown/UserDropdown';

function Navbar(props, ref) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, error, isLoading } = useUser();

  const toggleSidebar = () => {
    setSidebarOpen((curr) => !curr);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
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
          <li className={styles.listItem}>
            <Link href="/our-story">
              <a rel="noopener noreferrer">Our Story</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/organizations">
              <a rel="noopener noreferrer">Org List</a>
            </Link>
          </li>
          <li className={styles.dropdownListItem}>
            <Dropdown btnText={'Manage Org'} />
          </li>
          <li className={styles.listItem}>
            {/*Link is not used here because it is an API route, not client-side transition between pages*/}
            {user ? (
              <UserDropdown userPic={user.picture} userName={user.name} />
            ) : (
              // <a href="/api/auth/logout">Logout</a>
              <a href="/api/auth/login">Login</a>
            )}
          </li>
        </ul>
        {sidebarOpen ? (
          <HiOutlineX className={styles.sidebarBtn} onClick={toggleSidebar} />
        ) : (
          <HiOutlineMenu
            className={styles.sidebarBtn}
            onClick={toggleSidebar}
          />
        )}
        {sidebarOpen && <Sidebar closeSidebar={closeSidebar}></Sidebar>}
      </div>
    </header>
  );
}

export default forwardRef(Navbar);
