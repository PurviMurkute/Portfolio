import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

const Skills = () => {
  return (
    <div className='bg-gradient-to-b from-red-950 via-pink-900 to-rose-900 p-10'>
        <h1 className='text-white font-extrabold text-4xl text-center'>Skills & Technologies</h1>
        <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold text-white text-2xl py-4'>Web Technologies</h3>
            <div className='flex justify-evenly flex-wrap gap-4'>
                <FaHtml5 className='w-[47px] h-[50px] p-2 border-1 border-pink-500 rounded-full shadow-xl'/>
                <FaCss3Alt className='w-[47px] h-[50px] p-2 border-1 border-pink-500 rounded-full shadow-xl'/>
                <FaSquareJs className='w-[47px] h-[50px] p-2 border-1 border-pink-500 rounded-full shadow-xl'/>
                <FaReact className='w-[47px] h-[50px] p-2 border-1 border-pink-500 rounded-full shadow-xl'/>
                <RiTailwindCssFill className='w-[47px] h-[50px] p-2 border-1 border-pink-500 rounded-full shadow-xl'/>
                <DiNodejs className='w-[47px] h-[50px] p-2 border-1 border-pink-500 rounded-full shadow-xl'/>
                <SiExpress className='w-[47px] h-[50px] p-2 border-1 border-pink-500 rounded-full shadow-xl'/>
                <SiMongodb className='w-[47px] h-[50px] p-2 border-1 border-pink-500 rounded-full shadow-xl'/>
                <FaBootstrap className='w-[47px] h-[50px] p-2 border-1 border-pink-500 rounded-full shadow-xl'/>

            </div>
            <h3 className='font-bold text-white text-xl py-4'>Tools & Platform</h3>
            <div>

            </div>
            <h3 className='font-bold text-white text-xl py-4'>Databases</h3>
            <div>

            </div>
            <h3 className='font-bold text-white text-xl py-4'>Programming languages</h3>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Skills