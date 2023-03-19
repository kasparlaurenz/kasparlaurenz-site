import Link from "next/link";
import React, { type FC } from "react";

type MenuProps = {
  setMenuText: React.Dispatch<React.SetStateAction<string>>;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage?: string;
};

const Menu: FC<MenuProps> = ({ setMenuText, setShowMenu, currentPage }) => {
  console.log("currentPage", currentPage);
  return (
    <nav className="absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-amber-400">
      <ul className="flex flex-col items-center gap-3">
        <li>
          <Link
            className=" hover:text-neutral-900 hover:underline"
            href="/home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              if (currentPage === "/about") setShowMenu(false);
            }}
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
  );
};

export default Menu;
