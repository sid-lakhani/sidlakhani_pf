"use client";

import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FrontendSkills from "@/components/FrontendSkills";
import BackendSkills from "@/components/BackendSkills";
import MiscSkills from "@/components/MiscSkills";

export default async function Skills() {
  useScrollToTop();

  await new Promise((resolve) => setTimeout(resolve, 500)); 
  return (
    <main className="xl:h-[580px] md:col-span-4 items-center justify-between mt-8 xl:mx-16 xl:mt-0">
      <div className="xl:flex flex-col items-center hidden">
        <Tabs defaultValue="frontend" className="w-full xl:z-50">
          <TabsList className="flex align-center justify-center gap-4">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="misc">Miscellaneous</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend">
            <FrontendSkills />
          </TabsContent>
          <TabsContent value="backend">
            <BackendSkills />
          </TabsContent>
          <TabsContent value="misc">
            <MiscSkills />
          </TabsContent>
        </Tabs>
      </div>
      <div className="xl:hidden flex flex-col mb-8">
        <FrontendSkills />
        <BackendSkills />
        <MiscSkills />
      </div>
    </main>
  );
}
