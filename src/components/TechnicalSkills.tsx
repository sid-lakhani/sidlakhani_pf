import { Card, CardHeader } from "@/components/ui/card";
import { FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { PiFileCppFill } from "react-icons/pi";




const skills = [
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
    logo: <FaHtml5 className="text-3xl text-accent" />,
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

const SkillsCard = () => {
  return (
    <div className="grid md:grid-cols-3 m-8 gap-8">
      {skills.map((skill, index) => {
        return (
          <Card key={index} className="border-2 border-white bg-primary bg-opacity-80 rounded-xl hover:scale-110 duration-300 transform-gpu">
            <CardHeader className="flex flex-row gap-3 items-center">
              {skill.logo}
              <p className="text-md text-accent">{skill.name}</p>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
};

const TechnicalSkills = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-12 text-3xl text-white">
        Technical Skills
      </div>
      <SkillsCard />
    </div>
  );
};

export default TechnicalSkills;
