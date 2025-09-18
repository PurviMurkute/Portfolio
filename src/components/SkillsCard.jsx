import React from "react";

const SkillsCard = ({ icon, title }) => {
  return (
    <div className="p-3 border-1 border-pink-500 bg-white shadow-xl flex flex-col justify-center items-center w-[80px] md:w-[100px] rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-200">
      <div className="w-[30px] md:w-[35px] md:h-[40px] text-4xl text-gray-700 flex justify-center">
        {icon}
      </div>
      <h4 className="text-gray-700 text-xs md:text-sm">{title}</h4>
    </div>
  );
};

export default SkillsCard;
