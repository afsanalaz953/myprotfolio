// ============================================
// FILE: src/components/Header.jsx
// ============================================
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import Image from 'next/image';

const Header = () => {
const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

 const scrollToProjects = () => {
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };



    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 py-20">
                <div className="flex flex-col items-center text-center">
                    {/* Avatar / Image placeholder */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, type: 'spring' }}
                        className="mb-8"
                    >
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                            <div className="w-full h-full rounded-full bg-base-100 ">
                                <Image 
                                src="/images/afsana-laz-web-developer.png" 
                                alt="Afsana laz" 
                               width={200}
                               height={200}
                           
                              
                                className="object-cover" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="badge badge-primary badge-lg mb-4 gap-2"
                    >
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Available for work
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4"
                    >
                        Hi, I&apos;m{' '}
                        <span className="gradient-text">Afsana Laz</span>
                    </motion.h1>
                       
                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-base-content/70 max-w-2xl mb-6"
                    >
                        Full Stack Developer &amp; SEO Specialist
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-base-content/60 max-w-xl mb-8"
                    >
                        I craft beautiful, responsive, and user-friendly web
                        experiences with modern technologies and optimization
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-4 mb-10"
                    >
                        <Link href="#contact" onClick={scrollToContact}  className="btn btn-primary btn-lg">
                            Let&apos;s Talk
                        </Link>
                        <Link href="#projects" onClick={scrollToProjects} className="btn btn-outline btn-lg">
                            View My Work
                        </Link>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex items-center gap-4"
                    >
                        <Link
                            href="https://github.com/afsanalaz953"
                            target="_blank"
                            className="btn btn-ghost btn-circle btn-lg text-xl hover:text-primary transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/afsana-laz/"
                            target="_blank"
                            className="btn btn-ghost btn-circle btn-lg text-xl hover:text-primary transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </Link>
                        {/* <Link
                            href="https://twitter.com"
                            target="_blank"
                            className="btn btn-ghost btn-circle btn-lg text-xl hover:text-primary transition-colors"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </Link> */}
                    </motion.div>

                    {/* Scroll down indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        <Link
                            href="#about"
                            className="btn btn-ghost btn-circle animate-bounce"
                            aria-label="Scroll down"
                        >
                            <FaArrowDown className="text-xl" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Header;