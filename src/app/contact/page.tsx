import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export default function Contact() {
  return (
    <main className="h-max min-h-[600px] xl:col-span-4 items-center justify-between mt-12">
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-3xl xl:text-4xl bg-accent rounded-lg p-2 text-primary font-secondary">
          Connect With Me!
        </h1>
        <div className="flex justify-evenly flex-col mt-4 bg-french-beige bg-opacity-40 rounded-lg h-36 w-2/3">
          <div className="flex flex-row gap-2">
            <FaLocationDot className="text-2xl text-white" />
            Mumbai, India
          </div>
          <div className="flex flex-row gap-2">
            <IoIosMail className="text-3xl text-white" />
            <Link
              href="mailto:lakhani.siddhesh@gmail.com"
              className="underline"
            >
              lakhani.siddhesh@gmail.com
            </Link>
          </div>
          <div className="flex flex-row gap-2 text-xl">
            Socials:
            <Link
              key="instagram"
              href="https://instagram.com/sidlakhani_"
              className=""
            >
              <FaInstagram className="text-2xl inline-block hover:rotate-6 hover:text-accent duration-300 transform transition-all" />
            </Link>
            <Link
              key="github"
              href="https://github.com/sid-lakhani"
              className=""
            >
              <FaGithub className="text-2xl inline-block hover:rotate-6 hover:text-accent duration-300 transform transition-all" />
            </Link>
            <Link
              key="linkedin"
              href="https://linkedin.com/in/siddhesh-lakhani"
              className=""
            >
              <FaLinkedin className="text-2xl inline-block hover:rotate-6 hover:text-accent duration-300 transform transition-all" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-evenly mt-4 w-2/3">
          <h2 className="text-2xl text-accent font-secondary">
            Or drop me a message!
          </h2>
          <form
            action="mailto:lakhani.siddhesh@gmail.com"
            method="POST"
            className="flex flex-col items-center mt-4 gap-1 h-auto w-full text-primary text-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full h-1/5 transition-colors duration-500 bg-white focus:bg-accent rounded-lg p-2 placeholder:text-primary"
            />
            <input
              type="email"
              name="_replyto"
              placeholder="Email"
              className="w-full h-1/5 transition-colors duration-500 bg-white focus:bg-accent rounded-lg p-2 placeholder:text-primary"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full h-1/5 transition-colors duration-500 bg-white focus:bg-accent rounded-lg p-2 placeholder:text-primary"
            />
            <Button
              type="submit"
              className="w-full h-1/5 transition-all duration-300 bg-accent bg-opacity-100 hover:bg-opacity-80 hover:bg-accent rounded-lg text-primary font-medium text-xl"
            >
              Send
            </Button>
          </form>
          <div className="flex flex-row items-center m-6 gap-4 text-accent bg-primary border-2 border-white p-2 rounded-lg">
            Support Me:
            <Link href="https://www.buymeacoffee.com/sidlakhani" className="">
              <Image
                src="/bmc_button.png"
                alt="support me"
                width={150}
                height={200}
                className=""
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
