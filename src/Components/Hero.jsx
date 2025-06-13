import React, { useState } from 'react';
import BgImage from '../assets/bg2.jpg';
import Starbugs from '../assets/starbugs1-removebg-preview.png';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <main style={bgImage}>
        <section className="relative min-h-[750px] w-full left-20 ">
          <div className="container">
            {/* Navbar Section */}
            <Navbar sidebar={sidebar} setSidebar={setSidebar} />

            {/* Hero Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
              {/* Text Content Section */}
              <div className="text-amber-200 mt-[100px] md:mt-0 p-4 space-y-28">
                <motion.h1
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 10,
                    delay: 1,
                  }}
                  className="text-7xl font-bold leading-tight ml-6"
                >
                  Moon Bugs
                </motion.h1>
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      damping: 10,
                      delay: 1.2,
                    }}
                    className="relative z-10 space-y-4 leading-loose ml-45"
                  >
                    <div>
                      <h1 className="text-2xl">Black Lifestyle Lovers</h1>
                      <h1 className="text-sm opacity-55">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eius repellat voluptatum nobis
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum amet quidem vel saepe placeat mollitia molestias odit perspiciatis aperiam. Hic. dolorum ratione impedit nam neque.
                      </h1>
                    </div>
                    <div className="absolute -top-1 ml-30 z-[-1] w-[250px] h-[160px] bg-gray-950"></div>
                  </motion.div>
                </div>
              </div>

              {/* Hero Image Section */}
              <motion.div className="relative flex justify-center items-center">
              <motion.img
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    type: 'spring',
    stiffness: 100,
    damping: 10,
    delay: 0.4,
  }}
  src={Starbugs}
  alt=""
  className="relative z-40 h-[400px] md:h-[700px] max-w-[700px] ml-65 img-shadow"
  // <-- Add shadow class here
/>

                {/* Orange Circle Section */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                    delay: 0.8,
                  }}
                  className="h-[180px] w-[180px] absolute top-45 ml-130 border-amber-300 border-[20px] z-10 rounded-full"
                ></motion.div>

                {/* Big Text Section */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                    delay: 1.5,
                  }}
                  className="absolute -top-0 left-[400px] z-[1] ml-110"
                >
                  <h1 className="text-[110px] scale-150 font-bold text-gray-950 leading-none">MOON BUGS</h1>
                </motion.div>
              </motion.div>

              {/* Third Div Section */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="text-amber-200 mt-[100px] w-170 md:mt-90 p-6 space-y-28"
              >

                <div className="relative">
                  <div className="relative z-10 space-y-4 leading-loose ml-55">
                    <h1 className="text-2xl">Black Lifestyle Lovers</h1>
                    <h1 className="text-sm opacity-55">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eius repellat voluptatum nobis
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum amet quidem vel saepe placeat mollitia molestias odit perspiciatis aperiam. Hic. dolorum ratione impedit nam neque.
                    </h1>
                  </div>

                  <div className="absolute -top-1 ml-94 w-[250px] h-[160px] bg-gray-950"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Sidebar Menu Section */}
          {sidebar && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="absolute top-0 right-0 mr-20 w-[210px] h-full bg-gradient-to-b from-amber-400 to-amber-600 backdrop-blur-sm z-[1]"
            >
              <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-6 text-white">
                  {/* Line */}
                  <div className="w-[1px] h-[70px] bg-emerald-50"></div>

                  {/* Social Icons */}
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaFacebookF className="text-2xl" />
                  </div>
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaTwitter className="text-2xl" />
                  </div>
                  <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                    <FaInstagram className="text-2xl" />
                  </div>
                  <div className="w-[1px] h-[70px] bg-emerald-50"></div>
                </div>
              </div>
            </motion.div>
          )}
        </section>
      </main>
    </>
  );
};

export default Hero;

