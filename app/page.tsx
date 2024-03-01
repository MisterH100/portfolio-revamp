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
import instagramIcon from "@/public/instagram-icon.svg";
import Link from "next/link";
import { Circle } from "@/components/bg-circle";

export default function Home() {
  const socials = [
    { id: 1, name: "Github", icon: githubIcon, link: "" },
    { id: 2, name: "Linked In", icon: linkedInIcon, link: "" },
    { id: 3, name: "Instagram", icon: instagramIcon, link: "" },
  ];
  return (
    <main className="relative min-h-screen flex justify-center pt-10 px-8 md:px-36 overflow-hidden">
      <Circle className="top-[100px] left-[200px] md:top-[300px] md:left-[50px]"></Circle>
      <Card className="border-none md:w-full md:h-[606px] md:pt-20 rounded-xl md:bg-[#080705]">
        <CardHeader className="md:text-center">
          <CardTitle className="relative z-20 text-3xl font-bold tracking-wider">
            Meet your next developer_
          </CardTitle>
        </CardHeader>
        <CardHeader className="md:text-center">
          <CardTitle className="relative z-20 text-3xl font-medium tracking-wider">
            Handsome Nyathi
          </CardTitle>
          <CardDescription className="relative z-20">
            Full stack web developer,
            <br />
            South Africa
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-20 md:flex justify-center gap-10 md:pt-10">
          {socials.map((social) => (
            <Link href={social.link} key={social.id}>
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
        <CardFooter className="relative z-20 pt-10">
          <Link className="w-full text-center" href={"/about"}>
            about &gt;
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
