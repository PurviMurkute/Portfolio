import React from "react";

const SkillsCard = ({ icon, title }) => {
  return (
    <div className="p-3 border-1 border-pink-500 bg-gradient-to-b from-orange-950 to-transparent shadow-xl flex flex-col justify-center items-center w-[85px] md:w-[100px] rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-200">
      <div className="w-[35px] h-[40px] text-4xl text-gray-300 flex justify-center">
        {icon}
      </div>
      <h4 className="text-white ">{title}</h4>
    </div>
  );
};

export default SkillsCard;
