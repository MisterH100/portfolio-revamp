"use client";
import Image from "next/image";
import menuIconLight from "@/public/menu-icon-light.svg";
import closeIconLight from "@/public/close-icon-light.svg";
import settingsIconLight from "@/public/settings.svg";
import settingsIconDark from "@/public/settings-icon-dark.svg";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeContext } from "@/lib/themeContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Switch } from "@/components/ui/switch";
import { Label } from "./ui/label";

export const Nav = () => {
  const {
    theme,
    setTheme,
    selected,
    setSelected,
    animationType,
    setAnimationType,
  } = useThemeContext();
  const [open, setOpen] = useState(false);
  const [settingsIcon, setSettingsIcon] = useState(settingsIconLight);
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
    setSettingsIcon(
      theme === "card_light" ? settingsIconDark : settingsIconLight
    );
  }, [theme]);

  return (
    <nav className="w-full flex pt-4 px-8 md:px-36 overflow-hidden">
      <AnimatePresence key="nav-bar">
        {open && (
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ opacity: 0, x: -400 }}
            transition={{ type: animationType }}
            className={`${theme} w-full flex flex-col md:flex-row items-center gap-10 h-[900px] md:h-[104px] z-[100] rounded-l-xl overflow-hidden`}
          >
            <div className="hidden md:block">
              <Dialog>
                <DialogTrigger>
                  <Button
                    className="md:ml-10 w-[60px] h-[60px] flex items-center bg-transparent"
                    onClick={() => {
                      if (typeof window != "undefined") {
                        if (window.innerWidth < DESKTOP_SCREEN_WIDTH) {
                          setOpen(false);
                        }
                      }
                    }}
                  >
                    <motion.div
                      whileTap={{ rotate: 45 }}
                      transition={{ type: animationType }}
                    >
                      <Image
                        className="w-[60px] h-[60px]"
                        src={settingsIcon}
                        alt="settings-icon-light"
                        width={50}
                        height={50}
                        priority
                      />
                    </motion.div>
                  </Button>
                </DialogTrigger>
                <DialogContent className={`${theme}`}>
                  <DialogHeader className="mb-4">
                    <DialogTitle>Settings</DialogTitle>
                  </DialogHeader>
                  <div className="flex justify-between items-center">
                    <DialogTitle>Light Mode</DialogTitle>
                    <Switch
                      className={`${
                        theme === "card_dark" && "border-foreground"
                      }`}
                      checked={theme === "card_light"}
                      onCheckedChange={() =>
                        setTheme(
                          theme === "card_dark" ? "card_light" : "card_dark"
                        )
                      }
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <DialogTitle>Bouncy Animations</DialogTitle>
                    <Switch
                      className={`${
                        theme === "card_dark" && "border-foreground"
                      }`}
                      checked={animationType === "spring"}
                      onCheckedChange={() =>
                        setAnimationType(
                          animationType === "tween" ? "spring" : "tween"
                        )
                      }
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className={`w-full flex justify-center px-10 py-4 md:hidden`}>
              <Collapsible className="w-full">
                <CollapsibleTrigger asChild>
                  <Button className={`${theme} w-full border border-input`}>
                    Settings
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="py-4 border-b border-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="light-mode">Light Mode</Label>
                    <Switch
                      id="light-mode"
                      className={`${
                        theme === "card_dark" && "border-foreground"
                      } ml-auto`}
                      checked={theme === "card_light"}
                      onCheckedChange={() =>
                        setTheme(
                          theme === "card_dark" ? "card_light" : "card_dark"
                        )
                      }
                    />
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <Label htmlFor="bouncy-animations">Bouncy Animations</Label>
                    <Switch
                      id="bouncy-animations"
                      className={`${
                        theme === "card_dark" && "border-foreground"
                      } ml-auto`}
                      checked={animationType === "spring"}
                      onCheckedChange={() =>
                        setAnimationType(
                          animationType === "tween" ? "spring" : "tween"
                        )
                      }
                    />
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
            <ul className="w-full flex flex-col md:flex-row justify-evenly text-center gap-20 md:gap-0">
              {navLinks.map((link) => (
                <li className="p-2 mx-10 md:mx-0 relative" key={link.id}>
                  <Link
                    className={`relative z-10 ${
                      selected === link.name && "text-foreground"
                    }`}
                    onClick={() => {
                      setSelected(link.name);
                    }}
                    href={link.path}
                  >
                    {link.name}
                  </Link>
                  {selected === link.name && (
                    <motion.span
                      layoutId="pill-tab"
                      transition={{ type: animationType, duration: 0.5 }}
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
              className="flex items-center text-foreground justify-center whitespace-nowrap rounded-md text-sm font-medium w-[200px] h-[52px] bg-secondary hover:bg-accent md:mr-10"
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
            <motion.div
              whileTap={{ rotate: 45 }}
              exit={{ scale: 0.2 }}
              transition={{ type: animationType }}
            >
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
            <motion.div
              whileTap={{ rotate: -45 }}
              exit={{ scale: 0.2 }}
              transition={{ type: animationType }}
            >
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
