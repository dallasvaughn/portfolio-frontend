import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';
import PostList from '../components/PostList';
import { getSortedPostsData } from '../lib/posts';
import ContactForm from '../components/ContactForm';

interface Props {
  allPostsData: [];
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
  const { ref, inView } = useInView();

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
        <meta
          name="description"
          content="Dallas Vaughn is a frontend engineer bringing design specifications to life in Seattle, WA"
        />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center p-1">
        <Hero />
        <section className="mt-5 md:mt-20 flex flex-col lg:flex-row gap-20 lg:gap-8">
          <ProjectList />
          <PostList allPostsData={allPostsData} />
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

          <ContactForm />
        </section>
      </main>
    </>
  );
};

export default Home;
