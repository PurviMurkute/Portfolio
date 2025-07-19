import React from 'react'

const ProjectCard = ({title, img, description, techStack}) => {
  return (
    <div className='py-3 px-5 border-1 border-pink-500 bg-gradient-to-b from-orange-950 to-transparent shadow-xl w-[500px] rounded-2xl my-5'>
            <h3 className='text-white font-bold py-2 text-lg'>{title}</h3>
            <img src={img} alt='pro-img' className='rounded-2xl my-2'/>
            <p className='text-white font-bold py-2 text-lg'>Project Details</p>
            <p className='text-gray-300'>{description}</p>
            <p className='text-white font-bold py-2 text-lg'>Tech Stack</p>
            <div className='flex gap-1'>
                {techStack.map((tech, i)=>{
                    return <p key={i} className='px-1 bg-gray-600 text-sm rounded-md text-white'>{tech}</p>
                })}
            </div>
            <div className='my-4 flex justify-evenly'>
                <button className='px-3 py-1 w-[220px] rounded-md bg-gray-500 text-white font-medium'>Live Demo</button>
                <button className='px-3 py-1 w-[220px] rounded-md bg-gray-500 text-white font-medium'>Source Code</button>
            </div>
        </div>
  )
}

export default ProjectCard