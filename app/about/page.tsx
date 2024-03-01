import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Circle } from "@/components/bg-circle";
export default function About() {
  return (
    <div className="relative pt-10 px-8 md:px-36 overflow-hidden">
      <Circle className="top-4 -left-[200px] md:left-[50px]"></Circle>
      <Card className="w-full border-none md:h-[606px] md:pt-20 rounded-xl md:bg-[#080705]">
        <CardHeader className="md:text-center">
          <CardTitle className="relative z-20 text-3xl font-bold tracking-wider">
            About me_
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-10 md:mt-0 p-10 bg-[#080705] md:bg-none rounded-t-xl">
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
        <CardFooter className="pt-10 bg-[#080705] rounded-b-xl">
          <Link className="w-full" href={"/"}>
            &lt; home
          </Link>
          <Link className="w-full text-right" href={"/projects"}>
            projects &gt;
          </Link>
        </CardFooter>
      </Card>
      <div className="w-full flex justify-center py-10">
        <Button className="w-[200px] h-[52px] bg-[#390895] hover:bg-[#c62df3]">
          Download Cv
        </Button>
      </div>
    </div>
  );
}
