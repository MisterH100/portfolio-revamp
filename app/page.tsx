"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import githubIcon from "@/public/github-icon.svg";
import linkedInIcon from "@/public/linkedin-icon.svg";
import twitterIcon from "@/public/twitter-icon.svg";
import instagramIcon from "@/public/instagram-icon.svg";
import Selfie from "@/public/selfie.png";
import Link from "next/link";
import { Circle } from "@/components/bg-circle";
import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useThemeContext } from "@/lib/themeContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const [socials, setSocials] = useState([
    {
      id: 1,
      name: "Github",
      icon: githubIcon,
      link: "https://github.com/MisterH100",
    },
    {
      id: 2,
      name: "Linked In",
      icon: linkedInIcon,
      link: "https://linkedin.com/in/handsome-nyathi-9a3116275",
    },
    {
      id: 3,
      name: "Twitter",
      icon: twitterIcon,
      link: "https://twitter.com/handsome_nyathi",
    },
    {
      id: 4,
      name: "Instagram",
      icon: instagramIcon,
      link: "https://www.instagram.com/handsome_nyathi/",
    },
  ]);
  const { setSelected } = useThemeContext();

  return (
    <main className="relative w-full min-h-screen flex justify-center pt-10 px-8 md:px-36 overflow-hidden">
      <Circle className="top-[100px] left-[200px] "></Circle>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        transition={{ type: "tween" }}
        className="md:w-full md:h-[606px]"
      >
        <Card className="border-none md:w-full md:h-[606px] md:pt-20 rounded-xl bg-transparent md:bg-card">
          <CardHeader>
            <CardTitle className="min-h-[100px] md:min-h-fit relative z-20 text-xl font-bold md:text-center tracking-wider">
              <TypeAnimation
                sequence={[
                  "Meet your next Developer",
                  2000,
                  "Meet your next Front-end developer",
                  2000,
                  "Meet your next Back-end developer",
                  2000,
                  "Meet your next Web designer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "2em",
                }}
                repeat={Infinity}
              />
            </CardTitle>
          </CardHeader>
          <CardHeader className="md:text-center rounded-t-xl bg-card">
            <Avatar className="md:mx-auto w-20 h-20">
              <AvatarImage src={Selfie.src} />
              <AvatarFallback>HN</AvatarFallback>
            </Avatar>
            <CardTitle className="relative z-20 text-3xl font-medium tracking-wider">
              Handsome Nyathi
            </CardTitle>
            <CardDescription className="relative z-20">
              Full stack web developer,
              <br />
              South Africa
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-20 grid grid-cols-3 md:flex justify-center gap-10 pt-10 bg-card">
            {socials.map((social) => (
              <Link href={social.link} target="_blank" key={social.id}>
                <Image
                  className="mb-4 md:mb-0"
                  src={social.icon}
                  alt={social.name}
                  width={50}
                  height={50}
                />
              </Link>
            ))}
          </CardContent>
          <CardFooter className="relative z-20 pt-10 rounded-b-xl bg-card">
            <Link
              onClick={() => setSelected("About")}
              className="w-full text-center"
              href={"/about"}
            >
              about
              <motion.span
                className="pl-4 inline-block"
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                &gt;
              </motion.span>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </main>
  );
}
