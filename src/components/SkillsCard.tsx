import { FC } from 'react';
import { Card, CardHeader } from "@/components/ui/card";

interface Skill {
  logo: JSX.Element;
  name: string;
}

interface SkillsCardProps {
  skills: Skill[];
}

const SkillsCard: FC<SkillsCardProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-3 my-8 xl:my-12 gap-4 xl:gap-x-8 xl:gap-y-10">
      {skills.map((skill, index) => (
        <Card
          key={index}
          className="border-2 border-white bg-primary rounded-xl xl:hover:scale-110 duration-300 transform-gpu"
        >
          <CardHeader className="flex flex-row gap-3 items-center">
            {skill.logo}
            <p className="text-md text-accent xl:inline-block hidden hover:inline-block">{skill.name}</p>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default SkillsCard;
