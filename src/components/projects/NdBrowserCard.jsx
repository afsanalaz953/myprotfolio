'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BrowserCard({  imageSrc, alt }) {
  return (
    <article className="flex flex-col max-w-5xl rounded-xl p-6 shadow-lg bg-gradient-to-br from-blue-600 via-slate-900 to-purple-950">
      <h2 className="text-2xl font-bold text-white mb-4"> Issue Tracker</h2>
      <motion.div
//         initial={{ scale: 0 }}     // শুরুতে সম্পূর্ণ ছোট (অদৃশ্য)
//   animate={{ scale: 1 }}     // শেষে পূর্ণ আকারে আসবে
//   transition={{ type: "spring", stiffness: 260, damping: 20 }}
//     className="w-full h-auto" 
animate={{ scale: [0, 1, 0.8, 1] }}  // ছোট → বড় → একটু ছোট → বড় (সাইকেল)
  transition={{ 
    duration: 20,
    repeat: Infinity,        // এটাই 'অসীম' বার চলার সূত্র
    repeatType: "loop"       // 'loop' মানে আবার শুরু থেকে শুরু করবে
  }}
  style={{ transformOrigin: "center" }}
      >

     
      <div className="border border-white/10 bg-white/5 rounded-lg overflow-hidden flex flex-col py-8">
        <div className="h-8 bg-white/10 flex items-center px-3 gap-2 border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <div className="ml-4 flex-grow bg-white/5 h-5 rounded flex items-center px-2">
            {/* <span className="text-xs text-white/50">{title.toLowerCase().replace(/\s/g, '')}</span> */}
            <span className="text-xs text-white/50"> Issue Tracker </span>
          </div>
        </div>
        <div className="bg-surface relative w-full flex-1">
          {/* <Image
            className="w-full object-cover relative h-full"
            src={imageSrc}
            alt= issuetracker
            width={600}
            height={800}
          /> */}
          <motion.img
  src={imageSrc}
  alt={alt}
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: "spring", stiffness: 100, damping: 20 }}
  className="w-full h-auto"
/>
        </div>
      </div>
       </motion.div>
    </article>
  );
}