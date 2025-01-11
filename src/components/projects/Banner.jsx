import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Banner = ({ imageData }) => {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(1);
  
    const handlePrevious = () => {
      setDirection(-1);
      setActive((prevIndex) => (prevIndex === 0 ? imageData.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setDirection(1);
      setActive((prevIndex) => (prevIndex === imageData.length - 1 ? 0 : prevIndex + 1));
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        handleNext();
      }, 5000); 
      return () => clearInterval(interval);
    }, [handleNext]);
  
    return (
      <div className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute h-[50vh] w-full flex items-center justify-between z-10">
          <div
            onClick={handlePrevious}
            className="px-1 pr-2 rounded-r shadow-md py-4 bg-white hover:bg-gray-100 cursor-pointer"
          >
            <FaAngleLeft size="2rem" />
          </div>
          <div
            onClick={handleNext}
            className="px-1 pl-2 rounded-l shadow-md py-4 bg-white hover:bg-gray-100 cursor-pointer"
          >
            <FaAngleRight size="2rem" />
          </div>
        </div>
  
        <motion.div
          key={`current-${active}`}
          initial={{ x: 0 }}
          animate={{ x: direction === 1 ? '-100%' : '100%' }}
          exit={{ x: direction === 1 ? '100%' : '-100%' }}
          transition={{ type: 'spring', stiffness: 700, damping: 100 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <img
            src={imageData[active]}
            alt={`Image ${active}`}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    );
  };
  
  export default Banner;
  