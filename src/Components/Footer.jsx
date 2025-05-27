import React from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] text-center mt-10 pt-5 '>Contact.</h1>
      <div id='contact' className='max-w-[1240px] mx-auto py-10 px-4 gap-8 text-gray-300 '>
        <div  className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-between ">
          <div className="w-full">
            <h6 className='font-bold text-gray-200 flex gap-2'><MdEmail size={18} className='mt-1' />Email</h6>
            <ul>
              <li className="py-2 text-sm">ha3710191@gmail.com</li>
            </ul>
          </div>
          
          <div className="w-full">
            <h6 className='font-bold text-gray-200 flex gap-2'><FaPhoneSquareAlt size={18} className='mt-1' />Phone</h6>
            <ul>
              <li className="py-2 text-sm">03185665145</li>
            </ul>
          </div>
          
          <div className="w-full">
            <h6 className='font-bold text-gray-200 flex gap-2'><FaLocationDot size={18} className='mt-1' />Address</h6>
            <ul>
              <li className="py-2 text-sm">Lahore</li>
            </ul>
          </div>
          <form className="flex w-full gap-2 flex-wrap lg:flex-nowrap">
  <input  className="font-bold h-10 rounded-md placeholder:text-sm px-4 text-black outline-none flex-grow" placeholder="Send Message" type="email" />
  <button className="bg-[#00df9a] text-black rounded-md px-5 py-2 whitespace-nowrap h-10">Send</button>
</form>
        </div>
      </div>
    </>
  )
}

export default Footer