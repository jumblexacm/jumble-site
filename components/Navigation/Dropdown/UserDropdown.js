import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import MenuItemComponent from './MenuItemComponent';
import styles from './Dropdown.module.css';
import Image from 'next/image';

const menuItems = [{ text: 'Profile', path: '/profile' }];

function UserDropdown({ userPic, userName }) {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className={styles.menuButton}>
          <div className="relative h-7 w-7">
            <Image
              src={userPic}
              alt={userName}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={styles.menuItems}>
          <div className="py-1">
            {menuItems.map((item, index) => (
              <MenuItemComponent {...item} key={index} />
            ))}
            <Menu.Item>
              {/* eslint-disable-next-line */}
              <a className={styles.item} href="/api/auth/logout">
                Sign Out
              </a>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default UserDropdown;
