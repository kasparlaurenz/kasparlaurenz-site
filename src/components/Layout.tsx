import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import NavModal from "./Navigation/Nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { pathname } = router;
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
        <div className="mx-auto h-screen w-full max-w-5xl bg-neutral-900">
          {pathname === "/" ? (
            <>{children}</>
          ) : (
            <>
              <input
                type="checkbox"
                id="menu_checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    open();
                  } else {
                    close();
                  }
                }}
              />
              <label
                htmlFor="menu_checkbox"
                className="inset-0 top-36 right-60 z-10 text-9xl"
              >
                <div className="bg-yellow-400"></div>
                <div className="bg-yellow-400"></div>
                <div className="bg-yellow-400"></div>
              </label>
              <AnimatePresence initial={false}>
                {isOpen && <NavModal handleClose={close} />}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Layout;
