"use client";
import ProjectsCard from "@/components/ProjectsCard";

export default function Work() {
  return (
    <div className="md:col-span-4 flex-col items-center justify-between xl:mt-16">
      <h2 className="inline-block xl:hidden text-2xl mt-6">Projects</h2>
      <div className="w-screen xl:w-auto xl:h-[600px] overflow-x-scroll xl:overflow-x-hidden xl:overflow-y-scroll py-6 xl:mt-12 custom-scrollbar">
        <ProjectsCard />
      </div>
    </div>
  );
}
