import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/jumble-logo.svg';

function Footer() {
  return (
    <footer className="px-4 py-8 bg-gray-100 text-gray-600">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <Link href="/">
            <a
              rel="noopener noreferrer"
              aria-label="Back to homepage"
              className="flex items-center pl-4"
            >
              <Image
                src={logo}
                alt={'Jumble Logo'}
                width={48}
                height={48}
              ></Image>
              <h1 className="pl-4 font-semibold text-xl">Jumble</h1>
            </a>
          </Link>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            {/* Left side text */}
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 pr-8 space-x-4 sm:space-x-8">
          <li>
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-black hover:text-purple-600"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
