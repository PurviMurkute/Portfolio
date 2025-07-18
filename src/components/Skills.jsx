import { DataBase, Languages, TechStack, ToolsStack } from "./TechStack";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="bg-gradient-to-b from-red-950 via-pink-900 to-rose-950 flex flex-col justify-center items-center p-10">
      <div className="w-[60%]">
        <h1 className="font-extrabold text-4xl text-center text-pink-300">
          Skills & Technologies
        </h1>
        <div className="flex flex-col justify-center items-center">
          <p className="text-gray-300 py-3">
            Tools I love using to build smooth interfaces, powerful backends,
            and everything in between.
          </p>
          <h3 className="font-bold text-white text-2xl my-5">
            Web Technologies
          </h3>
          <div className="flex justify-center flex-wrap gap-7 mb-4">
            {TechStack.map((tech, i) => {
              const { icon, title } = tech;

              return <SkillsCard icon={icon} title={title} />;
            })}
          </div>
          <h3 className="font-bold text-white text-xl my-5">
            Tools & Platform
          </h3>
          <div className="flex justify-center flex-wrap gap-7 mb-4">
            {ToolsStack.map((tech, i) => {
              const { icon, title } = tech;

              return <SkillsCard icon={icon} title={title} />;
            })}
          </div>
          <h3 className="font-bold text-white text-xl py-4">Databases</h3>
          <div className="flex justify-center flex-wrap gap-7 mb-4">
            {DataBase.map((tech, i) => {
              const { icon, title } = tech;

              return <SkillsCard icon={icon} title={title} />;
            })}
          </div>
          <h3 className="font-bold text-white text-xl py-4">
            Programming languages
          </h3>
          <div className="flex justify-center flex-wrap gap-7 mb-4">
            {Languages.map((tech, i) => {
              const { icon, title } = tech;

              return <SkillsCard icon={icon} title={title} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
