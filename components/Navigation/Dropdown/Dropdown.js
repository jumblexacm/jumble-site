import { Menu, Transition } from '@headlessui/react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { Fragment } from 'react';
import MenuItemComponent from './MenuItemComponent';
import styles from './Dropdown.module.css';

function Dropdown({ btnText, menuItems, downChevron = false }) {
  return (
    <Menu as="div" className="relative ">
      <div>
        <Menu.Button className={styles.menuButton}>
          {btnText}
          {downChevron && (
            <HiOutlineChevronDown
              className={styles.chevronDown}
              aria-hidden="true"
            />
          )}
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
            {menuItems?.map((item, index) => (
              <MenuItemComponent {...item} key={index} />
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Dropdown;
