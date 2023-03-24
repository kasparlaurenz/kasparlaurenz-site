import { motion } from "framer-motion";
import { ReactNode } from "react";

const Backdrop = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <motion.div
      className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-neutral-900 opacity-75"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
