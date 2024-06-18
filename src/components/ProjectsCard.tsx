import { Card, CardHeader } from "@/components/ui/card";
import React from "react";
import { CardContent } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants/projects";

const ProjectsCard = () => {
  return (
    <main className="flex flex-col gap-6 mx-12">
      {projects.map((project, index) => {
        return (
          <Card
            key={index}
            className="border-2 border-primary bg-accent rounded-xl p-4"
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
