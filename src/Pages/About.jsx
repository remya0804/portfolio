import React from 'react'

const About = () => {
  return (
    <div id="about"  className='p-4 pt-16 w-full bg-gradient-to-b from-gray-800 to-black text-white '>
        
        <div  className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>

            <div className='md:pb-8 sm:pb-4 '> 
                
                <p className='bg-gradient-to-r from-pink-600  to-blue-500 text-transparent bg-clip-text text-2xl sm:text-4xl font-bold inline border-b-2 border-white pb-1 '>About</p> 
                
            </div>

            <p className='text-md leading-relaxed md:leading-relaxed md:text-xl mt-8'>Hello! I'm Remya, a passionate Frontend Developer with a deep love for creating visually appealing and user-friendly websites. With a strong foundation in HTML, CSS, JavaScript, and React, I specialize in building responsive and interactive web applications that work seamlessly across different devices and browsers.</p>

            <br />

            <p  className='text-md leading-relaxed md:leading-relaxed md:text-xl'>I enjoy solving problems through code and strive to create simple yet effective solutions. My approach is to focus on clean, maintainable code while keeping the user experience at the forefront of every project. I’m always open to new challenges and exciting opportunities—let’s build something great together!</p>
            
            
        </div>
    </div>
  )
}

export default About