import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>Dallas Vaughn | About</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Dallas Vaughn is a frontend engineer bringing design specifications to life in Seattle, WA"
        />
      </Head>

      <main>
        <div className="mt-36 md:mt-48 md:mb-24 max-w-[560px] mx-auto">
          <h2 className="px-4 text-3xl font-medium">I'm Dallas.</h2>
          <p className="p-4 font-light leading-7 text-sm">
            I'm a frontend developer currently living in Seattle, WA, and I
            enjoy making design specifications come to life. My professional
            experience involves work for a financial services startup, where I
            have been the sole frontend engineer for over a year. One of my
            favorite aspects of the job is learning about and implementing
            modern solutions to solve UI/UX issues. I like to say that every
            week, I am learning something new on the job because that feels like
            it has been the case thus far, and that makes the job fresh and
            exciting.
            <br />
            <br />
            When I'm not developing frontends, I'm usually playing some sort of
            game either on PC, PS5, or Switch. Games have always been a fun and
            intriguing escape from the real world, and they are constantly
            stimulating my brain and making me work by solving puzzles or
            forming strategies to get ahead. Additionally, I'd argue many of
            today's games are better at showcasing and telling stories than
            movies and TV shows, which is an added bonus.
            <br />
            <br />I also have a wonderful husky at home with me; he is quite a
            handful, but it's worth it :)
            <br />
            <br />
            Feel free to connect with me on{' '}
            <a
              className="text-teal-700"
              href="https://www.linkedin.com/in/dallas-vaughn/"
              target="_blank"
            >
              LinkedIn
            </a>{' '}
            if you have any questions, or even if you'd simply like to chat
            about anything development related!
            <br />
            <span className="text-[0.5rem] text-slate-500">
              or how much of a handful your own husky is . . .
            </span>
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
