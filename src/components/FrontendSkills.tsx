import { frontendSkills } from "@/constants/skills";
import SkillsCard from "./SkillsCard";

const FrontendSkills = () => {
  return (
    <div>
      <div className="flex flex-col items-center my-8 xl:mt-12 text-4xl md:text-5xl text-white font-secondary">
        Frontend
      </div>
      <SkillsCard skills={frontendSkills} />
    </div>
  );
};

export default FrontendSkills;
