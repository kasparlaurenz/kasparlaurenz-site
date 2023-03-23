import { AnimatePresence } from "framer-motion";
import type { NextPage } from "next";
import { useState } from "react";
import NavModal from "~/components/Navigation/Nav";

const About: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return <h1>About</h1>;
};

export default About;
