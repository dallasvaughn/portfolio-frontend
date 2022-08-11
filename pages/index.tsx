import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.svg';
import crow from '../public/crow-fly.svg';

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

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <div className="relative top-0 mb-20">
          <div className="h-10 sm:h-20"></div>
          <div className="animate-slow-pulse relative opacity-20 min-h-[450px] sm:min-h-[500px] w-screen">
            <Image src={crow} layout="fill" />
          </div>
          <div className="absolute w-full h-full top-0 flex align-center justify-center">
            <div className="absolute w-full h-full z-0 backdrop-blur-sm"></div>
            <div className="my-auto z-10 font-['Kanit'] text-5xl sm:text-8xl font-black uppercase flex flex-col">
              <span className="sm:text-right">Frontend</span>
              <span className="bg-neutral-300/60 border border-black py-3 sm:py-5 px-5 sm:px-10">
                Developer
              </span>
            </div>
          </div>
        </div>
        <div>
          CONTENT GOES HERE CONTENT GOES HERE CONTENT GOES HERE CONTENT GOES
          HERE CONTENT GOES HERE CONTENT GOES HERE CONTENT GOES HERE CONTENT
          GOES HERE CONTENT GOES HERE CONTENT GOES HERE
        </div>
      </main>
    </>
  );
};

export default Home;
