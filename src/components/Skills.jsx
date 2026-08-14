'use client'

// src/components/Skills.jsx
import { motion } from "framer-motion";
import {
  FaJs,
  FaPhp,
  FaPython,
  FaNodeJs,
  FaReact,
  FaLaravel,
  FaCube,
} from "react-icons/fa";
import {
  SiTypescript,
  SiSolidity,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiMaterialdesign,
  SiFramer,
} from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";

// Languages & Frameworks (first row)
const langSkills = [
  { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  // PHP, Solidity, Python are commented out – keep as is
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "React.js", icon: FaReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Laravel", icon: FaLaravel, color: "#ff2d20" },
];

// UI & Animation Libraries (second row)
const uiSkills = [
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Material UI", icon: SiMaterialdesign, color: "#007fff" },
  { name: "Shadcn", icon: FaCube, color: "#000000" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055ff" },
  { name: "Aceternity UI", icon: MdOutlineDesignServices, color: "#7c3aed" },
];

// Helper: double the array for seamless marquee
const doubleArray = (arr) => [...arr, ...arr, ...arr];

export default function AboutSection() {
  const doubledLang = doubleArray(langSkills);
  const doubledUi = doubleArray(uiSkills);

  return (
    <section 
      id="skills"
    className=" container ms-auto rounded-2xl relative w-full overflow-hidden bg-linear-to-br from-blue-600 via-slate-900 to-purple-950 py-10 md:py-10">
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block rounded-full bg-purple-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-purple-400 border border-purple-500/20 mb-4">
              Expertise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            My{" "}
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Skillset
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-base text-slate-400 max-w-2xl mx-auto"
          >
            Technologies and tools I work with to build exceptional digital
            experiences.
          </motion.p>
        </div>

        {/* Two rows of marquees */}
        <div className="space-y-6">
          {/* Row 1: Languages & Frameworks */}
          <MarqueeRow skills={doubledLang} label="Languages & Frameworks" />

          {/* Row 2: UI & Animation Libraries */}
          <MarqueeRow skills={doubledUi} label="UI & Animation Libraries" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-slate-500">
            Hover over any skill to see it come alive ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Reusable marquee row component
function MarqueeRow({ skills, label }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm py-4 shadow-xl shadow-purple-500/5">
      {/* Optional label (hidden on small screens, visible on hover) */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden md:block">
        <span className="text-xs font-medium text-purple-400/60 bg-slate-900/80 px-3 py-1 rounded-full border border-purple-500/20 backdrop-blur-sm">
          {label}
        </span>
      </div>

      {/* Gradient fades */}
      <div className="absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-6 md:gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              whileHover={{
                y: [0, -14, 0, -8, 0],
                scale: 1.05,
                transition: {
                  duration: 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="group relative flex min-w-[100px] cursor-pointer flex-col items-center rounded-2xl bg-white/5 px-4 py-3 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20 border border-white/5 hover:border-purple-500/30"
              style={{ touchAction: "none" }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-purple-500/5 group-hover:via-purple-500/5 group-hover:to-purple-500/5" />

              <div
                className="relative z-10 text-2xl transition-transform duration-300 group-hover:scale-110 md:text-3xl"
                style={{ color: skill.color }}
              >
                <skill.icon />
              </div>

              <span className="relative z-10 mt-2 text-center text-xs font-medium text-slate-300 transition-colors duration-300 group-hover:text-white md:text-sm">
                {skill.name}
              </span>

              <span
                className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full transition-all duration-500 group-hover:w-3/4"
                style={{ backgroundColor: skill.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}