// components/SiteEaseCard.tsx
import React from 'react';
import { FaChrome, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';

const RightCard = () => {
  return (
    <div className="container mx-auto card card-compact max-w-2xl rounded-2xl relative overflow-hidden bg-linear-to-br from-blue-600 via-slate-900 to-purple-950  md:py-2 shadow-2xl border border-base-300 transition-all hover:shadow-3xl">
      <div className="card-body mx-2 md:p-2 ">

        {/* Header: Title + "Check out" */}
        <div className="flex items-start justify-between">
          <h2 className="card-title text-4xl md:text-5xl font-bold tracking-tight text-base-content">
            Quarbani Hut
          </h2>
          <a
            href="https://qurbani-animals.vercel.app/"
            className="btn btn-primary btn-outline btn-sm gap-2 transition-all hover:gap-3"
          >
            Check out
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>

        {/* Subtitle */}
        <p className=" text-sm md:text-base mt-1 text-white">
     Where devotion meets digital convenience.
        </p>

        <div className="divider "></div>

        {/* Description */}
        <p className=" text-white text-sm md:text-base leading-relaxed">
         A digital marketplace designed to streamline the Qurbani animal selection
        and purchase process.
        </p>

        {/* Bullet points with "+" prefix */}
        <ul className="space-y-2 text-sm md:text-base text-white">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold text-lg leading-none">+</span>
            <span>Built a full-featured e-commerce platform allowing users to browse a wide inventory of verified sacrificial animals, with real-time availability and high-resolution imagery.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold text-lg leading-none">+</span>
            <span>Developed an intuitive search and filtering system by breed, weight, age, location, and price</span>
          </li>
          {/* <li className="flex items-start gap-2">
            <span className="text-primary font-bold text-lg leading-none">+</span>
            <span>Integrated a robust seller verification and animal health certification module, alongside a public rating and review system</span>
          </li> */}
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold text-lg leading-none">+</span>
            <span>Added a secure booking and payment gateway with deposit protection</span>
          </li>
        </ul>

        <div className="divider my-1"></div>

        {/* Tech stats row */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-xs font-medium text-base-content/50 uppercase tracking-wider">
            Tech
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <span className="badge badge-soft badge-neutral gap-1">
              <span className="text-blue-400">⚡</span> Next.js <span className="ml-1 font-bold">5</span>
            </span>
            <span className="badge badge-soft badge-neutral gap-1">
              <span className="text-blue-500">🎨</span> Express.js <span className="ml-1 font-bold">3</span>
            </span>
            <span className="badge badge-soft badge-neutral gap-1">
              <span className="text-yellow-400">⚡</span> JavaScript <span className="ml-1 font-bold">15</span>
            </span>
            <span className="badge badge-soft badge-primary gap-1">
              <span className="text-sky-400">🌀</span> TailwindCSS
            </span>
          </div>
        </div>

        {/* Optional action buttons (if needed) */}
        <div className="card-actions justify-end mt-4 pt-2 border-t border-base-300/50">
          <button className="btn btn-primary btn-sm gap-2">
            <FaChrome />
            Install Extension
          </button>
          {/* <button className="btn text-white btn-ghost btn-sm">Learn More →</button> */}
          <Link href="https://qurbani-animals.vercel.app/">
  <button className="btn text-white btn-ghost btn-sm">
    Learn More →
  </button>
</Link>
        </div>
      </div>
    </div>
  );
};

export default RightCard;