import { getAllPostIds, getPostData } from '../../lib/posts';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import styles from './[id].module.css';
import Head from 'next/head';

interface Props {
  postData: {
    title: string;
    preview: string;
    displayDate: string;
    contentHtml: string;
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = params && (await getPostData(params.id));
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

const Post: NextPage<Props> = ({ postData }) => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto mt-16 max-w-screen-md p-5 md:p-16 shadow-xl">
        <span className="text-sm text-teal-700">{postData.displayDate}</span>
        <h1 className="font-black text-3xl md:text-4xl mb-4 mt-3">
          {postData.title}
        </h1>
        <div
          className={`font-extralight leading-7 text-[15px] ${styles.text_body}`}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        <div className="mt-10">
          <hr />
          <p className="mt-6 text-[12px] font-extralight tracking-wide">
            Written by <span className="font-bold">Dallas Vaughn</span> in
            Seattle, WA.
          </p>
        </div>
      </main>
    </>
  );
};

export default Post;
