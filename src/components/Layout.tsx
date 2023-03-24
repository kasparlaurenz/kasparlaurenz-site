import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import MenuButton from "./Buttons/Menu";
import NavModal from "./Navigation/Nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { pathname } = router;

  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  return (
    <>
      <Head>
        <title>kasparlaurenz</title>
        <meta name="description" content="kasparlaurenz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg h-screen w-full bg-neutral-900 text-slate-100">
        <div
          className={`mx-auto h-screen w-full max-w-5xl bg-neutral-900 ${
            isHome ? "pt-0" : "pt-32"
          }`}
        >
          {!isHome && <MenuButton isOpen={isOpen} open={open} close={close} />}
          <AnimatePresence initial={false}>
            {isOpen && <NavModal handleClose={close} />}
          </AnimatePresence>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
