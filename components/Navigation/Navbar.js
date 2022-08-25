import styles from './Navbar.module.css';
import Dropdown from './Dropdown/Dropdown';
import Link from 'next/link';
import Image from 'next/image';
import fullLogo from '../../public/jumble-logo-full.png';
import iconLogo from '../../public/icon-purple-transparent.png';
import Sidebar from './Sidebar/Sidebar';
import { useState, forwardRef } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';
import CustomSearchBox from '../Search/CustomSearchBox';
import { useUser } from '@auth0/nextjs-auth0';
import UserDropdown from './Dropdown/UserDropdown';

const manageOrgMenuItems = [
  { text: 'Add Organization', path: '/forms/add' },
  { text: 'Edit Organization', path: '/forms/edit' },
];

const loginMenuItems = [{ text: 'Sign In', path: '/api/auth/login' }];

const UserComponent = ({ user }) => {
  return user ? (
    <UserDropdown userPic={user.picture} userName={user.name} />
  ) : (
    // Link is not used here because it is an API route, not client-side transition between pages
    <div>
      <p className="hidden lg:flex">
        <a href="/api/auth/login">Sign In</a> {/* eslint-disable-line */}
      </p>
      <div>
        <Dropdown
          btnText={<CgProfile className="w-7 h-7 lg:hidden" />}
          menuItems={loginMenuItems}
        />
      </div>
    </div>
  );
};

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
        {/* Sidebar only appears on < lg screen sizes*/}
        {sidebarOpen ? (
          <HiOutlineX className={styles.sidebarBtn} onClick={toggleSidebar} />
        ) : (
          <HiOutlineMenu
            className={styles.sidebarBtn}
            onClick={toggleSidebar}
          />
        )}
        {sidebarOpen && <Sidebar closeSidebar={closeSidebar}></Sidebar>}

        {/* Full logo for >= lg screen sizes*/}
        <Link href="/">
          <a
            rel="noopener noreferrer"
            aria-label="Back to homepage"
            className={styles.fullLogoLink}
          >
            <div className={styles.fullLogoWrapper}>
              <Image
                src={fullLogo}
                alt={'Jumble Logo'}
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
          </a>
        </Link>
        {/* Icon logo for sm- screen sizes*/}
        <Link href="/">
          <a
            rel="noopener noreferrer"
            aria-label="Back to homepage"
            className={styles.iconLogoLink}
          >
            <div className={styles.iconLogoWrapper}>
              <Image
                src={iconLogo}
                alt={'Jumble Logo'}
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
          </a>
        </Link>

        {/* Searchbox and ul items only appear on lg+ screen sizes*/}
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
            <Dropdown
              btnText={'Manage Org'}
              downChevron={true}
              menuItems={manageOrgMenuItems}
            />
          </li>
          <li className={styles.listItem}>
            <UserComponent user={user} />
          </li>
        </ul>

        <div className={styles.sidebarUserComponent}>
          <UserComponent user={user} />
        </div>
      </div>
    </header>
  );
}

export default forwardRef(Navbar);
