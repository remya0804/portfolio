import React from 'react'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";





const Skills = () => {

    const skillsArray = [

        {
            skill: 'HTML',
            icon: <FaHtml5 />,
            color: 'text-orange-500',
            shadow: 'shadow-orange-500'


        },
        {
            skill: 'CSS',
            icon: <FaCss3 />,
            color: 'text-blue-500',
            shadow: 'shadow-blue-500'

        },
        {
            skill: 'Javascript',
            icon: <IoLogoJavascript />,
            color: 'text-yellow-300',
            shadow: 'shadow-yellow-300'

        },
        {
            skill: 'React',
            icon: <FaReact />,
            color: 'text-blue-300',
            shadow: 'shadow-blue-300'

        },
        {
            skill: 'Tailwind CSS',
            icon: <RiTailwindCssFill />,
            color: 'text-blue-500',
            shadow: 'shadow-blue-500'

        },
        {
            skill: 'Node.js',
            icon: <FaNodeJs />,
            color: 'text-lime-700',
            shadow: 'shadow-lime-700'

        },
    
        {
            skill: 'Express.js',
            icon: <SiExpress />,
            color: 'text-yellow-500',
            shadow: 'shadow-yellow-500'

        },
        {
            skill: 'MongoDB',
            icon: <DiMongodb />,
            color: 'text-green-700',
            shadow: 'shadow-green-700'


        },
        {
            skill: 'Git',
            icon: <FaGit />,
            color: 'text-red-500',
            shadow: 'shadow-red-500'


        },
        {
            skill: 'GitHub',
            icon: <FaGithub />,
            color: 'text-gray-300',
            shadow: 'shadow-gray-300'


        },
    ]




  return (
    <div name="skills" className='p-4 pt-16  bg-gradient-to-b to-black from-gray-800 w-full text-white '>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-start  w-full h-full'>

            <div className='pb-4 md:pb-8'>

                <p className='bg-gradient-to-r from-pink-600  to-blue-500  text-transparent bg-clip-text text-2xl sm:text-4xl font-bold inline border-b-2 border-white pb-1 '>Skills</p>
                <p className='pt-8 md:pt-12 leading-relaxed text-lg md:text-xl '>These are the technologies I’ve worked with:</p>

            </div>

            <div className='flex flex-wrap gap-6 sm:hidden mt-6'>

                {

                    skillsArray.map((item,idx) => {

                        return <div key={idx}> 

                                    <div className={`${item.color} text-4xl`}>{item.icon}</div>
                        
                             </div>
                    })
                }
            </div>

            <div className='sm:grid hidden  grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-8 py-0 md:py-4 text-center '>
                {

                    skillsArray.map((item,idx) => {

                        return <div className={`shadow-md ${item.shadow} rounded-lg hover:scale-105 duration-200  `} key={idx}>

                                    <div className={`mt-4 ${item.color} flex justify-center text-3xl md:text-3xl lg:text-7xl`}>{item.icon}</div>

                                    <p className='hidden sm:block m-4'>{item.skill}</p>


                                </div>


                    })
                }

                
            </div>
        </div>
    </div>
  )
}

export default Skills
