import React from "react";
import AnimationText from "./animations/AnimationText";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";

export default function LayoutElements() {
  return (
    <div className="pt-32 md:pt-40 xl:pt-0 xl:col-span-3 xl:w-auto xl:h-auto w-full h-full xl:pl-8 flex flex-col xl:items-start items-center">
      <div className="font-medium">
        <AnimationText text="Hi," />
        <AnimationText text="I am Siddhesh Lakhani!" />
        <AnimationText text="A Full-Stack Engineer" />
      </div>
      <div className="flex flex-row gap-2 md:gap-4 xl:gap-8 mt-2 md:mt-4 xl:ml-12 font-medium justify-center">
        <Link href={"./contact"}>
          <Button className="w-36 text-xl bg-accent text-black hover:bg-accent-hover duration-300 transition-all rounded-3xl">
            Hire Me
          </Button>
        </Link>
        <Link href="/resume.pdf">
          <Button className="w-36 text-xl bg-inherit text-accent border-2 md:border-4 border-accent hover:bg-accent-hover hover:text-black duration-300 transition-all rounded-3xl">
            Resume
          </Button>
        </Link>
      </div>
      <Nav />
    </div>
  );
}
