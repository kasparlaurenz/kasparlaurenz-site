import { motion } from "framer-motion";
import Link from "next/link";
import Backdrop from "~/components/Backdrop";

const NavModal = ({ handleClose }: { handleClose?: () => void }) => {
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

  const Links = [
    {
      href: "/",
      label: "Home",
    },

    {
      href: "/about",
      label: "About",
    },

    {
      href: "/contact",
      label: "Contact",
    },
  ];
  return (
    <Backdrop onClick={handleClose!}>
      <motion.nav
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex h-screen w-full flex-col items-center justify-center gap-3 bg-yellow-500"
      >
        <ul className=" flex flex-col items-center gap-8 text-6xl ">
          {Links.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              label={link.label}
              handleClose={handleClose}
            />
          ))}
        </ul>
      </motion.nav>
    </Backdrop>
  );
};

export default NavModal;

const NavItem = ({
  label,
  href,
  handleClose,
}: {
  label: string;
  href: string;
  handleClose?: () => void;
}) => {
  return (
    <li>
      <Link
        className="duration-250 hover:text-neutral-800"
        href={href}
        onClick={handleClose}
      >
        {label}
      </Link>
    </li>
  );
};
