import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/jumble-logo-full.png';

function Footer() {
  return (
    <footer className="px-4 py-8 bg-gray-100 text-gray-600">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <Link href="/">
            <a
              rel="noopener noreferrer"
              aria-label="Back to homepage"
              className="flex items-center px-2 ml-2"
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
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            {/* Left side text */}
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 mr-8 space-x-4 sm:space-x-8">
          <li>
            <p className="text-right">Contact Us</p>
            <p>admin@joinjumble.com</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
