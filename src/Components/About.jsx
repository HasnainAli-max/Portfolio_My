import React from 'react'
import computer from '../Assets/images.jpeg'
import { useCollapse } from "react-collapsed";



const About = () => {
      const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div id='about' className='w-full bg-white py-16 px-4 '>
      <div   className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img   className='w-[500px] mx-auto my-4' src={computer} alt="" />
        <div className="flex flex-col justify-center">
            {/* <p className="text-[#00df9a] font-bold">About</p> */}
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black">About Me</h1>
            <p className='text-black'>I’m Hasnain Ali a passionate and self- driven  web developer in the MERN Stack <stack className="hidden">..</stack>
              {isExpanded ? '' :(
                <button className=' font-bold  text-purple-900' {...getToggleProps()}>Show more...</button>
              )}
      <section className='text-black' {...getCollapseProps()}> I love building dynamic, user-friendly web applications and am constantly expanding my knowledge in JavaScript, React, Node.js, and MongoDB. While I’m just starting my journey, I’ve already built a few projects that have helped me understand the full development cycle—from designing responsive frontends to creating efficient backends. I’m eager to contribute to real- world projects, learn from experienced developers, and grow as a professional in the tech industry.</section>
             {!isExpanded ? '' :(
                <button className='font-bold  text-purple-900' {...getToggleProps()}>Show less</button>
              )}
            </p>
        </div>
      </div>
    </div>
  )
}

export default About
