import React from 'react'
import { IoIosAdd } from 'react-icons/io'

const Hero = () => {
  return (
    <div className='w-4/5 m-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0'>
      <div className='md:w-1/2 space-y-6'>
      <p>___ Innovation Requires Courage</p>
      <h1 className='text-5xl md:text-7xl font-bold'>Being Innovatores Requires Courage</h1>
      <p className='md:text-lg'>
        Understanding your capacity for risk can guide your busioness into untapped opportunities, helping
        you navigate growth.
      </p>
      <div className='flex space-x-5'> 
        <button className='px-5 py-3 rounded-full font-semibold bg-black text-white'>Book</button>
        <button className='flex space-x-4 items-center'> 
          <IoIosAdd /> <span className='w-8 h-8 justify-center items-center bg-black text-white rounded-full'>
            Watch Video
          </span>
        </button>
      </div>
      </div>
      <div>
        <img src="/hero.svg" alt="" />
      </div>
    </div>
  )
}

export default Hero
