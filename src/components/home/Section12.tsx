'use client'
import React from "react";
import { motion } from "framer-motion";
import {
    HiOutlineDesktopComputer,
    HiOutlineTerminal,
    HiOutlineSparkles,
  } from "react-icons/hi";

const Info = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-[var(--container-color)] border border-black/10 rounded-xl text-center p-4">
        <HiOutlineDesktopComputer className="text-2xl text-[var(--title-color)] mb-2 mx-auto" />
        <h3 className="text-sm font-medium">Experience</h3>
        <span className="text-xs text-gray-500">0+ Years</span>
      </div>

      <div className="bg-[var(--container-color)] border border-black/10 rounded-xl text-center p-4">
        <HiOutlineTerminal className="text-2xl text-[var(--title-color)] mb-2 mx-auto" />
        <h3 className="text-sm font-medium">Completed</h3>
        <span className="text-xs text-gray-500">12+ Projects</span>
      </div>

      <div className="bg-[var(--container-color)] border border-black/10 rounded-xl text-center p-4">
        <HiOutlineSparkles className="text-2xl text-[var(--title-color)] mb-2 mx-auto" />
        <h3 className="text-sm font-medium">Support</h3>
        <span className="text-xs text-gray-500">Online 24/7</span>
      </div>
    </div>
  );
};

const Section12 = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full relative overflow-hidden rounded-md flex items-center justify-center"
    >
      <div className="glow-orb" />
      <div className="comet-tail" />

      <div className="px-4 py-8 pt-16 z-20 flex flex-col items-center justify-center text-center max-w-5xl w-full">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--textColor)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="mt-8 grid md:grid-cols-2 items-center gap-10"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.3 }}
          variants={containerVariant}
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative w-[300px] md:w-[350px] mx-auto rounded-2xl"
            whileHover={{
              boxShadow: "0 0 15px 4px rgba(255, 50, 50, 0.9)",
              borderColor: "rgba(255, 50, 50, 0.8)"
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src='/prof2.jpg'
              alt="About"
              className="w-full rounded-2xl border-2 border-transparent"
            />
            
            {/* Static border that becomes visible on hover */}
            <div className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_15px_4px_rgba(255,50,50,0.9)]" />
          </motion.div>

          <motion.div className="text-left md:text-start space-y-4" variants={fadeVariant}>
            <Info />
            <motion.p
              className="text-[var(--textColorLight)] text-base font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              I'm a full-stack developer with expertise in AI, passionate about
              crafting intelligent, scalable applications. From sleek front-end
              designs to robust back-end architectures, I build solutions that
              drive impact and enhance user experiences.
            </motion.p>

            <motion.a
              download
              href=''
              className="app__outlined_btn inline-flex items-center justify-center rounded-lg px-5 py-3 border border-[var(--primaryColor)] text-[var(--primaryColor)] hover:bg-[var(--primaryColor)] hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Download CV
              <svg
                className="ml-2 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeZoom = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const fadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default Section12;