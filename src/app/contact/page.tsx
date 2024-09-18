'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Image from "next/image";
import Link from "next/link";
import { CiMail } from "react-icons/ci";

export default async function Contact() {
  useScrollToTop();

  await new Promise((resolve) => setTimeout(resolve, 500)); 
  return (
    <main className="xl:min-h-[580px] w-[100%] xl:col-span-4 items-center justify-between mt-8 xl:mt-0">
      <div className="flex flex-col items-center bg-primary border-2 border-accent rounded-3xl p-4 md:p-16 md:pb-12">
        <div className="flex flex-col items-center justify-evenly mt-4 xl:w-full">
          <h2 className="text-3xl xl:text-5xl text-accent font-secondary">
            Let's Connect!
          </h2>
          <form
            action="mailto:lakhani.siddhesh@gmail.com"
            method="POST"
            className="flex flex-col items-center mt-6 xl:mt-10 gap-2 w-full text-primary text-lg"
          >
            <Input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full h-10 transition-colors duration-500 bg-white focus:bg-accent rounded-lg p-2 placeholder:text-primary"
            />
            <Input
              type="email"
              name="_replyto"
              placeholder="Email"
              className="w-full h-10 transition-colors duration-500 bg-white focus:bg-accent rounded-lg p-2 placeholder:text-primary"
            />
            <Input
              name="message"
              placeholder="Message"
              className="w-full h-10 transition-colors duration-500 bg-white focus:bg-accent rounded-lg p-2 placeholder:text-primary"
            />
            <Button
              type="submit"
              className="w-full h-12 transition-all duration-300 bg-accent bg-opacity-100 hover:bg-opacity-80 hover:bg-accent rounded-lg text-primary font-medium text-xl"
            >
              Send
            </Button>
          </form>
          <div className="flex flex-row items-center m-6 mb-0 gap-2 xl:gap-4 text-accent bg-primary p-2 rounded-lg font-secondary text-sm xl:text-xl">
            Support Me:
            <Link href="https://www.buymeacoffee.com/sidlakhani">
              <Image
                src="/bmc_button.png"
                alt="support me"
                width={100}
                height={80}
                className="md:w-[150px]"
              />
            </Link>
          </div>
        </div>
      </div>
      <Link href={"mailto:contact@sidlakhani.tech"}>
        <div className="mt-4 mb-8 xl:mt-8 xl:mb-0 flex flex-row gap-2 justify-center">
          <CiMail className="text-3xl" />
          <p className="text-lg font-light border-b-[1px] border-white">contact@sidlakhani.tech</p>
        </div>
      </Link>
    </main>
  );
}
