import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuText, setMenuText] = useState("menu");
  return (
    <nav className="flex h-screen w-full items-center justify-center">
      {showMenu ? (
        <div className="absolute inset-0 z-20 flex h-full w-full items-center justify-center bg-amber-400">
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
                  text-center text-3xl text-slate-100"
                onClick={() => {
                  setMenuText("menu");
                  setShowMenu(false);
                }}
              >
                c
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <motion.div
          onDrag={(e, info) => {
            if (
              info.offset.x > 50 ||
              info.offset.x < -50 ||
              info.offset.y > 50 ||
              info.offset.y < -50
            ) {
              setMenuText("open");
            }
            if (
              info.offset.x > 120 ||
              info.offset.x < -120 ||
              info.offset.y > 120 ||
              info.offset.y < -120
            ) {
              setShowMenu(true);
            }
          }}
          onDragEnd={() => {
            setMenuText("menu");
          }}
          dragSnapToOrigin={true}
          drag
          dragConstraints={{ left: -200, right: 200 }}
          className="absolute cursor-pointer text-3xl text-slate-100 hover:text-amber-500"
        >
          {menuText}
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
