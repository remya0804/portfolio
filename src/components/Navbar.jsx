import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import {Link} from 'react-scroll'

const Navbar = () => {

    const [menu,setMenu] = useState(false)
    

  return (
    <div className='flex items-center justify-between w-full fixed left-0 top-0 text-white bg-black px-8  '>
        
        <div>
             
             <h1 className='text-2xl lg:text-5xl font-semibold py-4 font-signature bg-gradient-to-r from-pink-600  to-blue-500 text-transparent bg-clip-text'><Link className='font-signature' to="home"> Remya </Link></h1>
        </div>

        <ul className='hidden md:flex'>

            <li className='text-gray-500 px-4 capitalize cursor-pointer font-medium hover:scale-105 transition-all duration-500'><Link to="home"> home </Link> </li>
            <li className='text-gray-500 px-4 capitalize cursor-pointer font-medium hover:scale-105 transition-all duration-500'><Link to="about"> about </Link> </li>
            <li className='text-gray-500 px-4 capitalize cursor-pointer font-medium hover:scale-105 transition-all duration-500'><Link to="projects"> projects </Link> </li>
            <li className='text-gray-500 px-4 capitalize cursor-pointer font-medium hover:scale-105 transition-all duration-500'><Link to="skills"> skills </Link> </li>
            <li className='text-gray-500 px-4 capitalize cursor-pointer font-medium hover:scale-105 transition-all duration-500'><Link to="contact"> contact </Link> </li>

        </ul>

        <div onClick={() => setMenu(!menu)} className='text-gray-500 cursor-pointer z-10 md:hidden'>

            {

                menu 
                
                ? <IoClose className='text-3xl'/>

                : <LuMenu className='text-3xl' />
            }
  

        </div>

        {

            menu && (

                <ul className='w-full h-screen absolute top-0 left-0 flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800 text-gray-500'>

                <li className='text-2xl px-4 py-6 cursor-pointer capitalize'>
                    
                   <Link onClick={() => setMenu(false)} to="home" smooth duration={500}> home </Link> 
                    
                </li>
                <li className='text-2xl px-4 py-6 cursor-pointer capitalize'>
                    
                    <Link onClick={() => setMenu(false)} to="about"> about </Link> 

                </li>
                <li className='text-2xl px-4 py-6 cursor-pointer capitalize'>
                    
                    <Link onClick={() => setMenu(false)} to="projects"> projects </Link> 

                </li>
                <li className='text-2xl px-4 py-6 cursor-pointer capitalize'>
                    
                    <Link onClick={() => setMenu(false)} to="skills">skills</Link> 

                </li>
                <li  className='text-2xl px-4 py-6 cursor-pointer capitalize'>
                    
                    <Link onClick={() => setMenu(false)} to="contact">contact</Link> 

                </li>
               

        </ul>


            )
        }

        
    </div>
  )
}

export default Navbar