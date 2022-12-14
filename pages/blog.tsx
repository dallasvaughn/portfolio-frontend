import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
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

const Blog: NextPage<Props> = ({ allPostsData }) => {
  return (
    <>
      <Head>
        <title>Dallas Vaughn | Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Dallas Vaughn is a frontend engineer bringing design specifications to life in Seattle, WA"
        />
      </Head>

      <main className="flex flex-col gap-3 border rounded p-6 mx-auto mt-16 md:max-w-screen-sm">
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
      </main>
    </>
  );
};

export default Blog;
