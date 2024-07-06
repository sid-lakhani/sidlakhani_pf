import { Card, CardHeader } from "@/components/ui/card";
import React from "react";
import { CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectsCard = () => {
  return (
    <main>
      <div className="hidden xl:flex flex-col gap-6 mx-12">
        {projects.map((project, index) => {
          return (
            <Card
              key={index}
              className="border-2 border-primary bg-accent-hover rounded-xl p-4"
            >
              <CardHeader className="items-center">
                <h1 className="text-4xl text-primary font-extrabold font-secondary">
                  {project.title}
                </h1>
              </CardHeader>
              <CardContent className="flex flex-row gap-8 items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={100}
                  height={100}
                  className="w-1/4"
                />
                <p className="text-md text-primary w-2/4">
                  {project.description}
                </p>
                <div className="flex flex-col w-1/4 gap-4 items-center justify-normal text-xl">
                  <Link href={project.link} className="text-primary">
                    <FaExternalLinkAlt />
                  </Link>
                  <Link href={project.github} className="text-primary">
                    <FaGithub />
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="xl:hidden inline-block">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {projects.map((project, index) => {
              return (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <Card
                      key={index}
                      className="border-2 border-primary bg-accent-hover rounded-xl p-4"
                    >
                      <CardHeader className="items-center">
                        <h1 className="text-3xl text-primary font-extrabold font-secondary">
                          {project.title}
                        </h1>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-6 items-center justify-center">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={100}
                          height={100}
                        />
                        <p className="text-md text-primary">
                          {project.description}
                        </p>
                        <div className="flex flex-row gap-4 items-center justify-center text-xl">
                          <Link href={project.link} className="text-primary">
                            <FaExternalLinkAlt />
                          </Link>
                          <Link href={project.github} className="text-primary">
                            <FaGithub />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
};

export default ProjectsCard;
