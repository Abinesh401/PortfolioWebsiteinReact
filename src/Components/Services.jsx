import React from 'react';
import { motion } from 'framer-motion';
import Coffe1 from '../assets/starbugs1-removebg-preview.png';
import Coffe2 from '../assets/starbugs1-removebg-preview.png';
import Coffe3 from '../assets/starbugs1-removebg-preview.png';

const servicesData = [
  {
    id: 1,
    image: Coffe1,
    title: "Black coffee",
    subtitle: "Ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 2,
    image: Coffe2,
    title: "Hot coffee",
    subtitle: "Ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 3,
    image: Coffe3,
    title: "Cold coffee",
    subtitle: "Ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    }
  }
};

const Services = () => {
  return (
    <div className="container ml-40 mt-20 space-y-4">
      {/* Header section */}
      <div className="text-center max-w-lg mx-auto space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="text-3xl font-bold text-gray-600"
        >
          Fresh and <span className="text-amber-300">Tasty coffees</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className="text-sm opacity-50"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error alias, tempore
          facere unde odio praesentium sapiente dicta ab, quidem dignissimos
          dolorem accusantium.
        </motion.p>
      </div>

      {/* Card section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <img
              src={service.image}
              alt={service.title}
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="text-center p-4 space-y-6">
              <h1 className="text-2xl font-bold text-amber-300">{service.title}</h1>
              <p className="text-gray-700">{service.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;

