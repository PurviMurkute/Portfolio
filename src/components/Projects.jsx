import { projectDetails } from "../config/ProjectConfig";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-black via-gray-950 to-gray-900 flex flex-col justify-center items-center p-10"
    >
      <h1 className="text-3xl font-extrabold text-pink-300">Projects</h1>
      <div className="flex gap-5 flex-wrap">
        {projectDetails.map((project, i) => {
          const { title, img, description, techStack, demoLink, githubRepo } =
            project;

          return (
            <ProjectCard
              key={i}
              title={title}
              img={img}
              description={description}
              techStack={techStack}
              demoLink={demoLink}
              githubRepo={githubRepo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
