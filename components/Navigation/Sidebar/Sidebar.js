import React from 'react';
import styles from './Sidebar.module.css';
import { HiOutlineX } from 'react-icons/hi';
import Link from 'next/link';

const menuItems = [
  { text: 'Org List', path: '/organizations' },
  { text: 'Add Organization', path: '/forms/add' },
  { text: 'Edit Organization', path: '/forms/edit' },
];

function Sidebar({ toggleSidebar }) {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarHeader}>
        <HiOutlineX className={styles.closeIcon} onClick={toggleSidebar} />
      </div>

      <ul className={styles.sidebarMenu}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menuItem} onClick={toggleSidebar}>
            <Link href={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
