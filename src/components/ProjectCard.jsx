const ProjectCard = ({
  title,
  img,
  description,
  features,
  techStack,
  demoLink,
  githubRepo,
}) => {
  return (
    <div className="py-2 md:py-3 px-3 md:px-5 border-1 border-pink-500 bg-white shadow-xl w-[320px] md:w-[400px] lg:w-[570px] rounded-2xl my-2">
      <h3 className="text-gray-700 font-bold py-2 text-lg">{title}</h3>
      <img
        src={img}
        alt="pro-img"
        className="rounded-2xl my-2 object-contain w-full h-[150px] md:h-[250px] block mx-auto"
      />
      <p className="text-gray-600 font-bold text-md md:text-lg">Project Details</p>
      <p className="text-gray-500 pt-2 text-[13px] md:text-sm">{description}</p>
      <div className="my-2">
        <p className="text-gray-700 font-medium py-2 text-md">Features:</p>
        <div className="flex flex-col gap-1">
          {features.map((feature, i) => {
            return (
              <ul className="list-disc" key={i}>
                <li className="text-gray-500 text-xs md:text-sm ms-5 my-1">{feature}</li>
              </ul>
            );
          })}
        </div>
      </div>
      <p className="text-gray-700 font-medium py-2 text-md">Tech Stack</p>
      <div className="flex flex-wrap gap-1">
        {techStack.map((tech, i) => {
          return (
            <p
              key={i}
              className="px-2 py-1 my-1 bg-pink-600 text-xs rounded-sm text-white"
            >
              {tech}
            </p>
          );
        })}
      </div>
      <div className="my-2 md:my-4 flex justify-between">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="px-4 py-2 w-[140px] md:w-[190px] lg:w-[250px] rounded-md border-1 border-black text-black font-medium cursor-pointer hover:shadow-md">
            Live Demo
          </button>
        </a>
        <a href={githubRepo} target="_blank" rel="noopener noreferrer">
          <button className="px-4 py-2 w-[140px] md:w-[190px] lg:w-[250px] rounded-md bg-gray-600 text-white font-medium cursor-pointer hover:bg-gray-700">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
