import { motion } from "framer-motion";
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
      y: "100vh",
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
        className="flex h-screen w-full flex-col gap-3 rounded-lg bg-yellow-500"
      >
        <ul className="flex flex-col gap-3">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </motion.nav>
    </Backdrop>
  );
};

export default NavModal;
