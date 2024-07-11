import { backendSkills } from "@/constants/skills";
import SkillsCard from "./SkillsCard";

const BackendSkills = () => {
  return (
    <div>
      <div className="flex flex-col items-center my-8 xl:mt-12 text-4xl md:text-5xl text-white font-secondary">
        Backend
      </div>
      <SkillsCard skills={backendSkills} />
    </div>
  );
};

export default BackendSkills;
