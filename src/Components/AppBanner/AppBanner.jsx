import React from 'react'
import Banner from '../../assets/banner2.webp'
import App from '../../assets/appstore-removebg-preview.png'
import Play from '../../assets/appstore-removebg-preview.png'
import { motion } from 'framer-motion'



const  BannerStyle = {
    
  backgroundImage: `url(${Banner})`,
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   backgroundRepeat: 'no-repeat',
   width:"120%" 
    
}

const AppBanner = () => {
  return (
    <div className='container my-10 '>  
        <div style={BannerStyle} className='sm:min-h-[400px] md:max-w-[350%]  sm:flex sm:justify-end sm:items-center rounded-xl ml-8 '>
            <div className='space-y-4 max-w-xl mx-auto mr-40'>
                <motion.h1
                 initial={{ opacity: 0, y: 100 }}
                 whileInView={{opacity:1,y:0}}
                 transition={{
                     type: 'spring',
                 stiffness: 200,
                 damping: 10,
                   delay:0.4,
                   
                 }}
                 className='text-2xl text-center sm:text-4xl font-semibold'>Download the app</motion.h1>
                <motion.p
                 initial={{ opacity: 0, y: 100 }}
                 whileInView={{opacity:1,y:0}}
                 transition={{
                     type: 'spring',
                 stiffness: 200,
                 damping: 10,
                   delay:0.6,
                   
                 }}
                 className='text-center sm:px-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, impedit! Placeat quis beatae tempora aliquam!</motion.p>
                {/* image link */}
            <div
            
             className='flex justify-center items-center gap-4'>
            <a href="#" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                    <motion.img 
                     initial={{ opacity: 0, y: 100 }}
                     whileInView={{opacity:1,y:0}}
                     transition={{
                         type: 'spring',
                     stiffness: 200,
                     damping: 10,
                       delay:0.8,
                       
                     }}
                    src={App} alt="" />
                </a>
                <a href="#">
                    <motion.img 
                     initial={{ opacity: 0, y: 100 }}
                     whileInView={{opacity:1,y:0}}
                     transition={{
                         type: 'spring',
                     stiffness: 200,
                     damping: 10,
                       delay:0.9,
                       
                     }}
                    src={Play} alt="" />
                </a>
            </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default AppBanner
