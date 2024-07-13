import { FC, useState, useEffect } from "react";
import { Card, CardHeader } from "@/components/ui/card";

interface Skill {
  logo: JSX.Element;
  name: string;
}

interface SkillsCardProps {
  skills: Skill[];
}

const SkillsCard: FC<SkillsCardProps> = ({ skills }) => {
  const [selectedSkillName, setSelectedSkillName] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (skills.length > 0) {
      setSelectedSkillName(skills[0].name);
    }
  }, [skills]);

  const handleCardClick = (name: string) => {
    setSelectedSkillName(name);
  };

  return (
    <div className="xl:px-4 md:px-10 px-1">
      <div className="xl:hidden col-span-3 text-center">
        {selectedSkillName && (
          <div className="inline-block text-accent font-semibold text-xl border-b-[1px] border-accent mb-4">
            {selectedSkillName}
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-4 xl:gap-x-8 xl:gap-y-10 my-4 xl:my-12">
        {skills.map((skill, index) => (
          <Card
            key={index}
            onClick={() => handleCardClick(skill.name)}
            className={`border-2 border-white bg-primary rounded-xl xl:hover:scale-110 duration-300 transform-gpu cursor-pointer ${
              selectedSkillName === skill.name ? "scale-110 xl:scale-100 xl:border-white border-accent" : ""
            }`}
          >
            <CardHeader className="flex flex-row gap-3 items-center">
              {skill.logo}
              <p className="text-md text-accent xl:inline-block hidden hover:inline-block">
                {skill.name}
              </p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
