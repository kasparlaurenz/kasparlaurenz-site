import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const BigNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuText, setMenuText] = useState("menu");

  return (
    <div className="flex h-screen w-full items-center justify-center">
      {showMenu && (
        <nav className="absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-amber-400">
          <ul className="flex flex-col items-center gap-3">
            <li>
              <Link
                className=" hover:text-neutral-900 hover:underline"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-neutral-900 hover:underline"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <button
                className="
                    text-center  text-slate-100 hover:text-neutral-900 hover:underline"
                onClick={() => {
                  setMenuText("menu");
                  setShowMenu(false);
                }}
              >
                Close
              </button>
            </li>
          </ul>
        </nav>
      )}
      <motion.div
        drag
        dragSnapToOrigin
        dragConstraints={{ right: 200, left: -200, top: -200, bottom: 200 }}
        dragElastic={0.2}
        onDragEnd={() => {
          if (menuText === "open") {
            setShowMenu(true);
          }
          setMenuText("menu");
        }}
        onDrag={(e, info) => {
          if (info.offset.x > 100 || info.offset.x < -100) {
            setMenuText("open");
          }
          if (info.offset.y > 100 || info.offset.y < -100) {
            setMenuText("guestbook");
          }
        }}
        className=" h-18 w-18 absolute  cursor-pointer rounded-full p-3 font-poppins text-7xl font-semibold text-slate-100 hover:text-amber-500"
        onMouseOver={() => {
          setMenuText("drag");
        }}
        onMouseLeave={() => {
          setMenuText("menu");
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {menuText}
      </motion.div>
    </div>
  );
};

export default BigNav;
