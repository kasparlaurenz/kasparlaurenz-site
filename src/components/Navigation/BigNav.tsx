import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState, type FC } from "react";
import Menu from "./Menu";

type BigNavProps = {
  isHome: boolean;
  currentPage?: string;
};
const BigNav: FC<BigNavProps> = ({ isHome, currentPage }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuText, setMenuText] = useState("menu");
  const router = useRouter();

  return (
    <>
      {showMenu && (
        <Menu
          setMenuText={setMenuText}
          setShowMenu={setShowMenu}
          currentPage={currentPage}
        />
      )}
      {isHome ? (
        <div className="flex h-screen w-full items-center justify-center">
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
            onDrag={(_, info) => {
              if (info.offset.x > 100 || info.offset.x < -100) {
                setMenuText("open");
              }
              if (info.offset.y > 100 || info.offset.y < -100) {
                setMenuText("open");
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
      ) : (
        <div className="flex cursor-pointer justify-between pt-8">
          <div
            onClick={() => {
              router.push("/");
            }}
          >
            <div>kaspar</div>
            <div className="text-3xl">laurenz</div>
          </div>
          <motion.button
            className="h-5 w-5 bg-amber-400 text-3xl hover:bg-slate-100 hover:text-amber-400"
            onClick={() => {
              setMenuText("menu");
              setShowMenu(true);
            }}
            whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Menu
          </motion.button>
        </div>
      )}
    </>
  );
};

export default BigNav;
