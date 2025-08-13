import {
  DataBase,
  Languages,
  TechStack,
  ToolsStack,
} from "../config/TechStackConfig";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black via-gray-950 to-gray-900 flex flex-col justify-center items-center p-4 md:p-10"
    >
      <div className="md:w-[70%]">
        <h1 className="font-extrabold text-2xl md:text-4xl text-center text-pink-300">
          Skills & Technologies
        </h1>
        <div className="flex flex-col justify-center items-center">
          <p className="text-gray-300 py-3 text-center">
            Tools I love using to build smooth interfaces, powerful backends,
            and everything in between.
          </p>
          <h3 className="font-bold text-white text-xl md:text-2xl my-5">
            Web Technologies
          </h3>
          <div className="flex justify-center flex-wrap gap-3 md:gap-7 mb-4">
            {TechStack.map((tech, i) => {
              const { icon, title } = tech;

              return <SkillsCard key={i} icon={icon} title={title} />;
            })}
          </div>
          <h3 className="font-bold text-white text-xl md:text-2xl my-5">
            Tools & Platform
          </h3>
          <div className="flex justify-center flex-wrap gap-3 md:gap-7 mb-4">
            {ToolsStack.map((tech, i) => {
              const { icon, title } = tech;

              return <SkillsCard key={i} icon={icon} title={title} />;
            })}
          </div>
          <h3 className="font-bold text-white text-xl md:text-2xl py-4">
            Databases
          </h3>
          <div className="flex justify-center flex-wrap gap-3 md:gap-7 mb-4">
            {DataBase.map((tech, i) => {
              const { icon, title } = tech;

              return <SkillsCard key={i} icon={icon} title={title} />;
            })}
          </div>
          <h3 className="font-bold text-white text-xl md:text-2xl py-4">
            Programming languages
          </h3>
          <div className="flex justify-center flex-wrap gap-3 md:gap-7 mb-4">
            {Languages.map((tech, i) => {
              const { icon, title } = tech;

              return <SkillsCard key={i} icon={icon} title={title} />;
            })}
          </div>
          <p className="text-gray-300 py-3 text-center">
            Tech keeps evolving, and so do I - staying curious, experimenting,
            and enjoying every bit of it!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
