import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import crow from '../public/crow-fly.svg';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, SyntheticEvent } from 'react';
import Project from '../components/Project';
import Post from '../components/Post';
import { getSortedPostsData } from '../lib/posts';

interface Props {
  allPostsData: [];
}

interface PostData {
  title: string;
  preview: string;
  displayDate: string;
  id: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Home: NextPage<Props> = ({ allPostsData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      document.getElementById('top-line')?.classList.add('top-line');
      document.getElementById('left-line')?.classList.add('left-line');
      document.getElementById('bottom-line')?.classList.add('bottom-line');
      document.getElementById('right-line')?.classList.add('right-line');
    }
  }, [inView]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    try {
      fetch('/api/contact', {
        method: 'post',
        body: JSON.stringify(data),
      });
      setResponse('Thanks, I will get back to you as soon as possible!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setResponse(
        'Sorry, an error occurred trying to send this message. Try again later.'
      );
    }
  };

  return (
    <>
      <Head>
        <title>Dallas Vaughn | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center p-1">
        <div className="relative top-0 mb-20">
          <div className="h-10 sm:h-20"></div>
          <div className="animate-fade-in relative opacity-0 min-h-[450px] sm:min-h-[500px] crow">
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

        <section className="mt-20 flex flex-col lg:flex-row gap-20 lg:gap-8">
          <div>
            <h3 className="uppercase tracking-widest mb-4">
              Previous Work / Projects
            </h3>
            <div className="flex flex-col gap-3">
              <Project
                url="https://skymeta.com"
                title="SkyMeta"
                description="Commercial Real Estate Lending"
              />
              <Project
                url="https://krave.vercel.app"
                title="Krave"
                description="E-commerce Mock UI"
              />
              <Project
                url="https://dallasvaughn.github.io/testing-site-locator/"
                title="COVID-19 Testing"
                description="Sample Testing Data Visualization"
              />
            </div>
          </div>
          <div>
            <h3 className="uppercase tracking-widest mb-4">Recent Posts</h3>
            <div className="flex flex-col gap-5 border rounded p-6 sm:max-w-[32rem]">
              {allPostsData.map((post: PostData) => {
                return (
                  <Post
                    key={post.id}
                    title={post.title}
                    preview={post.preview}
                    displayDate={post.displayDate}
                    link={`/blog/${post.id}`}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="w-full relative">
          <div
            ref={ref}
            className="box mt-20 mx-auto lg:mt-40 lg:left-40 lg:mx-0 bg-white"
          >
            <svg className="box-svg inline" width="300px" height="200px">
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

          <div className=" shadow-2xl w-full sm:max-w-screen-sm sm:mx-auto -mt-40 mb-10 -z-10 p-8">
            <p className="lg:text-left mt-40 lg:mt-0 lg:ml-auto lg:w-1/2 font-extralight text-[15px] leading-7">
              If you have any questions for me, want to discuss any work
              opportunities, or simply want to chat about something, feel free
              to use this form to get in touch with me!
            </p>
            <form onSubmit={handleSubmit}>
              <input
                className="w-full border p-2 mt-6 lg:mt-10 font-extralight text-[15px]"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="w-full border p-2 mt-6 font-extralight text-[15px]"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                className="w-full border p-2 mt-6 font-extralight text-[15px]"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              {response && (
                <p className="mt-2 text-[15px] font-extralight">{response}</p>
              )}
              <button
                className="bg-black hover:bg-slate-700 text-white pt-4 pb-3 px-6 font-bold uppercase mt-4"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
