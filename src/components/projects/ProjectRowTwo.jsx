'use client';

import { motion } from 'framer-motion';
import NdBrowserCard from "@/components/projects/NdBrowserCard";
import DetailCard from "@/components/projects/DetailCard";

export default function SiteEaseCard() {
  const bullets = [
    'Built a centralized dashboard to track, prioritize, and assign issues across multiple GitHub repositories.',
    'Added advanced filtering by labels, milestones, assignees, and custom priority tags for rapid bug triage',
    'Interactive map showing local eco‑friendly initiatives.',
    'Integrated sprint analytics and visual charts to monitor team velocity and resolution trends.'
  ];
  const techs = [
    { name: 'Next.js', version: 5, icon: <span className="text-blue-400">⚡</span> },
    { name: 'Express.js', version: 3, icon: <span className="text-blue-500">🎨</span> },
    { name: 'JavaScript', version: 15, icon: <span className="text-yellow-400">⚡</span> },
    { name: 'TailwindCSS', version: '', icon: <span className="text-sky-400">🌀</span> },
  ];

  return (
    <motion.div
      className="flex flex-col md:flex-row gap-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
     
      <motion.div 
            initial={{ scale: 0 }}     // শুরুতে সম্পূর্ণ ছোট (অদৃশ্য)
  animate={{ scale: 1 }}     // শেষে পূর্ণ আকারে আসবে
  transition={{ type: "spring", stiffness: 260, damping: 20 }}
      
      className="flex-1"
      >
        < NdBrowserCard 
          title=" Issue Tracker "
          imageSrc="/images/Screenshot_2.jpg"
          alt="Issue Tracker"
        />
      </motion.div>

       <div className="flex-1">
        <DetailCard
          title="Issue Tracker"
          subtitle="Turn chaos into clarity. Track, triage, and resolve issues faster than ever."
          description="Streamline your development workflow with a comprehensive, real-time issue management dashboard designed for high-performing teams."
          bullets={bullets}
          techs={techs}
          link={'https://afsanalaz953.github.io/githubissue/'}
           learnlink={'https://afsanalaz953.github.io/githubissue/'}
        />
      </div>
    </motion.div>
  );
}