"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import skill_data from "@/lib/data/skills.json";
import project_data from "@/lib/data/projects.json";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { Circle } from "@/components/bg-circle";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useThemeContext } from "@/lib/themeContext";
export default function Projects() {
  const { theme, setSelected, animationType } = useThemeContext();
  const [skills, setSkills] = useState(skill_data);
  const [projects, setProjects] = useState(project_data);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(4);
  const [direction, setDirection] = useState(400);
  const [slide, setSlide] = useState(false);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const numberOfPages = Math.ceil(projects.length / projectsPerPage);
  const pageNumbers = Array.from(
    { length: numberOfPages + 1 },
    (_, i) => i
  ).slice(1);

  const goToNextPage = () => {
    setSlide(true);
    if (currentPage !== numberOfPages) {
      setCurrentPage(currentPage + 1);
      setDirection(400);
    } else {
      setCurrentPage(1);
      setDirection(400);
    }
  };
  const goToPrevPage = () => {
    setSlide(true);
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setDirection(-400);
    } else {
      setCurrentPage(numberOfPages);
      setDirection(-400);
    }
  };

  return (
    <div className="relative pt-10 md:px-36 overflow-hidden">
      <Circle className="top-[200px] -right-[100px] md:right-[100px]" />
      <Circle className="bottom-[300px] -left-[100px] md:left-[100px]" />
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        transition={{ type: animationType }}
      >
        <Card
          className={`${theme} w-full border-none md:pt-20 mb-10  rounded-xl`}
        >
          <CardHeader className="md:text-center">
            <CardTitle className="text-3xl font-bold tracking-wider">
              Recent Projects_
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-20 w-full overflow-hidden">
            <div className="flex justify-end items-center gap-10 my-4">
              <Button
                variant="outline"
                size="icon"
                className="text-foreground h-8 w-8 rounded-full"
                onClick={goToPrevPage}
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="text-foreground h-8 w-8 rounded-full"
                onClick={goToNextPage}
              >
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>
            <div className="w-full md:grid grid-cols-1 md:grid-cols-2 place-items-start gap-10 mb-10">
              {currentProjects.map((project) => (
                <motion.div
                  initial={{
                    x: slide ? direction : 0,
                    border: "1px solid transparent",
                  }}
                  animate={{ x: 0 }}
                  transition={{ type: "tween", duration: 0.5 }}
                  whileHover={{
                    border: "1px solid white",
                  }}
                  className={`${theme} w-full mb-10 md:mb-0 rounded-xl`}
                  key={project.id}
                >
                  <Link href={project.link} target="_blank">
                    <CardHeader>
                      <CardTitle>{project.project_name}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="text-sm text-muted-foreground">
                        Tech stack:
                      </span>
                      <ul className="px-4 grid grid-cols-2 list-disc text-muted-foreground">
                        {project.tech?.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Link>
                </motion.div>
              ))}
            </div>
            <ul className="w-full flex justify-center">
              {pageNumbers.map((pageNumber) => (
                <li
                  className="first:rounded-l-lg last:rounded-r-lg overflow-hidden border-r last:border-r-0  border-muted-foreground"
                  key={pageNumber}
                >
                  <Button
                    className={`rounded-none hover:bg-accent ${
                      currentPage === pageNumber
                        ? "bg-muted-foreground"
                        : "bg-secondary"
                    }`}
                    onClick={() => setCurrentPage(pageNumber)}
                  >
                    {pageNumber}
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-medium tracking-wider">
              Skills
            </CardTitle>
          </CardHeader>
          <div className="px-6 w-full">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <div className="flex justify-end items-center gap-10 pr-6 py-4">
                <CarouselPrevious className="text-foreground" />
                <CarouselNext className="text-foreground" />
              </div>
              <CarouselContent className="-ml-4">
                {skills.map((skill) => (
                  <CarouselItem
                    key={skill.id}
                    className="pl-4 basis-full md:basis-1/2"
                  >
                    <Card className={`${theme} border-none`}>
                      <CardHeader>
                        <CardTitle>{skill.skill}</CardTitle>
                        <CardDescription>{skill.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="px-4 grid grid-cols-2 list-disc text-muted-foreground">
                          {skill.list.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <CardFooter className="flex-col">
            <div className="w-full flex justify-center py-10">
              <Link
                href="https://github.com/MisterH100"
                target="_blank"
                className="flex items-center text-foreground justify-center whitespace-nowrap rounded-md text-sm font-medium w-[200px] h-[52px] bg-secondary hover:bg-accent"
              >
                Visit github
              </Link>
            </div>
            <div className="flex items-center justify-center gap-4 md:gap-20">
              <Link onClick={() => setSelected("About")} href={"/about"}>
                <motion.span
                  className="pr-6 inline-block"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  &lt;
                </motion.span>
                about
              </Link>
              <Link onClick={() => setSelected("Contact")} href={"/contact"}>
                contact
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
