import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import { useState } from "react";
import NavModal from "~/components/Navigation/Nav";

const About: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return (
    <>
      <div className="absolute z-10">
        <button onClick={() => (isOpen ? close() : open())}>
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && <NavModal handleClose={close} />}
      </AnimatePresence>
    </>
  );
};

export default About;
