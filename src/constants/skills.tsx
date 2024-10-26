import { FaCss3Alt, FaGithub, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { PiFileCppFill } from "react-icons/pi";
import { RiSupabaseLine, RiTailwindCssFill } from "react-icons/ri";
import { SiCanva, SiClerk, SiNextdotjs, SiTypescript, SiUnrealengine } from "react-icons/si";

export const skills = [
  {
    name: "Next.js",
    logo: <SiNextdotjs className="text-3xl text-accent" />,
    category: "frontend",
  },
  {
    name: "React",
    logo: <FaReact className="text-3xl text-accent" />,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    logo: <RiTailwindCssFill className="text-3xl text-accent" />,
    category: "frontend",
  },
  {
    name: "JavaScript",
    logo: <IoLogoJavascript className="text-3xl text-accent" />,
    category: "frontend",
  },
  {
    name: "TypeScript",
    logo: <SiTypescript className="text-3xl text-accent" />,
    category: "frontend",
  },
  {
    name: "HTML5",
    logo: <FaHtml5 className="text-3xl text-accent" />,
    category: "frontend",
  },
  {
    name: "CSS3",
    logo: <FaCss3Alt className="text-3xl text-accent" />,
    category: "frontend",
  },
  {
    name: "Python",
    logo: <FaPython className="text-3xl text-accent" />,
    category: "backend",
  },
  {
    name: "C++",
    logo: <PiFileCppFill className="text-3xl text-accent" />,
    category: "backend",
  },
  {
    name: "Firebase",
    logo: <IoLogoFirebase className="text-3xl text-accent" />,
    category: "backend",
  },
  {
    name: "Clerk",
    logo: <SiClerk className="text-3xl text-accent" />,
    category: "backend",
  },
  {
    name: "Supabase",
    logo: <RiSupabaseLine className="text-3xl text-accent" />,
    category: "backend",
  },
  {
    name: "GitHub",
    logo: <FaGithub className="text-3xl text-accent" />,
    category: "misc",
  },
  {
    name: "Canva",
    logo: <SiCanva className="text-3xl text-accent" />,
    category: "misc",
  },
  {
    name: "Unreal Engine",
    logo: <SiUnrealengine className="text-3xl text-accent" />,
    category: "misc",
  }
];

export const frontendSkills = skills.filter(skill => skill.category === "frontend");
export const backendSkills = skills.filter(skill => skill.category === "backend");
export const miscSkills = skills.filter(skill => skill.category === "misc");
