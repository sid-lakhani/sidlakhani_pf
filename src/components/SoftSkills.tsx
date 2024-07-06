import { softSkills } from "@/constants/skills";
import SkillsCard from "./SkillsCard";

const SoftSkills = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-[-20px] xl:mt-12 text-3xl md:text-5xl text-white font-secondary">
        Soft Skills
      </div>
      <SkillsCard skills={softSkills} />
    </div>
  );
};

export default SoftSkills;
