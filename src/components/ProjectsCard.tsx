import { Card, CardHeader } from "@/components/ui/card";
import React from "react";
import { CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectsCard = () => {
  return (
    <main className="flex xl:flex-col flex-row gap-4 xl:gap-6 xl:mx-12">
      {projects.map((project, index) => {
        return (
          <Card
            key={index}
            className="border-2 border-primary bg-accent-hover rounded-xl p-4"
          >
            <CardHeader className="items-center">
              <h1 className="text-3xl xl:text-4xl text-primary font-extrabold font-secondary">
                {project.title}
              </h1>
            </CardHeader>
            <CardContent className="flex xl:flex-row flex-col xl:gap-8 gap-6 items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                width={100}
                height={100}
                className="xl:w-1/4"
              />
              <p className="text-md text-primary xl:w-2/4">{project.description}</p>
              <div className="flex flex-row xl:flex-col xl:w-1/4 gap-4 items-center justify-center xl:justify-normal text-xl">
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
    </main>
  );
};

export default ProjectsCard;
