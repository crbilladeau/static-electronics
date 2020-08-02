import Head from 'next/head';

const Meta = () => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-sclae=1' />
      <meta charSet='utf-8' />
      <link rel='shortcut icon' href='/static/favicon.ico' />
      <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
      <title>static</title>
    </Head>
  );
};

export default Meta;
