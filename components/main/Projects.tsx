"use client";
import React from "react";

import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Card from "../sub/card";
import { TypeAnimation } from "react-type-animation";
const Projects = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >


      

      <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 "
        >
          <h1 className="text-[40px] z-[20] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
         
        </motion.div>


      



      <div className="grid grid-cols-3 gap-14 xl:grid-cols-2 xl:gap-14 2xl:grid-cols-4 2xl:gap-14 md:grid-cols-2 2xl:gap-12  sm:grid-cols-1 2xl:gap-14 h-full z-[20] w-full flex flex-col md:flex-row gap-10 px-10">
        
        


        

        
        

        <motion.div
          variants={slideInFromLeft(0.9)}
          className="text-lg text-gray-400 my-5 "
        >
         <div><Card
          src="/proj/social.jpeg"
          title="Social media application"
          link1="https://github.com/rengarajks/instagram-clone-django-python"
          description="✓ Tech. Stack : Django 
          ✓ It is a fully functional socialmedia application. 
         ✓ In this User can interact with other users.They can Follow,Message,Post,Comment and etc"
        /></div>
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="text-lg text-gray-400 my-5 "
        >
         <div><Card
          
          src="/proj/videoplat.jpeg"
          title="
          Videos platform fullstack application"
          link1="https://github.com/rengarajks/Videos-platform-fullstack-application"
          description="✓ Tech. Stack : ReactJS,Tailwind CSS,Django,Django REST Framework,python,sql. 
          ✓ It is a video streaming platform application.
          ✓ It works two different manner for User and Creator."
        /></div>

        </motion.div>





        <motion.div
          variants={slideInFromRight(0.8)}
          className="text-lg text-gray-400 my-5 "
        >
         <div><Card
          
          src="/proj/ins.png"
          title="
          Instagram clone"
          link1="https://github.com/rengarajks/Instagram-clone-reactJS"
          description="✓ Tech. Stack : ReactJS,CSS 
          ✓ It is a clone of Instagram.
          ✓ Basic instagram layout only"
        /></div>

        </motion.div>


        <motion.div
          variants={slideInFromRight(0.8)}
          className="text-lg text-gray-400 my-5 "
        >
         <div><Card
          
          src="/proj/amaz.jpg"
          title="
          Amazon clone"
          link1="https://github.com/rengarajks/Amazon-clone-ReactJS"
          description="✓ Tech. Stack : ReactJS,Tailwind
          ✓ It is a clone of Amazon.
          ✓ Users can add the product to cart and buy."
        /></div>

        </motion.div>




        


        
        <motion.div
          variants={slideInFromLeft(0.9)}
          className="text-lg text-gray-400 my-5 "
        >
         <div>
          <Card  src="/proj/enror.jpeg"
          title="
          College admission automated app using flutter"
          link1="https://github.com/rengarajks/college-admission-automated-application-using-Flutter"
          description="✓ Tech. Stack : Flutter,Dart,Firebase. 
          ✓ It is a fully automated college admission app. 
          ✓ It works two different manner for Student & for Colleges."/>
        </div>

        </motion.div>
        

        <motion.div
          variants={slideInFromRight(0.8)}
          className="text-lg text-gray-400 my-5 "
        >
         <div><Card
          src="/proj/ecom.jpeg"
          title="E-commerce website"
          link1="https://github.com/rengarajks/Modern-E-Commerce-site-React"
          description="✓ Tech. Stack : ReactJS,Tailwind css. 
          ✓ It is a e-commerce website. 
          ✓ It works two different manner for Customers & for Seller."
        /></div>
        </motion.div>


        <motion.div
          variants={slideInFromRight(0.8)}
          className="text-lg text-gray-400 my-5 "
        >
         <div><Card
          src="/proj/snake.jpg"
          title="Snake game in Java"
          link1="https://github.com/rengarajks/Snake-game-in-java"
          description="✓ Tech. Stack : Java. 
          ✓ It is a Snake game in Java. 
          ✓ Player can earn points by eat food"
          
        /></div>
        </motion.div>


        <motion.div
          variants={slideInFromRight(0.8)}
          className="text-lg text-gray-400 my-5 "
        >
         <div><Card
          src="/proj/ping.png"
          title="Ping Pong in python"
          link1="https://github.com/rengarajks/ping-pong-game-in-python"
          description="✓ Tech. Stack : Python. 
          ✓ It is a Ping Pong game written in python. 
          ✓ It works two different manner for Two different players"

        /></div>
        </motion.div>
        
        

        


        

       
      </div>

      

    

      
    </div>
    </motion.div>
  );
};

export default Projects;
