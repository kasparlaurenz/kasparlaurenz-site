import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="flex items-center justify-between">
      <div>
        <h1 className="text-6xl">kasparlaurenz</h1>
      </div>

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
                className="h-11
                 w-11 border-2 text-center text-3xl hover:border-neutral-900 hover:text-neutral-900"
                onClick={() => setShowMenu(false)}
              >
                c
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <button
          className="h-12 w-12 rounded-full  border-2 text-3xl hover:border-amber-500 hover:text-amber-500"
          onClick={() => setShowMenu(true)}
        >
          m
        </button>
      )}
    </nav>
  );
};

export default Nav;
