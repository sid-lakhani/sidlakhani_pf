import { Card, CardHeader } from "@/components/ui/card";
import { softSkills } from "@/constants/skills";


const SkillsCard = () => {
  return (
    <div className="xl:grid grid-cols-3 my-12 gap-x-8 gap-y-10">
      {softSkills.map((softSkills, index) => {
        return (
          <Card key={index} className="border-2 border-white bg-primary bg-opacity-80 rounded-xl hover:scale-110 duration-300 transform-gpu">
            <CardHeader className="flex flex-row gap-3 items-center">
              {softSkills.logo}
              <p className="text-md text-accent">{softSkills.name}</p>
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
