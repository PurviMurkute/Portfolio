import projimg from './../assets/project1img.png';

const Projects = () => {
  return (
    <div id='projects' className='bg-gradient-to-b from-black via-gray-950 to-gray-900 flex flex-col justify-center items-center p-10'>
        <h1 className='text-3xl font-extrabold text-pink-300'>Projects</h1>
        <div className='py-3 px-5 border-1 border-pink-500 bg-gradient-to-b from-orange-950 to-transparent shadow-xl w-[500px] rounded-2xl my-5'>
            <h3 className='text-white font-bold py-2 text-lg'>Expense Diary</h3>
            <img src={projimg} alt='pro-img' className='rounded-2xl my-2'/>
            <p className='text-white font-bold py-2 text-lg'>Project Details</p>
            <p className='text-gray-300'>A full stack web app that allows users to perform complete CRUD operations — add, view, update, and delete expenses. Designed to help users stay on top of their finances with a clean UI and insightful spending summaries.</p>
            <p className='text-white font-bold py-2 text-lg'>Tech Stack</p>
            <div className='flex gap-1'>
                <p className='px-1 bg-gray-600 text-sm rounded-md text-white'>ReactJs</p>
                <p className='px-1 bg-gray-600 text-sm rounded-md text-white'>NodeJs</p>
                <p className='px-1 bg-gray-600 text-sm rounded-md text-white'>ExpressJs</p>
                <p className='px-1 bg-gray-600 text-sm rounded-md text-white'>MongoDB</p>
                <p className='px-1 bg-gray-600 text-sm rounded-md text-white'>Tailwind CSS</p>
            </div>
            <div className='my-4 flex justify-evenly'>
                <button className='px-3 py-1 w-[220px] rounded-md bg-gray-500 text-white font-medium'>Live Demo</button>
                <button className='px-3 py-1 w-[220px] rounded-md bg-gray-500 text-white font-medium'>Source Code</button>
            </div>
        </div>
    </div>
  )
}

export default Projects