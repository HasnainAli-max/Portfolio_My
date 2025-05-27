import React from 'react'
import { Link } from 'react-scroll';
import {ReactTyped} from "react-typed";



const Hero = () => {
  return (
    <div id='hero' className='text-white'>
      <div className="max-w-[800px] mt-[-100px]  w-full h-screen mx-auto text-center flex flex-col justify-center">
      <div className="text-center flex justify-center items-center"> 
        <p className=" font-bold md:text-5xl sm:text-5xl text-3xl text-white py-4">Hi, I'm </p>
          <ReactTyped className=' md:text-5xl sm:text-4xl text-xl text-green-400 pl-2 md:pl-4 font-bold '
          
      strings={["Hasnain Ali",]}
        typeSpeed={120} backSpeed={140} loop/>
      </div>
        <h1 className='md:text-5xl sm:text-4xl text-4xl font-bold md:py-6'>I Am Web Developer</h1>
      
      <Link to='contact' smooth={true} duration={1000} className='cursor-pointer bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto  py-3 text-black'>Hire Me</Link>
      </div>
    </div>
  )
}

export default Hero
