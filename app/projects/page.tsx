"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import Link from "next/link";
import { Circle } from "@/components/bg-circle";
export default function Projects() {
  const [open, setOpen] = useState(false);
  const DESKTOP_SCREEN_WIDTH = 768;
  if (typeof window != "undefined") {
    window.addEventListener("resize", () => {
      if (window.innerWidth < DESKTOP_SCREEN_WIDTH) {
        setOpen(false);
      }
    });
  }
  return (
    <div className="relative pt-10 md:px-36 overflow-hidden">
      <Circle className="top-[200px] -right-[100px] md:right-[100px]"></Circle>
      <Card className="w-full border-none md:pt-20  rounded-xl md:bg-[#080705]">
        <CardHeader className="md:text-center">
          <CardTitle className="text-3xl font-bold tracking-wider">
            {!open ? "Recent Projects_" : "Skills_"}
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-20 w-full h-[500px] md:h-[300px] overflow-hidden">
          <ScrollArea className="md:hidden w-full h-[510px]">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                className={`mb-4 border w-[300px] h-[130px] bg-[#080705] ${
                  open && "opacity-0"
                }`}
                key={index}
              >
                project
              </div>
            ))}
          </ScrollArea>
          <div className="hidden w-full h-full md:grid grid-cols-2 place-items-center">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                className={`mb-10 border w-[300px] h-[130px] bg-[#080705] ${
                  open && "opacity-0"
                }`}
                key={index}
              >
                project
              </div>
            ))}
          </div>
          <div
            className={`md:hidden absolute h-full right-0 top-0 bg-[#080705] rounded-xl ${
              open && "w-full left-[10%]"
            }`}
          >
            <Button onClick={() => setOpen(!open)}>
              {!open && <span className="pr-2">&lt; </span>} sills{" "}
              {open && <span className="pl-2"> &gt;</span>}
            </Button>
            <div className="flex flex-col gap-10 pl-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  className="w-[30px] h-[30px] bg-white rounded-full"
                  key={index}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardHeader className="text-center hidden md:block">
          <CardTitle className="text-xl font-medium tracking-wider">
            Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-20 hidden md:flex justify-center gap-10 overflow-hidden">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              className="w-[30px] h-[30px] bg-white rounded-full"
              key={index}
            >
              {index + 1}
            </div>
          ))}
        </CardContent>
        <CardFooter className="pt-10">
          <Link className="w-full" href={"/about"}>
            &lt; about
          </Link>
          <Link className="w-full text-right" href={"/contact"}>
            contact &gt;
          </Link>
        </CardFooter>
      </Card>
      <div className="w-full flex justify-center py-10">
        <Button className="w-[200px] h-[52px] bg-[#390895] hover:bg-[#c62df3]">
          Visit github
        </Button>
      </div>
    </div>
  );
}
