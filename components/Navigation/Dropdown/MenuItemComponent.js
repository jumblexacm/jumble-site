import Link from 'next/link';
import { Menu } from '@headlessui/react';
import { forwardRef } from 'react';
import { item } from './Dropdown.module.css';

const ItemLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest} className={item}>
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

export default MenuItemComponent;
