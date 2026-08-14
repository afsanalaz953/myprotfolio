'use client'

import React from 'react';
import { motion } from 'framer-motion';
import RightCard from "@/components/projects/RightCard"
import LeftCard from "@/components/projects/LeftCard"
import ProjectRowTwo from '@/components/projects/ProjectRowTwo';

import FlowCardThree from '@/components/projects/FlowCardThree';


const Projects = () => {
  return (
    <div
      id="projects"
    className='container bg-purple-100 ms-auto rounded-2xl relative w-full overflow-hidden 
     py-4 md:py-4 '>
      {/* div-1 */}
      <div className='project1 flex flex-col md:flex-row   gap-6 '>
 <motion.div
       initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
      
      >
        <RightCard />
      </motion.div>

       <motion.div
      
       >
        <LeftCard />
      </motion.div>

      </div>
  {/* project1 end */}
  {/* project2 start */}

 <div className="max-w-7xl mx-auto px-4 py-10 space-y-16  flex flex-col md:flex-row   gap-6">
      < ProjectRowTwo/>
    
    </div>
  {/* project2 end */}
    {/* project3 start */}
    <div>
  {/* <FlowCard/> */}
      <FlowCardThree />

    </div>
{/* project3 end */}
    </div>
  );
};

export default Projects;