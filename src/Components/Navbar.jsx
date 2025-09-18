import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [activeLink, setActiveLink] = useState('home'); // Track active link

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link on click
  };

  return (
    <div className="flex justify-between h-24 items-center max-w-[1240px] mx-auto px-4 text-white mt-[-50px]">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">PORTFOLIO.</h1>
      <ul className="hidden gap-10 md:flex cursor-pointer">
        <Link
          to="hero"
          smooth={true}
          duration={1000}
          className={`p-4 cursor-pointer ${activeLink === 'home' ? 'border-b-4 border-[#00df9a]' : ''}`}
          onClick={() => handleLinkClick('home')}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={1000}
          className={`p-4 cursor-pointer ${activeLink === 'about' ? 'border-b-4 border-[#00df9a]' : ''}`}
          onClick={() => handleLinkClick('about')}
        >
          AboutUs
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={1000}
          className={`p-4 cursor-pointer ${activeLink === 'skills' ? 'border-b-4 border-[#00df9a]' : ''}`}
          onClick={() => handleLinkClick('skills')}
        >
          Skills
        </Link>
        <Link
          to="project"
          smooth={true}
          duration={1000}
          className={`p-4 cursor-pointer ${activeLink === 'projects' ? 'border-b-4 border-[#00df9a]' : ''}`}
          onClick={() => handleLinkClick('projects')}
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1000}
          className={`p-4 cursor-pointer ${activeLink === 'contact' ? 'border-b-4 border-[#00df9a]' : ''}`}
          onClick={() => handleLinkClick('contact')}
        >
          Contact
        </Link>
      </ul>
      <div className="block md:hidden" onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[60%] border-r-grey-900 h-full bg-[#000300]'
            : 'fixed left-[-100%] ease-in-out duration-500'
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="p-4 flex flex-col items-start gap-5 uppercase w-full">
          <Link
            to="hero"
            smooth={true}
            duration={1000}
            className={`w-full text-start cursor-pointer p-4 border-b ${
              activeLink === 'home' ? 'border-b-4 border-[#00df9a]' : ''
            }`}
            onClick={() => handleLinkClick('home')}
          >
            HOME
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            className={`w-full text-start cursor-pointer p-4 border-b ${
              activeLink === 'about' ? 'border-b-4 border-[#00df9a]' : ''
            }`}
            onClick={() => handleLinkClick('about')}
          >
            ABOUT
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={1000}
            className={`w-full text-start cursor-pointer p-4 border-b ${
              activeLink === 'skills' ? 'border-b-4 border-[#00df9a]' : ''
            }`}
            onClick={() => handleLinkClick('skills')}
          >
            SKILLS
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={1000}
            className={`w-full text-start cursor-pointer p-4 border-b ${
              activeLink === 'projects' ? 'border-b-4 border-[#00df9a]' : ''
            }`}
            onClick={() => handleLinkClick('projects')}
          >
            PROJECT
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className={`w-full text-start cursor-pointer p-4 border-b ${
              activeLink === 'contact' ? 'border-b-4 border-[#00df9a]' : ''
            }`}
            onClick={() => handleLinkClick('contact')}
          >
            CONTACT
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
