"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

//components
import HomeText from "@/components/ui/HomeText";
import Nav from "@/components/ui/Nav";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row gap-20 mx-32">
        <div className="h-[600px] w-1/3 mt-8">
          <div className="mt-8">
            <HomeText text="Hi," />
            <HomeText text="I am Siddhesh Lakhani!" />
            <HomeText text="A Website Developer." />
          </div>
          <div className="flex flex-row gap-8 justify-center mt-12">
            <Button className="w-36 text-md bg-accent text-black hover:opacity-80 hover:bg-accent duration-300 transition-all">Hire Me</Button>
            <Button className="w-36 text-md bg-inherit border-2 border-accent hover:opacity-90 hover:bg-accent hover:text-black duration-300 transition-a">Resume</Button>
          </div>
          <Nav />
        </div>
        <div className="h-[600px] w-2/3 border-2 border-white rounded-xl">
          Display
        </div>
      </div>
    </main>
  );
}
 