import { motion } from 'framer-motion';
import Image from "next/image";

export default function BrowserCard() {
  return (
    <article className="flex flex-col max-w-5xl  rounded-xl p-14 shadow-lg bg-linear-to-br from-blue-600 via-slate-900 to-purple-950 ">
      <h2 className="text-2xl font-bold text-white mb-4">Quarbani Hut</h2>
{/* bg-[#171717] border border-[#262626]  */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className=" border border-[#262626] bg-[#1a1a1a] bg-linear-to-br from-blue-600 via-slate-900 to-purple-950  rounded-lg  overflow-hidden flex flex-col">
          {/* Browser chrome */}
          <div className="h-8 bg-[#2a2a2a] flex items-center px-3 gap-2 border-b border-[#262626]">
            <div className="w-3 h-3 rounded-full bg-error"></div>
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="ml-4 flex-grow bg-[#171717] h-5 rounded flex items-center px-2">
              <span className="text-xs text-on-surface-variant opacity-50 text-slate-300">quarbani hut</span>
            </div>
          </div>
          {/* Image */}
          <div className="bg-surface relative w-full flex-1 mb-8">
            <Image
              className=" inset-0 w-full h-full object-cover "
              // src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo5azWnR0A8_X0DG6A7KV7j3obCfuD7-OQvHIYwwkRnr5uSLnZfaqSAtBGYReqNGTp8EwDpHiVaI3Do5AFKRo8o13NPE8D3dJkUIXA5gLybWYb0OEW_AicoX-DK3_jiMhgOFhFYipRaybnZaBZ2DH9LJoUkDMKB0mJaMav9Mo7kj03f8wkHUQ4M-lm01qUtfpF5jlhf-tuO7Gb6RnhwcNt2QXiZPXnRiiXFSU4tVAkwHYaWD_cCLoaqdYaveGgNqVg-Q"
              src="/images/projectpic.jpg"
              alt="SiteEase preview"
              width={500}
              height={800}
              // fill
            />
          </div>
        </div>
      </motion.div>
    </article>
  );
}