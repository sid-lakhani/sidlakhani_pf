import { techSkills } from "@/constants/skills";
import SkillsCard from "./SkillsCard";

const TechnicalSkills = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-[-20px] xl:mt-12 text-2xl md:text-3xl text-white">
        Technical Skills
      </div>
      <SkillsCard skills={techSkills} />
    </div>
  );
};

export default TechnicalSkills;
