"use client";
import ProjectsCard from "@/components/ProjectsCard";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Projects() {
  useScrollToTop();
  return (
    <div className="xl:col-span-4 flex-col items-center justify-between mt-8 xl:mt-0">
      <h2 className="inline-block xl:hidden text-4xl md:text-5xl font-secondary mt-8">Projects</h2>
      <div className="xl:w-auto xl:h-[580px] xl:overflow-y-scroll mt-4 xl:mt-12 custom-scrollbar">
        <ProjectsCard />
      </div>
    </div>
  );
}
