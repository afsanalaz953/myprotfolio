"use client"
import React from 'react';
import logo from "@/assets/seoexpert.jpg"
import Image from "next/image"
import { motion } from 'framer-motion';

import Link from "next/link"
import { usePathname } from 'next/navigation';


const Navbar = () => {

    const pathname = usePathname ();
    console.log (pathname, "pathname");

    const isActive = (href) =>{
       return href === pathname;
    };

     // Animation variants for each menu item
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Projects', path: '/#projects' },
  ];
    
    return (
        <div className='rounded-2xl flex flex-col-3 justify-between container mx-auto my-5 shadow-md p-4'>
            <div className='flex gap-3'>
            <Image src={logo}
      alt="afsana laz"
      width={50}
      height={50} />
            <p className='font-bold text-lg text-blue-700'>Afsana Laz</p> 
            </div>
            
              

                  <ul className="flex gap-3 mx-10">
      {navLinks.map(({ name, path }, index) => (
        <motion.li
          key={path}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <Link
            href={path}
            className={`${
              isActive(path)
                ? 'border-b-4 border-b-purple-600'
                : 'border-b-4 border-b-transparent'
            } font-medium transition-all duration-300`}
          >
            {/* Gradient text from blue to purple */}
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-blue-500 transition-all duration-300">
              {name}
            </span>
          </Link>
        </motion.li>
      ))}
    </ul>
 
        </div>
    );
};

export default Navbar;