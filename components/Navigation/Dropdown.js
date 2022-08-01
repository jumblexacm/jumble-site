import { forwardRef, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import Link from 'next/link';
import styles from './Dropdown.module.css';

// Change path property to route to correct pages
const menuItems = [
  { text: 'Add Organization', path: '/forms/add' },
  { text: 'Edit Organization', path: '/forms/edit' },
];

const ItemLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest} className={styles.item}>
        {children}
      </a>
    </Link>
  );
});
ItemLink.displayName = 'ItemLink';

function MenuItemComponent({ path, text }) {
  return (
    <Menu.Item>
      <ItemLink href={path}>{text}</ItemLink>
    </Menu.Item>
  );
}

function Dropdown() {
  return (
    <Menu as="div">
      <div>
        <Menu.Button className={styles.menuButton}>
          Manage Org
          <HiOutlineChevronDown
            className={styles.chevronDown}
            aria-hidden="true"
          />
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
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Dropdown;
