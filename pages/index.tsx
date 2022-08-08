import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    const auth = async () => {
      const response = await axios.post(
        'http://localhost:1337/api/auth/local',
        {
          identifier: process.env.NEXT_PUBLIC_USER,
          password: process.env.NEXT_PUBLIC_PASS,
        }
      );
      console.log(response);
    };
    auth();
  }, []);

  const getPost = async (): Promise<void> => {
    const response = await axios.get('http://localhost:1337/api/articles', {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });
    console.log(response);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <button
          className="ring-2 ring-red-800 sm:ring-offset-4 sm:ring-offset-purple-900"
          onClick={getPost}
        >
          Get da data
        </button>
      </main>
    </div>
  );
};

export default Home;
