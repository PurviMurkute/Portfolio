import React from "react";

const calculateExperience = (start, end, ongoing) => {
  const startDate = new Date(start + " 01");

  const endDate = ongoing
    ? new Date()
    : new Date(end + " 01");

  let totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  if (totalMonths < 0) totalMonths = 0;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months };
};

const ExperienceCard = ({
  title,
  company,
  start,
  end,
  ongoing,
  description,
  techstack,
}) => {
  const { years, months } = calculateExperience(start, end, ongoing);

  return (
    <div className="bg-white px-5 md:px-10 py-8 md:py-12 my-4 md:m-6 border-1 border-pink-300 rounded-xl shadow">
      <p className="text-sm text-gray-500">
        {start} - {ongoing ? "Present" : end}
      </p>

      <h2 className="text-xl md:text-2xl font-bold text-gray-800">
        {title}
      </h2>

      <div className="flex items-center gap-2 my-3">
      <h5 className="text-sm md:text-md text-gray-500 font-medium">
        {company}
      </h5>
      <p className="text-gray-500">●</p>
      <p className="text-sm md:text-md text-gray-500 font-medium">
        {years === 0
          ? `${months} months`
          : `${years}.${months} years`}
      </p>
      </div>

      <p className="text-sm md:text-[15px] text-gray-600 mb-6">
        {description}
      </p>

      <div className="flex justify-start flex-wrap gap-2 md:gap-4 my-2">
        {techstack.map((tech, i) => (
          <p
            key={i}
            className="border-1 border-pink-300 bg-pink-100 px-3 py-1 text-xs md:text-sm rounded-md"
          >
            {tech}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;