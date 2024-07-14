"use client";
import ProjectsCard from "@/components/ProjectsCard";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Projects() {
  useScrollToTop();
  return (
    <div className="md:col-span-4 flex-col items-center justify-between xl:mt-16">
      <h2 className="inline-block xl:hidden text-3xl font-secondary mt-8">Projects</h2>
      <div className="xl:w-auto xl:h-[600px] xl:overflow-y-scroll py-2 mt-2 xl:mt-12 custom-scrollbar">
        <ProjectsCard />
      </div>
    </div>
  );
}
