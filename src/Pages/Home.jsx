import React from 'react'
import photo from '../assets/phhoto.png'
import { FaAngleRight } from "react-icons/fa6";
import {Link} from 'react-scroll'


const Home = () => {

  return (

    <div name="home" className=' pt-16 md:pt-28 min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 px-4'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col-reverse  items-center justify-center h-full px-4 text-white md:flex-row'>

            <div className='flex flex-col justify-center items-center md:items-start h-full lg:pl-12'>

                <h2 className=' text-xl  text-center md:text-left md:text-2xl lg:text-4xl font-bold text-white' >I'm a Frontend Developer</h2>

                <p className=' text-gray-500 py-4 text-sm sm:text-lg md:text-xl md:leading-relaxed max-w-[500px]'>Passionate about building responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and React. I focus on writing clean, efficient code and creating seamless user experiences. Let’s connect!</p>

                <div className='flex justify-start'>

                    <button className='group text-white text-xs sm:text-sm w-fit px-6 py-3 sm:my-2 flex items-center rounded-md bg-gradient-to-r from-pink-600 to-blue-500 cursor-pointer'>
                        
                        <Link  to="projects" smooth duration={500}> Projects </Link> <span className='group-hover:rotate-90 text-md sm:text-lg ml-1'><FaAngleRight /></span></button>

                </div>
            </div>

            <div>

                <img className='rounded-2xl mx-auto w-[50%] md:w-full mb-5' src={photo} alt="" />

            </div>

        </div>


        
    </div>

  )
}

export default Home