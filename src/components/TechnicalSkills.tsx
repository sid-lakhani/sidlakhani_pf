import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";


const skills = [
  {
    name: "JavaScript",
    description:
      "Proficient in modern JavaScript, including ES6+ features and best practices.",
    logo: <IoLogoJavascript className="text-3xl text-accent" />,
  },
  {
    name: "React",
    description:
      "Experienced in building web applications using React and its ecosystem.",
    logo: <FaReact className="text-3xl text-accent" />,
  },
  {
    name: "Next.js",
    description:
      "Experienced in building web applications using Next.js and its features.",
    logo: <SiNextdotjs className="text-3xl text-accent" />,
  },
  {
    name: "Tailwind CSS",
    description:
      "Experienced in building web applications using Tailwind CSS and its utilities.",
    logo: <RiTailwindCssFill className="text-3xl text-accent" />,
  },
];

const SkillsCard = () => {
  return (
    <div className="grid grid-cols-2 m-8 gap-8">
      {skills.map((skill, index) => {
        return (
          <Card key={index} className="max-w-[350px] border-2 border-white bg-primary bg-opacity-80 rounded-xl">
            <CardHeader className="flex flex-row items-center w-full gap-3 m-2">
              {skill.logo}
              <p className="text-md text-accent">{skill.name}</p>
            </CardHeader>
            <Divider />
            <CardBody className="p-2">
              <p>
                {skill.description}
              </p>
            </CardBody>
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
