
'use client';

import { motion } from 'framer-motion';

import BrowserCard from '@/components/projects/BrowserCard';
// import OverviewCard from '@/components/projects/OverviewCard';
// import TechStack from '@/components/projects/TechStack';
// import BottomNav from '@/components/projects/BottomNav';

export default function LeftCard() {
  return (
    <>
    

      <main className="grow px-4 flex flex-col rounded-2xl max-w-3xl 
      min-h-screen py-4 mx-auto ">
        {/* Fade‑in on scroll using whileInView */}
        {/* div-1 */}
     
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex-1 "
       
       >
          <BrowserCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
        >
      
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
        
        </motion.div>
      
      </main>

     
    </>
  );
}