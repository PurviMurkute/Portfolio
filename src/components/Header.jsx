import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center'>
        <div className='fixed top-0 w-2/3 border-1 border-pink-500 rounded-full shadow-lg my-2'>
        <div className='flex justify-between px-5 py-2'>
        <h3 className='text-white font-bold text-2xl'>Purvi </h3>
        <div className='flex justify-evenly text-white font-bold gap-4 pt-2'>
            <p>Pojects</p>
            <p>About</p>
            <p>Contact</p>
        </div>
        </div>
    </div>
    </div>
    
  )
}

export default Header