import Head from "next/head";

const PageHead: React.FC = () => {
  return (
    <Head>
      <title>Spotify - Web Player: Music for everyone</title>
      <meta name="description" content="Spotify clone" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageHead;
