import React, { useState } from 'react';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const [formError, setFormError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      setFormError('Please fill out both fields.');
      return;
    }

    // Handle form submission here (e.g., sending data to an API)
    alert('Message Sent!');
    setFormData({ email: '', message: '' });
    setFormError('');
  };

  return (
    <>
      <h1 className="w-full text-3xl font-bold text-[#00df9a] text-center mt-10 pt-5">Contact.</h1>
      <div id="contact" className="max-w-[1240px] mx-auto py-10 px-4 gap-8 text-gray-300">
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-between">
          <div className="w-full">
            <h6 className="font-bold text-gray-200 flex gap-2">
              <MdEmail size={18} className="mt-1" />
              Email
            </h6>
            <ul>
              <li className="py-2 text-sm">ha3710191@gmail.com</li>
            </ul>
          </div>

          <div className="w-full">
            <h6 className="font-bold text-gray-200 flex gap-2">
              <FaPhoneSquareAlt size={18} className="mt-1" />
              Phone
            </h6>
            <ul>
              <li className="py-2 text-sm">03185665145</li>
            </ul>
          </div>

          <div className="w-full">
            <h6 className="font-bold text-gray-200 flex gap-2">
              <FaLocationDot size={18} className="mt-1" />
              Address
            </h6>
            <ul>
              <li className="py-2 text-sm">Lahore</li>
            </ul>
          </div>

          <div className="w-full md:col-span-2 lg:col-span-1">
            <h6 className="font-bold text-gray-200">Send Message</h6>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="font-bold h-10 rounded-md placeholder:text-sm px-4 text-black outline-none"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="font-bold h-24 rounded-md placeholder:text-sm px-4 text-black outline-none"
                placeholder="Your Message"
                required
              />
              {formError && <p className="text-red-500 text-sm">{formError}</p>}
              <button
                type="submit"
                className="bg-[#00df9a] text-black rounded-md px-5 py-2 whitespace-nowrap h-10 hover:bg-[#00c88d] duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
