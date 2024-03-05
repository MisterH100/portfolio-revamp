"use client";
import Image from "next/image";
import menuIconLight from "@/public/menu-icon-light.svg";
import closeIconLight from "@/public/close-icon-light.svg";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeContext } from "@/lib/themeContext";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Projects", path: "/projects" },
    { id: 4, name: "Contact", path: "/contact" },
  ];
  const { selected, setSelected } = useThemeContext();

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
            className="w-full flex flex-col md:flex-row items-center gap-10 h-[900px] md:h-[104px] z-[100] rounded-l-xl bg-card overflow-hidden"
          >
            <ul className="w-full flex flex-col md:flex-row justify-evenly pt-20 md:pt-0 text-center gap-20 md:gap-0">
              {navLinks.map((link) => (
                <li className="p-2 mx-10 md:mx-0 relative" key={link.id}>
                  <Link
                    className="relative z-10"
                    onClick={() => {
                      setSelected(link.name);
                      if (typeof window != "undefined") {
                        if (window.innerWidth < DESKTOP_SCREEN_WIDTH) {
                          setOpen(false);
                        }
                      }
                    }}
                    href={link.path}
                  >
                    {link.name}
                  </Link>
                  {selected === link.name && (
                    <motion.span
                      layoutId="pill-tab"
                      transition={{ type: "spring", duration: 0.5 }}
                      className="absolute inset-0 z-0 bg-accent rounded-md"
                    ></motion.span>
                  )}
                </li>
              ))}
            </ul>
            <Link
              href="./HandsomeNyathiCVnew.pdf"
              download="Handsome Nyathi Cv"
              target="_blank"
              className="flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium w-[200px] h-[52px] bg-secondary hover:bg-accent md:mr-10"
            >
              Download Cv
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        className="pr-0 h-[104px] flex items-center flex-shrink-0 ml-auto bg-transparent"
        onClick={() => setOpen(!open)}
      >
        <AnimatePresence>
          {open ? (
            <motion.div whileTap={{ rotate: 45 }} exit={{ scale: 0.2 }}>
              <Image
                className="w-[auto] h-[auto]"
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
                className="w-[auto] h-[auto]"
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
