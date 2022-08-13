import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.svg';
import crow from '../public/crow-fly.svg';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView) {
      document.getElementById('top-line')?.classList.add('top-line');
      document.getElementById('left-line')?.classList.add('left-line');
      document.getElementById('bottom-line')?.classList.add('bottom-line');
      document.getElementById('right-line')?.classList.add('right-line');
    }
  }, [inView]);

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

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center p-1">
        <div className="relative top-0 mb-20">
          <div className="h-10 sm:h-20"></div>
          <div className="animate-fade-in relative opacity-0 min-h-[450px] sm:min-h-[500px] w-screen">
            <Image src={crow} layout="fill" />
          </div>
          <div className="absolute w-full h-full top-0 flex align-center justify-center">
            <div className="absolute w-full h-full z-0 backdrop-blur-sm"></div>
            <div className="my-auto z-10 font-['Kanit'] text-5xl sm:text-8xl font-black uppercase flex flex-col animate-fade-in-right">
              <span className="sm:text-right">Frontend</span>
              <span className="bg-neutral-300/60 border border-black py-3 sm:py-5 px-5 sm:px-10">
                Developer
              </span>
            </div>
          </div>
        </div>

        <section className="w-full relative">
          <div ref={ref} className="box sm:mt-80 left-40">
            <svg
              className="box-svg hidden sm:inline"
              width="300px"
              height="200px"
            >
              <line
                id="top-line"
                className="box-line horizontal"
                x1="0"
                y1="0"
                x2="900"
                y2="0"
              />
              <line
                id="left-line"
                className="box-line vertical"
                x1="0"
                y1="200"
                x2="0"
                y2="-400"
              />
              <line
                id="bottom-line"
                className="box-line horizontal"
                x1="300"
                y1="200"
                x2="-600"
                y2="200"
              />
              <line
                id="right-line"
                className="box-line vertical"
                x1="300"
                y1="0"
                x2="300"
                y2="600"
              />
            </svg>
            <h2 className="font-['Kanit'] font-semibold text-6xl text-right uppercase mt-3 mr-2">
              Get
              <br />
              in
              <br />
              touch
            </h2>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
