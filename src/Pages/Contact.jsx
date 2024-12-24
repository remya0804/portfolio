import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='p-4 pt-20 bg-gradient-to-b from-black to-gray-800 w-full text-white h-full'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col items-start justify-start w-full h-full'>

            <div className='pb-8'>

                <p className=' text-2xl sm:text-4xl font-bold inline border-b-2 border-white pb-1 bg-gradient-to-r from-pink-600  to-blue-500  text-transparent bg-clip-text'>Contact</p>
                <p  className='pt-8 md:pt-12 text-sm sm:text-lg '>Submit the form below to get in touch with me</p>

            </div>

            <div className='w-full flex items-center justify-start'>

                <form className='w-full md:w-[75%] flex flex-col' action="https://getform.io/f/bkkkvxkb" method="POST">

                    <input className='bg-transparent rounded-md text-white p-3 border-[1px] focus:outline-none' type="text" name='name' placeholder='Enter your name' />

                    <input className='my-7 bg-transparent rounded-md text-white p-3 border-[1px] focus:outline-none'  type="email" name='email' placeholder='Enter your email' />

                    <textarea className='bg-transparent rounded-md text-white p-3 border-[1px] focus:outline-none'  name="message" rows='10' placeholder='Enter your message' id=""></textarea>

                    <button className=' text-white px-6 py-3 my-8 mx-auto flex items-center rounded-md bg-gradient-to-r from-pink-600  to-blue-500  cursor-pointer hover:scale-110 duration-500'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact