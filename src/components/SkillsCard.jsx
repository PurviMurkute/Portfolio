import React from 'react'

const SkillsCard = ({icon, title}) => {
  return (
    <div className='p-3 border-1 border-pink-500 bg-gradient-to-b from-orange-950 to-transparent shadow-xl flex flex-col justify-center items-center w-[100px] rounded-2xl'>
        <div className='w-[47px] h-[50px] text-4xl text-gray-300 block mx-auto'>{icon}</div>
        <h4 className='text-white '>{title}</h4>
    </div>
  )
}

export default SkillsCard;