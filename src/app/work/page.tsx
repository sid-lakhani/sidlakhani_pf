"use client";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectsCard from "@/components/ProjectsCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Work() {
  const [showProjects, setShowProjects] = useState(true);

  const toggleProjects = () => {
    setShowProjects((prev) => !prev);
  };

  return (
    <div className="h-max min-h-[600px] md:col-span-4 flex-col items-center justify-between mt-24">
      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="flex justify-center">
          <TabsTrigger value="projects" className="px-4 text-md rounded-lg">
            Projects
          </TabsTrigger>
          <TabsTrigger value="experience" className="px-4 text-md rounded-lg">
            Experience
          </TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <ProjectsCard />
        </TabsContent>
        <TabsContent value="experience">
          <ExperienceCard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
