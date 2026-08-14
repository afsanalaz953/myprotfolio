// pages/about.js or components/About.js
'use client';


import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
    CodeBracketIcon,
    UserIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    ArrowDownTrayIcon,
    SparklesIcon,
    DevicePhoneMobileIcon,
    ServerIcon,
    PaintBrushIcon,
    CpuChipIcon,
} from '@heroicons/react/24/outline';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function About() {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const [isHovered, setIsHovered] = useState(false);
    const [particles, setParticles] = useState([]);

    // Generate random particle data only on client mount
    useEffect(() => {
        const newParticles = Array.from({ length: 6 }, () => ({
            initialX: Math.random() * 100 - 50,
            initialY: Math.random() * 100 - 50,
            animateX: Math.random() * 200 - 100,
            animateY: Math.random() * 200 - 100,
            top: 10 + Math.random() * 80,
            left: 10 + Math.random() * 80,
            duration: 4 + Math.random() * 4,
            delay: Math.random() * 3,
        }));
        setParticles(newParticles);
    }, []);

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const skills = [
        { name: 'React', icon: CodeBracketIcon, color: 'from-cyan-400 to-blue-500' },
        { name: 'Node', icon: ServerIcon, color: 'from-green-400 to-emerald-500' },
        { name: 'SEO', icon: PaintBrushIcon, color: 'from-purple-400 to-pink-500' },
        { name: 'Full Stack', icon: CpuChipIcon, color: 'from-orange-400 to-red-500' },
    ];

    const experiences = [
        {
            title: 'Full Stack Developer Intern',
            company: 'Twist Digital',
            date: 'Since March 2025',
            icon: BriefcaseIcon,
        },
        {
            title: 'SEO Specialist',
            company: 'Fiverr',
            date: 'Freelance',
            icon: PaintBrushIcon,
        },
    ];

    return (
        <section
            ref={ref}
            className=" rounded-2xl container ms-auto relative min-h-screen w-full overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50/30 py-16 md:py-24 lg:py-32"
            id="about"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-200/20 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/10 blur-3xl" />
                {/* Floating particles - rendered only after client-side generation */}
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-2 w-2 rounded-full bg-blue-400/20"
                        initial={{
                            x: p.initialX,
                            y: p.initialY,
                            scale: 0,
                        }}
                        animate={{
                            x: p.animateX,
                            y: p.animateY,
                            scale: [0, 1, 0],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                            ease: 'easeInOut',
                        }}
                        style={{
                            top: `${p.top}%`,
                            left: `${p.left}%`,
                        }}
                    />
                ))}
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="container mx-auto max-w-6xl px-4 md:px-6"
            >
                {/* Section header */}
                <motion.div
                    variants={itemVariants}
                    className="mb-12 flex items-center gap-3 md:mb-16"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/25">
                        <UserIcon className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-800 md:text-3xl lg:text-4xl">
                        About <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
                    </h2>
                    <div className="ml-auto hidden h-px flex-1 bg-linear-to-r from-slate-200 to-transparent md:block" />
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                    {/* Left column - Avatar & Bio */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-5 xl:col-span-4"
                    >
                        <div className="relative">
                            {/* Avatar with glow ring */}
                            <div className="relative mx-auto max-w-[280px] md:max-w-[320px]">
                                <div className="absolute -inset-1 rounded-full bg-linear-to-br from-blue-400 via-indigo-400 to-purple-400 opacity-70 blur-xl transition-all duration-500 group-hover:opacity-100" />
                                <div className="relative aspect-square w-full overflow-hidden rounded-full border-4 border-white shadow-2xl shadow-blue-500/20">
                                    <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-slate-100 to-blue-100">
                                        {/* <span className="text-7xl font-bold text-slate-700 md:text-8xl">
                                            AZ
                                        </span> */}
                                        <Image src="/images/afsana_laz.jpg" alt="Afsana laz" fill className="object-cover" />
                                    </div>
                                </div>
                                {/* Decorative ring */}
                                <motion.div
                                    className="absolute -inset-3 rounded-full border-2 border-blue-400/20"
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />
                            </div>

                            {/* Name & title */}
                            <div className="mt-6 text-center">
                                <motion.h3
                                    variants={itemVariants}
                                    className="text-2xl font-bold text-slate-800 md:text-3xl"
                                >
                                    Afsana laz
                                </motion.h3>
                                <motion.p
                                    variants={itemVariants}
                                    className="mt-1 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-base font-medium text-transparent md:text-lg"
                                >
                                    Full Stack Developer who speaks SEO
                                </motion.p>
                            </div>

                            {/* Skills badges */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-6 flex flex-wrap justify-center gap-2"
                            >
                                {skills.map((skill, idx) => {
                                    const Icon = skill.icon;
                                    return (
                                        <motion.span
                                            key={idx}
                                            className="group flex items-center gap-1.5 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Icon className="h-4 w-4 text-blue-600 transition-colors group-hover:text-indigo-600" />
                                            {skill.name}
                                        </motion.span>
                                    );
                                })}
                            </motion.div>

                            {/* Download button */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-6 flex justify-center"
                            >
                                <motion.a
                                    href="/resume.pdf"
                                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 md:px-8 md:py-3.5 md:text-base"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <ArrowDownTrayIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5 md:h-5 md:w-5" />
                                        Download Resume
                                    </span>
                                    <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-indigo-600 to-purple-600 transition-transform duration-500 group-hover:translate-x-0" />
                                    {isHovered && (
                                        <motion.span
                                            className="absolute inset-0 bg-white/10"
                                            initial={{ x: '-100%' }}
                                            animate={{ x: '100%' }}
                                            transition={{
                                                duration: 0.8,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                        />
                                    )}
                                </motion.a>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right column - Bio, Education, Experience */}
                    <div className="lg:col-span-7 xl:col-span-8">
                        <motion.div
                            variants={itemVariants}
                            className="space-y-8"
                        >
                            {/* Bio */}
                            <div className="rounded-2xl bg-white/80 p-6 shadow-sm shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md md:p-8">
                                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
                                    <SparklesIcon className="h-4 w-4" />
                                    Bio
                                </div>
                                <p className="mt-3 leading-relaxed text-slate-600 md:text-lg">
                                   Full Stack Developer with a relentless drive for architecting robust, 
                                   scalable web ecosystems. Specializing in end-to-end engineering—from intuitive, 
                                   responsive front-end interfaces (React/Next.js) to resilient, high-throughput back-end infrastructures (Node.js, Express.js)—I combine modern framework expertise with cloud-native deployment strategies to build user-centric applications that perform flawlessly under load. Complementing this, I layer in technical SEO as a strategic optimization tool, ensuring every system I ship is not only functionally bulletproof but also effortlessly discoverable.
                                </p>
                            </div>
                            {/* div for flex */}
<div className='flex  flex-2 gap-6'>

                            {/* Education */}
                            <motion.div
    variants={itemVariants}
    className="rounded-2xl bg-linear-to-br p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:from-blue-100 hover:to-indigo-100 md:p-8"
>
                                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
                                    <AcademicCapIcon className="h-4 w-4" />
                                    Education
                                </div>
                                <div className="mt-4 space-y-3">
                                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            <h4 className="text-base font-semibold text-slate-800 md:text-lg">
                                                MSc in Botany
                                            </h4>
                                            <p className="text-sm text-slate-500">
                                                University of Dhaka
                                            </p>
                                        </div>
                                        {/* <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                                            2022 - Present
                                        </span> */}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                                            🎯 Dean&apos;s List (2023)
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Experience */}
                            <motion.div
                                variants={itemVariants}
                                className="rounded-2xl bg-linear-to-br p-6 shadow-sm shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:from-blue-100 hover:to-indigo-300 hover:shadow-md md:p-8"
                            >
                                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
                                    <BriefcaseIcon className="h-4 w-4" />
                                    Experience
                                </div>
                                <div className="mt-4 space-y-4">
                                    {experiences.map((exp, idx) => {
                                        const Icon = exp.icon;
                                        return (
                                            <motion.div
                                                key={idx}
                                                className="group flex items-start gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-slate-50/80"
                                                whileHover={{ x: 4 }}
                                            >
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-blue-50 to-indigo-50 text-blue-600 transition-colors group-hover:from-blue-100 group-hover:to-indigo-100">
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-base font-semibold text-slate-800 md:text-lg">
                                                        {exp.title}
                                                    </h4>
                                                    <p className="text-sm text-slate-500">{exp.company}</p>
                                                    <span className="mt-1 inline-block text-xs font-medium text-slate-400">
                                                        {exp.date}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>

</div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}