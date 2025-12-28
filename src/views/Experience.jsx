import React from "react";
import { Experiences } from "../config/ExperienceConfig";
import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-6 md:px-16 bg-gradient-to-b from-white via-slate-100 to-slate-200"
    >
      <h2 className="font-extrabold text-2xl md:text-4xl text-center text-pink-500 pb-4">
        Experience
      </h2>

      <div>
        {Experiences.map((exp, i) => {
          const {
            title,
            company,
            start,
            end,
            ongoing,
            description,
            techstack,
          } = exp;
          return (
            <ExperienceCard
              key={i}
              title={title}
              company={company}
              start={start}
              end={end}
              ongoing={ongoing}
              description={description}
              techstack={techstack}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
