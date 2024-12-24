import React from 'react'
import p_1 from '../assets/p_1.png'
import p_2 from '../assets/p_2.png'
import p_3 from '../assets/p_3.png'
import p_4 from '../assets/p_4.png'

 

const Projects = () => {

    const projectsArray = [

        {
            id:1,
            thumbnail:p_1,
            path: 'https://e-commerce-two-frontendd.vercel.app/',
            code:"https://github.com/remya0804/clothique"

        },

        {
            id:2,
            thumbnail:p_2,
            path: 'https://quill-frontend-zeta.vercel.app/',
            code: 'https://github.com/remya0804/TRAVEL'

        },
        {
            id:3,
            thumbnail:p_3,
            path: 'https://remya0804.github.io/food-delivery-app/',
            code:"https://github.com/remya0804/food-delivery-app"

        },
        {
            id:4,
            thumbnail:p_4,
            path: 'https://remya0804.github.io/remya-portfolio/',
            code:'https://github.com/remya0804/remya-portfolio'

        },
    ]

  return (
    <div name="projects" className='pt-20 p-4 bg-gradient-to-b from-black to-gray-800 w-full text-white h-full'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col items-start justify-start w-full h-ful'>

            <div className='md:pb-8 pb-4'>

                <p className='bg-gradient-to-r from-pink-600  to-blue-500  text-transparent bg-clip-text text-2xl sm:text-4xl font-bold inline border-b-2 border-white pb-1 '>Projects</p>
                <p className='pt-8 md:pt-12 text-lg md:text-xl'>Feel free to explore some of my work here.</p>

            </div>

            <div className='w-full grid  sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0  pt-4 '>

                {

                    projectsArray.map((item,idx) => {

                        console.log(item.code);
                        

                        return <div key={idx} className='shadow-md shadow-gray-600 rounded-lg'>

                        <img src={item.thumbnail} alt="" className='rounded-md hover:scale-105 duration-200 '/>

                        <div className='flex items-center justify-center gap-3'>
                            
                            <button className='px-4  text-xs font-semibold sm:text-lg py-2 my-4 hover:scale-105 hover:text-cyan-500  duration-500'>
                                
                                <a href={item.path}>Demo</a>
                                                        
                            </button>
                            <button className='px-4  text-xs font-semibold sm:text-lg py-2 my-4 hover:scale-105 hover:text-cyan-500 duration-500'>
                                
                                <a href={item.code}>Code</a>
                                
                            </button>
                        </div>
                </div>
                    })
                }
               
               
            </div>
        </div>
    </div>
  )
}

export default Projects