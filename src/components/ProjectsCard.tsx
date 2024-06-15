import { Card, CardHeader } from "@nextui-org/card";
import React from "react";
import { CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "/dummy.png",
    link: "/",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    image: "/dummy.png",
    link: "/",
  },
];

const ProjectsCard = () => {
  return (
    <main className="flex flex-col gap-4 mt-12 mx-32">
      {projects.map((project, index) => {
        return (
          <Card
            key={index}
            className="border-2 border-primary bg-accent bg-opacity-80 rounded-xl p-4 pt-6 "
          >
            <CardHeader className="flex flex-col items-center">
              <h1 className="text-xl text-primary font-extrabold underline">{project.title}</h1>
            </CardHeader>
            <CardContent className="flex flex-row gap-8 items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                width={100}
                height={100}
              />
              <div className="flex flex-col gap-8">
                <p className="text-md text-primary">{project.description}</p>
                <Link href={project.link} className="text-primary">
                  View Project
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
