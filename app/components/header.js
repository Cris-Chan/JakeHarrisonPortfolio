"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

function Header() {
  const route = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-center h-16 bg-black">
      <nav className="p-6 hidden sm:flex flex-row gap-12 justify-center text-center max-w-lg bg-black z-20">
        <Link href={"/"}>
          <motion.h3
            whileHover={{ scale: 1.1 }}
            className={route === "/" ? "underline" : ""}
          >
            HOME
          </motion.h3>
        </Link>
        <Link href={"/shows"}>
          <motion.h3
            whileHover={{ scale: 1.1 }}
            className={route === "/shows" ? "underline" : ""}
          >
            UPCOMING SHOWS
          </motion.h3>
        </Link>
        <Link href={"/merch"}>
          <motion.h3
            whileHover={{ scale: 1.1 }}
            className={route === "/merch" ? "underline" : ""}
          >
            MERCH
          </motion.h3>
        </Link>
        <Link href={"/about"}>
          <motion.h3
            whileHover={{ scale: 1.1 }}
            className={route === "/about" ? "underline" : ""}
          >
            ABOUT
          </motion.h3>
        </Link>
      </nav>
      {/* now we define the hamburger button */}
      <div className="sm:hidden relative flex items-center">
        <button onClick={toggleOpen}>
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
              animate={isOpen ? "open" : "closed"}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
              animate={isOpen ? "open" : "closed"}
            />
            <Path
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
              animate={isOpen ? "open" : "closed"}
            />
          </svg>
        </button>
      </div>
      {/* now we define the mobile menue */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className="absolute gap-5 flex flex-col bg-black top-16 w-screen items-center pb-8 z-0"
          >
            <Link
              href={"/"}
              onClick={() => {
                toggleOpen();
              }}
            >
              <motion.h3
                whileHover={{ scale: 1.1 }}
                className={route === "/" ? "underline" : ""}
              >
                HOME
              </motion.h3>
            </Link>
            <Link
              href={"/shows"}
              onClick={() => {
                toggleOpen();
              }}
            >
              <motion.h3
                whileHover={{ scale: 1.1 }}
                className={route === "/shows" ? "underline" : ""}
              >
                UPCOMING SHOWS
              </motion.h3>
            </Link>
            <Link
              href={"/merch"}
              onClick={() => {
                toggleOpen();
              }}
            >
              <motion.h3
                whileHover={{ scale: 1.1 }}
                className={route === "/merch" ? "underline" : ""}
              >
                MERCH
              </motion.h3>
            </Link>
            <Link
              href={"/about"}
              onClick={() => {
                toggleOpen();
              }}
            >
              <motion.h3
                whileHover={{ scale: 1.1 }}
                className={route === "/about" ? "underline" : ""}
              >
                ABOUT
              </motion.h3>
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
