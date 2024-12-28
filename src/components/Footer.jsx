import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='lg:hidden w-full h-full bg-gradient-to-b to-black from-gray-800 flex flex-col gap-6'>

        <hr className='w-[90%] h-[1px] m-auto' />

        <ul className=' flex items-center justify-center  mt-3'>
        
                    <li className='flex justify-between items-center h-14 px-4 '>
        
                        <a className='flex justify-between items-center w-full text-white' href="https://www.linkedin.com/in/remya-m-9b218033a"><>  <FaLinkedin className='text-xl' /></></a>
        
                    </li>
                    <li className='flex justify-between items-center  h-14 px-4 '>
        
                        <a className='flex justify-between items-center w-full text-white' href="https://github.com/remya0804"><>  <FaGithub className='text-xl' /></></a>
        
                    </li>
                    {/* <li className='flex justify-between items-center  h-14 px-4 '>
        
                        <a className='flex justify-between items-center w-full text-white' href="/resume.pdf" download={true} ><>  <ImProfile className='text-xl' /></></a>
        
                    </li> */}
                    <li className='flex justify-between items-center h-14 px-4 '>
        
                        <a className='flex justify-between items-center w-full text-white' href="mailto:remya.rs0804@gmail.com"><>  <IoMdMail className='text-xl' /></></a>
        
                    </li>
                </ul>
        
edde
    </div>
  )
}

export default Footer