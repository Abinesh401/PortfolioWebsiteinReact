import React from 'react'
import { FaFacebook,FaGoogle,FaInstagram,FaPhone,FaTelegram } from 'react-icons/fa'
import {FaMapLocation} from 'react-icons/fa6'
import Credit from '../../assets/credit_card1-removebg-preview.png'
import { motion } from 'framer-motion'

const Foooter = () => {
  return (
    <div className='bg-gradient-to-r bg-amber-700 to-primaryDark pt-12 pb-8 text-white '>
       
       
       
        <div className='container ml-40'>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {/* company detailes */}
                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 10,
                      delay:0.5,
  
                    }}
                className='space-y-6 '>
                    <h1 className='text-3xl font-bold uppercase'>Coders Cafee</h1>
                    <p  className='text-sm max-w-[300px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Adipisci nemo saepe est ex enim id inventore mollitia quo
                         delectus officia consequuntur, assumenda debitis amet quae tempore
                          impedit ad sunt asperiores?</p>
                          <div>
                            <p className='flex items-center gap-2'>
                                <FaPhone/>
                                +1 (123) 456-7890
                            </p>
                            <p className='flex items-center gap-2'>
                                <FaMapLocation/>
                                Mayiladuthurai,TamilNadu.
                            </p>
                          </div>

                </motion.div>
                {/* Footer Links */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 10,
                      delay:0.7,
  
                    }}
                 className='space-y-6 '>
                    <h1 className='text-3xl font-bold'>Quick Links</h1>
                    <div className='grid grid-cols-2 gap-3'>
                    {/* first column */}
                    <div>
                        <ul className='space-y-2'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact us</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    {/* second colmn */}
                    <div>
                        <ul className='space-y-2'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact us</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    </div>
                </motion.div>
                {/* social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity:1,y:0}}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 10,
                      delay:0.8,
  
                    }}
                 className='space-y-4'>
                    <h1 className='text-3xl font-bold'>Follow us</h1>
                    <div className='flex items-center gap-3'>
                        <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
                        <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                        <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                        <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
                    </div>
                    <div>
                        <h1 className='text-xl mt-4 font-semibold'>Payment Methods</h1>
                        <img src={Credit} alt="credit cards" className='w-[25%] ' />
                    </div>

                </motion.div>
            </div>

            {/* copy rite section */}
            <p className='text-white text-center mt-8 pt-8 border-t-2'>
                copyright &copy; 2024 company Name. All rights reserved
            </p>

        </div>    
    </div>
  )
}

export default Foooter
