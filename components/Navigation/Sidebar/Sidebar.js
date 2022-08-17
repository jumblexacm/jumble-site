import React from 'react';
import styles from './Sidebar.module.css';
import Link from 'next/link';
import CustomSearchBox from '../../Search/CustomSearchBox';

const menuItems = [
  { text: 'Org List', path: '/organizations' },
  { text: 'Add Organization', path: '/forms/add' },
  { text: 'Edit Organization', path: '/forms/edit' },
];

function Sidebar({ closeSidebar }) {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.searchBox}>
        <CustomSearchBox closeSidebar={closeSidebar} />
      </div>

      <ul className={styles.sidebarMenu}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menuItem} onClick={closeSidebar}>
            <Link href={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
