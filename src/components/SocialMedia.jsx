import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";


const SocialMedia = () => {
  return (
    <div className='hidden lg:flex lg:flex-col lg:top-[35%] lg:left-0 fixed'>

        <ul className='lg:flex-col flex'>

            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md duration-300 bg-gray-500 hover:ml-[-10px]'>

                <a className='flex justify-between items-center w-full text-white' href="https://www.linkedin.com/in/remya-m-9b218033a"><> LinkedIn <FaLinkedin className='text-xl' /></></a>

            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md duration-300 bg-gray-500 hover:ml-[-10px]'>

                <a className='flex justify-between items-center w-full text-white' href="https://github.com/remya0804"><> Github <FaGithub className='text-xl' /></></a>

            </li>
            {/* <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md duration-300 bg-gray-500 hover:ml-[-10px]'>

                <a className='flex justify-between items-center w-full text-white' href="/resume.pdf" download={true} ><> Resume <ImProfile className='text-xl' /></></a>

            </li> */}
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md duration-300 bg-gray-500 hover:ml-[-10px]'>

                <a className='flex justify-between items-center w-full text-white' href="mailto:remya.rs0804@gmail.com"><> Email <IoMdMail className='text-xl' /></></a>

            </li>
        </ul>

       
       
        

    </div>
  )
}

export default SocialMedia