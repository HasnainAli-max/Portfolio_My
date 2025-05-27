import React from 'react'

const Contact = () => {
    const handleDownload = () => {
    // For files in public folder:
    const fileUrl = '/WebdevCV.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'WebdevCV.pdf'; // Optional: Set filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="w-full py-16 text-white px-4">
      {/* <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 mt-5">Wand tips and tricks to optimize your flow ?</h1>
          <p className="">Sign up to our newsletters and stay up to date</p>
        </div>
        <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-5">
                <input className=" p-3 w-full flex rounded-md text-black " type="emailt" placeholder="enter your email " />
                    <button className='text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3  '>Notify Me</button>
            </div>
        <p className="">we care about the protection of your data. read our <span className="text-[#00df9a]">Privacy Policy</span></p>
        </div>
      </div> */}
      <div className='flex items-center'>

            <button onClick={handleDownload} className='text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Download CV</button>
      </div>
    </div>
  )
}

export default Contact
