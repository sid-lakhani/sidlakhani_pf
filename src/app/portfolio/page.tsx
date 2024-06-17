"use client";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectsCard from "@/components/ProjectsCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Work() {
  return (
    <div className="h-max min-h-[600px] md:col-span-4 flex-col items-center justify-between mt-16 z-0">
      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="flex justify-center gap-2">
          <TabsTrigger value="projects" className="px-4 text-md rounded-lg">
            Projects
          </TabsTrigger>
          <TabsTrigger value="experience" className="px-4 text-md rounded-lg">
            Experience
          </TabsTrigger>
        </TabsList>
        <TabsContent value="projects" className="h-[500px] overflow-y-scroll mt-12 custom-scrollbar">
          <ProjectsCard />
        </TabsContent>
        <TabsContent value="experience" className="h-[500px] overflow-y-scroll mt-12 custom-scrollbar">
          <ExperienceCard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
