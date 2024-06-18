import { Card, CardHeader } from "@/components/ui/card";
import { techSkills } from "@/constants/skills";

const SkillsCard = () => {
  return (
    <div className="xl:grid grid-cols-3 my-12 gap-x-8 gap-y-10">
      {techSkills.map((techSkills, index) => {
        return (
          <Card key={index} className="border-2 border-white bg-primary bg-opacity-80 rounded-xl hover:scale-110 duration-300 transform-gpu">
            <CardHeader className="flex flex-row gap-3 items-center">
              {techSkills.logo}
              <p className="text-md text-accent">{techSkills.name}</p>
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
