import styles from './Navbar.module.css';
import Dropdown from './Dropdown';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/jumble-logo-full.png';

function Navbar() {
  return (
    <header className="p-4 bg-gray-100 text-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <Link href="/">
          <a
            rel="noopener noreferrer"
            aria-label="Back to homepage"
            className="flex items-center p-2 ml-2"
          >
            <div className="relative w-40 h-12">
              <Image
                src={logo}
                alt={'Jumble Logo'}
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
          </a>
        </Link>

        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link href="/organizations">
              <a rel="noopener noreferrer" className={styles.a}>
                Org List
              </a>
            </Link>
          </li>
          <li className="flex">
            <Dropdown />
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
