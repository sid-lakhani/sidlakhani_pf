import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { FaRegComments } from "react-icons/fa";
import { MdOutlineGroup } from "react-icons/md";
import { PiLightbulbDuotone, PiSpeedometerFill } from "react-icons/pi";

const skills = [
  {
    name: "Teamwork",
    description:
      "Excellent team player, able to collaborate effectively with cross-functional teams.",
    logo: <MdOutlineGroup className="text-3xl text-accent" />,
  },
  {
    name: "Problem-Solving",
    description:
      "Adept at breaking down complex problems and finding creative solutions.",
    logo: <PiLightbulbDuotone className="text-3xl text-accent" />,
  },
  {
    name: "Communication",
    description:
      "Excellent communication skills, able to explain technical concepts to stakeholders.",
    logo: <FaRegComments className="text-3xl text-accent" />,
  },
  {
    name: "Adaptability",
    description:
      "Quickly adapts to new technologies, methodologies, and environments.",
    logo: <PiSpeedometerFill className="text-3xl text-accent" />,
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

const SoftSkills = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-12 text-3xl text-white">
        Soft Skills
      </div>
      <SkillsCard />
    </div>
  );
};

export default SoftSkills;
