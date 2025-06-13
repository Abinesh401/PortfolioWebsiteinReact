import React from 'react'
import Img from '../../assets/cofeelogo-removebg-preview.png'
import { motion } from 'framer-motion';

const WhereToBuy = () => {
  return (
    <div className='container my-36 ml-60'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-70 place-items-center '>
            {/* form section */}
            <div className='space-y-8'>
                <motion.h1 
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{opacity:1,y:0}}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 10,
                    delay:0.2,

                  }}
                className='text-4xl font-bold text-gray-900 font-serif'>Buy our products from anywhere</motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                        type: 'spring',
                    stiffness: 200,
                    damping: 10,
                      delay:0.4,
                      
                    }}
                 className='flex items-center gap-4'>
                    <input type="text" placeholder='Name' 
                    className='input-style w-full lg:w-[150px]  border-amber-400 border-1 '/>
                    <input type="email" placeholder='Email' className='input-style w-full border-amber-400 border-1' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                        type: 'spring',
                    stiffness: 200,
                    damping: 10,
                      delay:0.6,
                      
                    }}
                 className='flex items-center gap-4'>
                    <input type="text" placeholder='country' 
                    className='input-style w-full border-amber-400 border-1'/>
                    <input type="email" placeholder='Zipcode' className='input-style w-full  lg:w-[150px] border-amber-400 border-1' />
                </motion.div>
                <motion.button 
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                        type: 'spring',
                    stiffness: 200,
                    damping: 10,
                      delay:0.8,
                      
                    }}
                className='bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-200 duration-75 w-full'>Order Now</motion.button>
            </div>
            {/* world map section */}
            <div className='col-span-2'>
                <motion.img
              initial={{ opacity: 0, y: 100 }}
              whileInView={{opacity:1,y:0}}
              transition={{
                  type: 'spring',
              stiffness: 200,
              damping: 10,
                delay:0.4,
                
              }}
                 src={Img} alt="" className='w-full sm:w-[400px] mx-auto' />
            </div>
        </div>
      
    </div>
  )
}

export default WhereToBuy
