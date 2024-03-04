"use client";
import Image from "next/image";
import menuIconLight from "@/public/menu-icon-light.svg";
import closeIconLight from "@/public/close-icon-light.svg";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Projects", path: "/projects" },
    { id: 4, name: "Contact", path: "/contact" },
  ];
  const DESKTOP_SCREEN_WIDTH = 768;
  if (typeof window != "undefined") {
    window.addEventListener("resize", () => {
      setOpen(false);
    });
  }
  useEffect(() => {
    if (typeof window != "undefined") {
      if (window.innerWidth > DESKTOP_SCREEN_WIDTH) {
        setOpen(true);
      }
    }
  }, []);

  return (
    <nav className="w-full flex pt-4 px-8 md:px-36 overflow-hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ opacity: 0, x: -400 }}
            transition={{ type: "tween" }}
            className="w-full flex flex-col md:flex-row items-center gap-10 h-[900px] md:h-[104px] z-[100] rounded-l-xl bg-[#080705] overflow-hidden"
          >
            <ul className="w-full flex flex-col md:flex-row justify-evenly pt-20 md:pt-0 text-center gap-20 md:gap-0">
              {navLinks.map((link) => (
                <li className="mr-2" key={link.id}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <Button className="w-[200px] h-[52px] bg-[#390895] hover:bg-[#c62df3] md:mr-10">
              Download Cv
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        className="pr-0 h-[104px] flex items-center flex-shrink-0 ml-auto"
        onClick={() => setOpen(!open)}
      >
        <AnimatePresence>
          {open ? (
            <motion.div whileTap={{ rotate: 45 }} exit={{ scale: 0.2 }}>
              <Image
                src={closeIconLight}
                alt="close-icon-light"
                width={50}
                height={50}
                priority
              />
            </motion.div>
          ) : (
            <motion.div whileTap={{ rotate: -45 }} exit={{ scale: 0.2 }}>
              <Image
                src={menuIconLight}
                alt="menu-icon-light"
                width={50}
                height={50}
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </nav>
  );
};
