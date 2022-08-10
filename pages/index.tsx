import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.svg';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dallas Vaughn | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
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
              <span className="ml-4 link border-b-2 border-teal-800 rounded-sm cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/">
              <span className="ml-4 transition-all ease-in-out hover:border-b-2 cursor-pointer">
                Blog
              </span>
            </Link>
            <Link href="/">
              <span className="ml-4 transition-all ease-in-out hover:border-b-2 cursor-pointer">
                About
              </span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center"></main>
    </>
  );
};

export default Home;
