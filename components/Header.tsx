import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.svg';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <header className="pt-5">
      <div className="flex justify-between items-center px-5">
        <Link href="/">
          <span className="flex items-center cursor-pointer">
            <Image src={logo} alt="logo" width={70} height={70} />
            <span className="text-2xl hidden sm:flex flex-col ml-4 mt-2 uppercase">
              <strong className="font-black">Dallas</strong>{' '}
              <span className="font-extralight ml-6 -mt-3">Vaughn</span>
            </span>
          </span>
        </Link>
        <nav className="flex text-sm">
          <Link href="/">
            <span
              className={`ml-4 transition-all ease-in-out link ${
                router.pathname === '/' && 'border-b-2 border-teal-800'
              } hover:border-b-2 rounded-sm cursor-pointer`}
            >
              Home
            </span>
          </Link>
          <Link href="/blog">
            <span
              className={`ml-4 transition-all ease-in-out link ${
                router.pathname.includes('/blog') &&
                'border-b-2 border-teal-800'
              } hover:border-b-2 rounded-sm cursor-pointer`}
            >
              Blog
            </span>
          </Link>
          <Link href="/about">
            <span
              className={`ml-4 transition-all ease-in-out link ${
                router.pathname === '/about' && 'border-b-2 border-teal-800'
              } hover:border-b-2 rounded-sm cursor-pointer`}
            >
              About
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
