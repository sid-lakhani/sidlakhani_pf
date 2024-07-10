"use client";

import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FrontendSkills from "@/components/FrontendSkills";
import BackendSkills from "@/components/BackendSkills";
import MiscSkills from "@/components/MiscSkills";

export default function Skills() {
  useScrollToTop();
  return (
    <main className="h-max md:col-span-4 items-center justify-between mt-10 xl:mt-20">
      <div className="flex flex-col items-center">
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
    </main>
  );
}
