//soft skills
import { FaHandRock, FaHandshake, FaPenAlt, FaRegComments } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { MdOutlineGroup } from "react-icons/md";
import { PiBagSimpleFill, PiLightbulbDuotone } from "react-icons/pi";
import { TfiReload } from "react-icons/tfi";

//tech skills
import { FaHtml5, FaPython, FaReact,  FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { PiFileCppFill } from "react-icons/pi";

export const softSkills = [
    {
      name: "Teamwork",
      logo: <MdOutlineGroup className="text-3xl text-accent" />,
    },
    {
      name: "Analytic",
      logo: <PiLightbulbDuotone className="text-3xl text-accent" />,
    },
    {
      name: "Communication",
      logo: <FaRegComments className="text-3xl text-accent" />,
    },
    {
      name: "Adaptability",
      logo: <TfiReload className="text-3xl text-accent" />,
    },
    {
      name: "Leadership",
      logo: <PiBagSimpleFill className="text-3xl text-accent" />,
    },
    {
      name: "Negotiation",
      logo: <FaHandshake className="text-3xl text-accent" />,
    },
    {
      name: "Efficient",
      logo: <IoIosTime className="text-3xl text-accent" />,
    },
    {
      name: "Creative",
      logo: <FaPenAlt className="text-3xl text-accent" />,
    },
    {
      name: "Work Ethic",
      logo: <FaHandRock className="text-3xl text-accent" />,
    },
  ];

export const techSkills = [
  {
    name: "JavaScript",
    logo: <IoLogoJavascript className="text-3xl text-accent" />,
  },
  {
    name: "React",
    logo: <FaReact className="text-3xl text-accent" />,
  },
  {
    name: "Next.js",
    logo: <SiNextdotjs className="text-3xl text-accent" />,
  },
  {
    name: "Tailwind CSS",
    logo: <RiTailwindCssFill className="text-3xl text-accent" />,
  },
  {
    name: "HTML5",
    logo: <FaHtml5 className="text-3xl text-accent" />,
  },
  {
    name: "CSS3",
    logo: <FaCss3Alt className="text-3xl text-accent" />,
  },
  {
    name: "Python",
    logo: <FaPython className="text-3xl text-accent" />,
  },
  {
    name: "C++",
    logo: <PiFileCppFill className="text-3xl text-accent" />,
  },
  {
    name: "TypeScript",
    logo: <SiTypescript className="text-3xl text-accent" />,
  },
];