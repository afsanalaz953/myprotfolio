'use client';

import { FaExternalLinkAlt, FaChrome } from 'react-icons/fa';
import Link from 'next/link';
export default function DetailCard({
  title,
  subtitle,
  description,
  // bullets,
  techs,
  buttonText = 'Install Extension',
  buttonIcon = <FaChrome />,
  link = '#',
  learnlink = '#',
}) {
 const bullets = [
    'Built a centralized friend directory to store and manage detailed personal profiles.',
    'Developed an interactive stats page with a pie chart to visualize interaction timelines.',
    'Added integrated communication tools for instant calls, video chats, and direct texting',
    // 'Designed a fully responsive UI using Tailwind CSS for a seamless user experience.',
  ];

  return (
    <div className="container mx-auto card card-compact max-w-2xl rounded-2xl relative overflow-hidden bg-gradient-to-br from-blue-600 via-slate-900 to-purple-950 md:py-2 shadow-2xl border border-base-300 transition-all hover:shadow-3xl">
      <div className="card-body mx-2 md:p-2">
        <div className="flex items-start justify-between">
          <h2 className="card-title text-5xl md:text-2xl font-bold tracking-tight text-black">
          {/* GitHub Issues Tracker */}
          {title}
          </h2>
          <a
            href={link}
            className="btn btn-primary btn-outline btn-sm gap-2 transition-all hover:gap-3 text-white border border-white/30 hover:border-white px-3 py-1 rounded-lg text-sm flex items-center"
          >
            Check out
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
        <p className="text-sm md:text-base mt-1 text-white/80">{subtitle} </p>
         {/* Turn chaos into clarity. Track, triage, and resolve issues faster than ever */}
        <div className="divider border-t border-white/10 my-2" />
        <p className="text-white text-sm md:text-base leading-relaxed">{description}</p>
        <ul className="space-y-2 text-sm md:text-base text-white">
          {bullets.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-blue-400 font-bold text-lg leading-none">+</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="divider border-t border-white/10 my-1" />
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-xs font-medium text-white/50 uppercase tracking-wider">Tech</span>
          <div className="flex flex-wrap items-center gap-3">
            {techs.map((tech, idx) => (
              <span
                key={idx}
                className="badge badge-soft badge-neutral gap-1 bg-white/10 text-white px-3 py-1 rounded-full text-xs flex items-center"
              >
                {tech.icon}
                {tech.name} <span className="ml-1 font-bold">{tech.version}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="card-actions justify-end mt-4 pt-2 border-t border-white/10">
          <button className="btn btn-primary btn-sm gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm flex items-center">
            {buttonIcon}
            {buttonText}
          </button>
          {/* <button className="btn text-white btn-ghost btn-sm text-white/70 hover:text-white px-4 py-2 rounded-lg text-sm">
            Learn More →
          </button> */}
{/*           
// Wrap Link around button or use as a child */}
<Link href={learnlink} className="btn text-white btn-ghost btn-sm text-white/70 hover:text-white px-4 py-2 rounded-lg text-sm">
  Learn More →
</Link>
        </div>
      </div>
    </div>
  );
}