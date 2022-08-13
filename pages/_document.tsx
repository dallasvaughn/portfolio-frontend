import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&family=Kanit:wght@600;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="flex max-w-5xl flex-col mx-auto justify-between min-h-screen py-5">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
