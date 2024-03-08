"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Circle } from "@/components/bg-circle";
import { motion } from "framer-motion";
import { useThemeContext } from "@/lib/themeContext";

export default function About() {
  const { theme, setSelected, animationType } = useThemeContext();
  return (
    <div className="relative pt-10 px-8 md:px-36 overflow-hidden">
      <Circle className="hidden md:block top-[10%] left-[20%] " />
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        transition={{ type: animationType }}
      >
        <Card
          className={`${theme} md:z-0 w-full border-none md:pt-20 mb-10 rounded-xl`}
        >
          <CardHeader className="md:text-center">
            <CardTitle className="relative z-20 text-3xl font-bold tracking-wider">
              About me_
            </CardTitle>
          </CardHeader>
          <CardContent
            className={`${theme} mt-10 md:mt-0 p-10 md:bg-none rounded-xl`}
          >
            <p className="relative z-20 text-lg">
              Hello ! I'm <span className="font-black">Handsome Nyathi</span>, a
              skilled web developer with a keen focus on UI/UX design
              exploration.My work revolves around the dynamic
              <span className="underline">MERN</span> tech stack, enabling me to
              craft immersive digital experiences.Backed by years of web
              development expertise,I'm committed to delivering polished
              solutions.My boundless enthusiasm for technology drives my
              continuous learning and innovation.
              <span className="font-black">
                Let's collaborate and bring your digital visions to life!
              </span>
            </p>
          </CardContent>
          <CardFooter className="flex-col">
            <div className="w-full flex justify-center py-10">
              <Link
                href="./HandsomeNyathiCVnew.pdf"
                download="Handsome Nyathi Cv"
                target="_blank"
                className="flex items-center text-foreground justify-center whitespace-nowrap rounded-md text-sm font-medium w-[200px] h-[52px] bg-secondary hover:bg-accent"
              >
                Download Cv
              </Link>
            </div>
            <div className="flex items-center justify-center gap-4 md:gap-20">
              <Link onClick={() => setSelected("Home")} href={"/"}>
                <motion.span
                  className="pr-6 inline-block"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  &lt;
                </motion.span>
                home
              </Link>
              <Link onClick={() => setSelected("Projects")} href={"/projects"}>
                projects
                <motion.span
                  className="pl-4 inline-block"
                  animate={{ x: [10, 0, 10] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  &gt;
                </motion.span>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
