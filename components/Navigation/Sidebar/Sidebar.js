import React from 'react';
import styles from './Sidebar.module.css';
import { AiOutlineClose } from 'react-icons/ai';
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
        <AiOutlineClose
          className={styles.closeIcon}
          onClick={toggleSidebar}
        ></AiOutlineClose>
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
