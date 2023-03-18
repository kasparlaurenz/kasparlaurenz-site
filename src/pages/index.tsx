import { type NextPage } from "next";
import Head from "next/head";
import BigNav from "~/components/Navigation/BigNav";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>kasparlaurenz</title>
        <meta name="description" content="kasparlaurenz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BigNav />
    </>
  );
};

export default Home;
