import { softSkills } from "@/constants/skills";
import SkillsCard from "./SkillsCard";

const SoftSkills = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-[-20px] xl:mt-12 text-2xl md:text-3xl text-white">
        Soft Skills
      </div>
      <SkillsCard skills={softSkills} />
    </div>
  );
};

export default SoftSkills;
