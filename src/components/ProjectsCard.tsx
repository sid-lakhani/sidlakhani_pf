import { Card, CardHeader, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
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
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const handleToggle = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <main>
      <div className="hidden xl:flex flex-col gap-6 mx-12">
        {projects.map((project, index) => {
          const isExpanded = expanded[index];
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
                  width={200}
                  height={200}
                  className="w-1/4 border-2 border-primary rounded-xl"
                />
                <div className="flex flex-col w-2/4 gap-4">
                  <p
                    className={`text-md text-primary ${isExpanded ? '' : 'truncate-description'}`}
                    onClick={() => handleToggle(index)}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.category.map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className="bg-primary text-white text-xs font-semibold px-2 py-1 rounded"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
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
              const isExpanded = expanded[index];
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
                          width={150}
                          height={150}
                          className="border-2 border-primary rounded-xl"
                        />
                        <p
                          className={`text-md text-primary ${isExpanded ? '' : 'truncate-description'}`}
                          onClick={() => handleToggle(index)}
                        >
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.category.map((category, catIndex) => (
                            <span
                              key={catIndex}
                              className="bg-primary text-white text-xs font-semibold px-2 py-1 rounded"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-row gap-6 items-center justify-center text-xl">
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
