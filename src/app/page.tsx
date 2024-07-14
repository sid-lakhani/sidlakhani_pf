"use client";

import { useScrollToTop } from "@/hooks/useScrollToTop";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
//components

export default function Home() {
  useScrollToTop();
  return (
    <div className="h-max xl:min-h-[580px] xl:col-span-4 xl:border-2 border-white rounded-3xl items-center justify-between mt-4 md:mt-8 xl:mt-24">
      <div className="mt-2 xl:mt-20 xl:mx-32 flex flex-col gap-8 xl:grid xl:grid-cols-2 items-center">
        <Image
          src="/me.jpg"
          alt="Siddhesh Lakhani"
          width={300}
          height={300}
          className="rounded-2xl xl:w-[250px] md:w-[400px]"
        />
        <div className="xl:grid grid-rows-4 gap-3 text-md font-light flex flex-row items-start text-left">
        <span className="xl:hidden inline-block md:text-2xl">Socials: </span>
          <Link
            key="instagram"
            href="https://instagram.com/sidlakhani_"
            className="bg-white hover:bg-accent duration-300 transition-colors text-black px-2 rounded-lg w-max"
          >
            <FaInstagram className="inline-block" />
            <span className="xl:inline-block hidden ml-1">@sidlakhani_</span>
          </Link>
          <Link
            key="github"
            href="https://github.com/sid-lakhani"
            className="bg-white hover:bg-accent duration-300 transition-colors text-black px-2 rounded-lg w-max"
          >
            <FaGithub className="inline-block" />
            <span className="xl:inline-block hidden ml-1">@sid-lakhani</span>
          </Link>
          <Link
            key="linkedin"
            href="https://linkedin.com/in/siddhesh-lakhani"
            className="bg-white hover:bg-accent duration-300 transition-colors text-black px-2 rounded-lg w-max"
          >
            <FaLinkedin className="inline-block" />
            <span className="xl:inline-block hidden ml-1">@siddhesh-lakhani</span>
          </Link>
          <Link
            key="buymeacupofcoffee"
            href="https://www.buymeacoffee.com/sidlakhani"
            className="flex flex-row items-center bg-white hover:bg-accent duration-300 transition-colors text-black px-2 rounded-lg w-max"
          >
            <Image
              src="/bmc_logo.png"
              alt="bmc"
              height={14}
              width={14}
              className=" xl:mx-0 mx-[2px] my-[6px] xl:w-[14px]"
            />
            <span className="xl:inline-block hidden ml-1">@sidlakhani</span>
          </Link>
        </div>
      </div>
      <div className="xl:m-8 my-8 xl:mx-28 text-lg md:text-2xl xl:text-xl font-light xl:text-justify">
        <p className="-mx-4 md:mx-0 xl:mx-0 text-balance">
          I'm a Computer Engineering student with a passion for coding and a
          keen interest in new technologies. My journey into the world of web
          development is just beginning, and I'm excited to share it with you.
        </p>
      </div>
    </div>
  );
}
