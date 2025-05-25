'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlineArrowSmRight } from 'react-icons/hi';
import ResponsiveBox from '@/components/core/ResponsiveBox';
import ConstrainedBox from '@/components/core/constrained-box';
import SectionTitle from '@/components/common/SectionTitle';

const HomeSection6 = ({ id }: { id: string }) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm('service_wujfppt', 'template_6wizudt', form.current, '0mkOsld4uolZ3enJe')
      .then(() => {
        alert('Message sent successfully!');
        e.currentTarget.reset();
      })
      .catch(() => {
        alert('Oops! Something went wrong. Please try again.');
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: 'beforeChildren',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <ResponsiveBox
      classNames="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      id={id}
    >
      <div className="absolute inset-0 dark:bg-dot-white/[0.15] bg-dot-white/[0.15]" />

      <ConstrainedBox classNames="px-4 py-16 w-full max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={containerVariants}
          className="w-full"
        >
          <div className="w-full text-center mb-16">
            <SectionTitle>Let&apos;s Connect</SectionTitle>
            <motion.p
              className="text-lg text-[var(--textColorLight)] mt-2"
              variants={itemVariants}
            >
              Contact Me
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 w-full">
            {/* Contact Info - Left Side */}
            <motion.div 
              className="w-full md:w-1/2"
              variants={itemVariants}
            >
              <motion.h3
                className="text-2xl font-semibold mb-8 text-[var(--textColor)]"
                variants={itemVariants}
              >
                Talk to me
              </motion.h3>

              <motion.div 
                className="w-full"
                variants={containerVariants}
              >
                <motion.div
                  className="bg-[var(--container-color)] border border-black/10 rounded-xl p-6 hover:shadow-lg hover:shadow-[var(--primaryColor)]/10 transition-all w-full"
                  whileHover={{ y: -5 }}
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <HiOutlineMail className="text-2xl text-[var(--primaryColor)]" />
                    <h3 className="font-medium text-[var(--textColor)]">Email</h3>
                  </div>
                  <span className="block text-gray-600 dark:text-gray-300 mb-4">
                    rengaraj02k@gmail.com
                  </span>

                  <motion.a
                    href="mailto:rengaraj02k@gmail.com"
                    className="flex items-center gap-1 text-[var(--primaryColor)] hover:text-[var(--primaryColor-dark)] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Write Me
                    <HiOutlineArrowSmRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div 
              className="w-full md:w-1/2"
              variants={formVariants}
            >
              <motion.form
                ref={form}
                onSubmit={sendEmail}
                className="bg-[var(--container-color)] rounded-xl p-8 shadow-lg dark:shadow-black/40 w-full"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.h3
                  className="text-2xl font-semibold mb-8 text-center text-[var(--textColor)]"
                  variants={itemVariants}
                >
                  Send me a message
                </motion.h3>

                <motion.div className="mb-6" variants={itemVariants}>
                  <label className="block mb-2 font-medium text-[var(--textColor)]">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--primaryColor)] bg-transparent transition-all"
                    placeholder="Type your name"
                    required
                  />
                </motion.div>

                <motion.div className="mb-6" variants={itemVariants}>
                  <label className="block mb-2 font-medium text-[var(--textColor)]">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--primaryColor)] bg-transparent transition-all"
                    placeholder="Type your email"
                    required
                  />
                </motion.div>

                <motion.div className="mb-8" variants={itemVariants}>
                  <label className="block mb-2 font-medium text-[var(--textColor)]">Message</label>
                  <textarea
                    name="project"
                    rows={6}
                    className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--primaryColor)] bg-transparent resize-none transition-all"
                    placeholder="Type your message here..."
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-[var(--primaryColor)] text-white font-semibold rounded px-6 py-3 hover:bg-[var(--primaryColor-dark)] transition-colors flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                >
                  Send Message
                  <HiOutlineArrowSmRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>
              </motion.form>
            </motion.div>
          </div>

          <motion.p
            className="text-center mx-auto mt-16 text-2xl font-semibold text-[var(--textColor)]"
            variants={itemVariants}
          >
            I&apos;m <span className="text-[var(--primaryColor)]">available</span> for freelancing.
          </motion.p>
        </motion.div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection6;