'use client';

import { motion } from 'framer-motion';
import { FaPython, FaExternalLinkAlt } from 'react-icons/fa';
import { SiExpress, SiJavascript, SiTailwindcss } from 'react-icons/si';
import FlowCardImage from "@/components/projects/FlowCardImage";
import DetailCard from "@/components/projects/DetailCard";

export default function EcoTrackCard() {
  const bullets = [
    'Built a centralized friend directory to store and manage detailed personal profiles.',
    'Developed an interactive stats page with a pie chart to visualize interaction timelines.',
    'Added integrated communication tools for instant calls, video chats, and direct texting',
    'Designed a fully responsive UI using Tailwind CSS for a seamless user experience.',
  ];
  const techs = [
    // { name: 'Python', version: 3.11, icon: <FaPython className="text-yellow-300" /> },
    { name: 'node.js', version: 4, icon: <SiExpress className="text-white" /> },
    { name: 'React', version: 15, icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'TailwindCSS', version: '', icon: <SiTailwindcss className="text-sky-400" /> },
  ];
  const description = [
       'KeenKeeper transforms the way you manage your personal network. It’s more than just a contact list—it is a comprehensive relationship management tool.'
    
  ]
  const title = ["Keen Keeper"]
  const subtitle = ["Connect. Track. Engage."]


  return (
    <motion.div
      className="flex flex-col md:flex-row gap-6"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: 'spring', bounce: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex-1">
        <DetailCard
          title={title}
          subtitle={subtitle}
          description={description}
          bullets={bullets}
          techs={techs}
          link={'https://keep-keeper.vercel.app/'}
          learnlink={'https://keep-keeper.vercel.app/'}
          buttonText="Launch App"
          buttonIcon={<FaExternalLinkAlt />}
        />
      </div>
      <div className="flex-1">
        <FlowCardImage
          title="Keen Keeper"
          imageSrc="/images/Screenshot_1.jpg"
          alt="Keen Keeper"
        />
      </div>
    </motion.div>
  );
}