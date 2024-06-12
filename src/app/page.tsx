"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
//components

export default function Home() {
  return (
    <div className="h-max min-h-[400px] md:min-h-[600px] md:col-span-4 border-2 border-white rounded-3xl items-center justify-between mt-4 md:mt-24">
      <div className="m-4 md:mt-20 md:mx-32 grid md:grid-cols-2 items-center gap-4">
        <Image
          src="/me-square.jpg"
          alt="Siddhesh Lakhani"
          width={200}
          height={200}
          className="rounded-2xl"
        />
        <div className="grid grid-rows-4 gap-2 text-md font-light">
          <Link
            key="instagram"
            href="https://instagram.com/sidlakhani_"
            className="bg-white hover:bg-accent duration-300 transition-colors text-black px-2 rounded-lg w-max"
          >
            <FaInstagram className="inline-block" /> @sidlakhani_
          </Link>
          <Link
            key="github"
            href="https://github.com/sid-lakhani"
            className="bg-white hover:bg-accent duration-300 transition-colors text-black px-2 rounded-lg w-max"
          >
            <FaGithub className="inline-block" /> github.com/sid-lakhani
          </Link>
          <Link
            key="linkedin"
            href="https://linkedin.com/in/siddhesh-lakhani"
            className="bg-white hover:bg-accent duration-300 transition-colors text-black px-2 rounded-lg w-max"
          >
            <FaLinkedin className="inline-block" /> @siddhesh-lakhani
          </Link>
          <Link
            key="buymeacupofcoffee"
            href="https://www.buymeacoffee.com/sidlakhani"
            className="flex flex-row items-center gap-3 bg-white hover:bg-accent duration-300 transition-colors text-black px-2 rounded-lg w-max"
          >
            <Image
              src="/bmc_logo.png"
              alt="bmc"
              height={13}
              width={13}
              className="ml-1"
            />{" "}
            @sidlakhani
          </Link>
        </div>
      </div>
      <div className="md:m-16 m-6 md:mx-28 text-lg md:text-xl font-light items center text-justify">
        <p className="">
          I'm a Computer Engineering student with a passion for coding and a
          keen interest in new technologies. My journey into the world of web
          development is just beginning, and I'm excited to share it with you.
        </p>
      </div>
    </div>
  );
}
