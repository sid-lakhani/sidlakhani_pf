import { Card, CardHeader } from "@/components/ui/card";
import { FaHandRock, FaHandshake, FaPenAlt, FaRegComments } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { MdOutlineGroup } from "react-icons/md";
import { PiBagSimpleFill, PiLightbulbDuotone } from "react-icons/pi";
import { TfiReload } from "react-icons/tfi";


const skills = [
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

const SkillsCard = () => {
  return (
    <div className="xl:grid grid-cols-3 my-12 gap-x-8 gap-y-10">
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
