"use client";
import ProjectsCard from "@/components/ProjectsCard";

export default function Work() {
  return (
    <div className="md:col-span-4 flex-col items-center justify-between mt-16 z-0">
      <div className="h-[600px]  overflow-y-scroll mt-12 custom-scrollbar">
        <ProjectsCard />
      </div>
    </div>
  );
}
