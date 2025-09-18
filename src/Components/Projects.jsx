import React from "react";
import one from '../Assets/Screenshot 2025-05-26 at 7.56.24 PM.png'
import two from '../Assets/Screenshot 2025-05-26 at 7.59.39 PM.png'
import three from '../Assets/Screenshot 2025-05-26 at 8.01.27 PM.png'
import four from '../Assets/E_M_S.png'


const Projects = () => {

  return (
    <>
    <h1 className="font-bold text-5xl text-center bg-white text-black pt-[90px] ">PROJECTS</h1>
    <div id="project" className="w-full py-[13rem] px-4 bg-white text-black mt-[-150px]">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
            <div className="w-full shadow-xl flex flex-col  my-4 rounded-lg hover:scale-105 duration-300 ">
                <img className="w-full mx-auto h-full bg-white" src={two} alt="" />
            <p  className=' text-black  rounded-md font-medium my-4 mx-auto  text-center '>Render Station</p>
            <a href="https://renderstation.netlify.app/"  className=' rounded-md font-medium text-blue-500 cursor-pointer my-3  text-center '>view</a>
            </div>
            <div className="w-full shadow-xl flex flex-col  my-4 rounded-lg hover:scale-105 duration-300 ">
                <img className="w-full mx-auto  bg-white " src={one} alt="" />
            <p  className=' text-black  rounded-md font-medium my-4 mx-auto  text-center '>Novu.pk</p>
            <a href="https://starlit-hummingbird-0b7382.netlify.app/" className=' rounded-md font-medium text-blue-500 cursor-pointer my-3  text-center '>view</a>

            </div>
            
            <div className="w-full shadow-xl flex flex-col  my-4 rounded-lg hover:scale-105 duration-300 ">
                <img className="w-full mx-auto  bg-white" src={four} alt="" />
            <p  className=' text-black  rounded-md font-medium my-4 mx-auto  text-center '>Portfolio</p>

                        <a href="https://employee-management-sy-git-55b0f3-hasnainalis-projects-d3d00499.vercel.app
"  className=' rounded-md font-medium text-blue-500 cursor-pointer my-3  text-center '>view</a>
            </div>
        </div>
    </div>
    
   
    </>
  );
};

export default Projects;
