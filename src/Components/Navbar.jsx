import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion } from 'framer-motion';

const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <nav className="absolute top-0 left-20 w-full z-20 pt-20 text-white">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-3xl font-semibold uppercase"
          >
            Coders <span className="text-amber-300">Coffe.</span>
          </motion.h1>

          {/* Hamburger Menu */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,   
              damping: 10,
              delay: 0.2,
            }}
            onClick={() => setSidebar(!sidebar)}    
          >
            <GiHamburgerMenu className="text-3xl cursor-pointer -mr-30" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

