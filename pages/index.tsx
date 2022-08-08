import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
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
          <span className="flex items-center">
            <Image src={logo} alt="logo" width={70} height={70} />
            <span className="text-2xl hidden sm:flex flex-col ml-4 mt-2 uppercase">
              <strong className="font-black">Dallas</strong>{' '}
              <span className="font-extralight ml-6 -mt-3">Vaughn</span>
            </span>
          </span>
          <nav className="flex text-sm">
            <a
              className="ml-4 link border-b-2 border-teal-800 rounded-sm"
              href="/"
            >
              Home
            </a>
            <a className="ml-4 transition-all ease-in-out hover:border-b-2 ">
              Blog
            </a>
            <a className="ml-4">About</a>
          </nav>
        </div>
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center"></main>
    </>
  );
};

export default Home;
