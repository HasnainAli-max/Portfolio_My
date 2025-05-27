import React, { useState } from 'react'
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav , setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='flex justify-between h-24 items-center max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='hidden gap-10 md:flex cursor-pointer '>
        <Link to='hero' smooth={true} duration={1000} className=' cursor-pointerp-4'>Home</Link>
        <Link to='about' smooth={true} duration={1000} className=' cursor-pointerp-4'>AboutUs</Link>
        <Link to='skills' smooth={true} duration={1000} className=' cursor-pointerp-4'>Skills</Link>
        <Link to='project' smooth={true} duration={1000} className=' cursor-pointerp-4'>Projects</Link>
        <Link to='contact' smooth={true} duration={1000} className=' cursor-pointerp-4'>Contact</Link>
      </ul>
      <div className='block md:hidden' onClick={handleNav}>
    {!nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/>}
        
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%]  border-r-grey-900 h-full bg-[#000300]' : 'fixed left-[-100%] ease-in-out duration-500'}>
              <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
        <ul className="p-4 flex flex-col items-start gap-5 uppercase w-full">
        <Link to='hero' smooth={true} duration={1000}  className='w-full text-start cursor-pointerp-4 border-b '>HOME</Link>
        <Link to='about' smooth={true} duration={1000} className='w-full text-start cursor-pointerp-4 border-b '>ABOUT</Link>
        <Link to='skills' smooth={true} duration={1000} className='w-full text-start cursor-pointerp-4 border-b '>AKILLS</Link>
        <Link to='project' smooth={true} duration={1000} className='w-full text-start cursor-pointerp-4 border-b '>PROJECT</Link>
        <Link to='contact' smooth={true} duration={1000}  className='w-full text-start cursor-pointerp-4 border-b '>CONTACT</Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
