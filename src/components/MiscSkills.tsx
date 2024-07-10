import { miscSkills } from "@/constants/skills";
import SkillsCard from "./SkillsCard";

const MiscSkills = () => {
  return (
    <div>
      <div className="flex flex-col items-center my-8 xl:mt-12 text-3xl md:text-5xl text-white font-secondary">
        Miscellaneous
      </div>
      <SkillsCard skills={miscSkills} />
    </div>
  );
};

export default MiscSkills;
