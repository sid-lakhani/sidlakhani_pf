"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
//components

export default function Home() {
  return (
    <div className="h-max min-h-[600px] md:col-span-4 border-2 border-white rounded-3xl">
      <div className="mt-16 mx-32 grid grid-cols-2 items-center gap-4">
        <Image
          src="/me-square.jpg"
          alt="Siddhesh Lakhani"
          width={200}
          height={200}
          className="rounded-2xl"
        />
        <div className="grid grid-col gap-2 text-md font-light">
          <Link
            key="instagram"
            href="https://instagram.com/sidlakhani_"
            className="bg-white hover:bg-accent duration-300 transition-colors text-black px-2 rounded-xl w-max"
          >
            <FaInstagram className="inline-block" /> @sidlakhani_
          </Link>
          <Link
            key="github"
            href="https://github.com/sid-lakhani"
            className="bg-white hover:bg-accent duration-300 transition-colors text-black px-2 rounded-xl w-max"
          >
            <FaGithub className="inline-block" /> github.com/sid-lakhani
          </Link>
          <Link
            key="linkedin"
            href="https://linkedin.com/in/siddhesh-lakhani"
            className="bg-white hover:bg-accent duration-300 transition-colors text-black px-2 rounded-xl w-max"
          >
            <FaLinkedin className="inline-block" /> @siddhesh-lakhani
          </Link>
        </div>
      </div>
      <div className="m-16 mx-24 text-xl font-light items center text-justify">
          <p className="">
            I'm a Computer Engineering student with a 
            passion for coding and a keen interest in new 
            technologies. My journey into the world of web
            development is just beginning, and I'm excited 
            to share it with you.
          </p>
        </div>
    </div>
  );
}
