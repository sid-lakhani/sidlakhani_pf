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
  {
    title: "Project 3",
    description: "Description of project 3",
    image: "/dummy.png",
    link: "/",
  },
  {
    title: "Project 4",
    description: "Description of project 4",
    image: "/dummy.png",
    link: "/",
  },
  {
    title: "Project 5",
    description: "Description of project 5",
    image: "/dummy.png",
    link: "/",
  },
  {
    title: "Project 6",
    description: "Description of project 6",
    image: "/dummy.png",
    link: "/",
  },
  {
    title: "Project 7",
    description: "Description of project 7",
    image: "/dummy.png",
    link: "/",
  },
  {
    title: "Project 8",
    description: "Description of project 8",
    image: "/dummy.png",
    link: "/",
  },
  {
    title: "Project 9",
    description: "Description of project 9",
    image: "/dummy.png",
    link: "/",
  },
  {
    title: "Project 10",
    description: "Description of project 10",
    image: "/dummy.png",
    link: "/",
  },
];

const ProjectsCard = () => {
  return (
    <main className="flex flex-col gap-4 mx-12">
      {projects.map((project, index) => {
        return (
          <Card
            key={index}
            className="border-2 border-primary bg-accent bg-opacity-80 rounded-xl p-4 pt-6 "
          >
            <CardHeader className="flex flex-col items-center">
              <h1 className="text-xl text-primary font-extrabold underline">{project.title}</h1>
            </CardHeader>
            <CardContent className="flex flex-row gap-8 items-center justify-center mt-8">
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
