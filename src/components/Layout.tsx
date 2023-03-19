import Head from "next/head";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>kasparlaurenz</title>
        <meta name="description" content="kasparlaurenz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg h-screen w-full bg-neutral-900 text-slate-100">
        <div className="mx-auto h-screen w-full max-w-5xl bg-neutral-900">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
