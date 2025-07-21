import React from "react";
import { Link } from "react-router";

const ProjectCard = ({
  title,
  img,
  description,
  techStack,
  demoLink,
  githubRepo,
}) => {
  return (
    <div className="py-2 md:py-3 px-3 md:px-5 border-1 border-pink-500 bg-gradient-to-b from-gray-950 to-transparent shadow-xl w-[300px] md:w-[500px] rounded-2xl my-2">
      <h3 className="text-white font-bold py-2 text-lg">{title}</h3>
      <img src={img} alt="pro-img" className="rounded-2xl my-2 object-contain w-[280px] md:w-[450px] h-[150px] md:h-[250px] block mx-auto" />
      <p className="text-white font-bold py-2 text-lg">Project Details</p>
      <p className="text-gray-300">{description}</p>
      <p className="text-white font-bold py-2 text-lg">Tech Stack</p>
      <div className="flex flex-wrap gap-1">
        {techStack.map((tech, i) => {
          return (
            <p
              key={i}
              className="px-2 py-1 my-1 bg-pink-500 text-xs rounded-sm text-white"
            >
              {tech}
            </p>
          );
        })}
      </div>
      <div className="my-2 md:my-4 flex justify-between">
        <Link to={demoLink}>
          <button className="px-3 py-1 w-[130px] md:w-[220px] rounded-md bg-gray-500 text-white font-medium">
            Live Demo
          </button>
        </Link>
        <Link to={githubRepo}>
          <button className="px-3 py-1 w-[130px] md:w-[220px] rounded-md bg-gray-500 text-white font-medium">
            Source Code
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
