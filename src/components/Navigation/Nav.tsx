import { motion } from "framer-motion";
import Link from "next/link";
import Backdrop from "~/components/Backdrop";

const NavModal = ({ handleClose }: { handleClose: () => void }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: "-100vh",
      opacity: 0,
    },
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.nav
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex h-screen w-full flex-col items-center justify-center gap-3 bg-yellow-500"
      >
        <ul className=" flex flex-col items-center gap-8 text-6xl ">
          <li>
            <Link className="hover:text-neutral-800" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-neutral-800" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-neutral-800" href="">
              Contact
            </Link>
          </li>
        </ul>
      </motion.nav>
    </Backdrop>
  );
};

export default NavModal;
