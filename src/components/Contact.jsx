"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
  FaUser,
  FaComment,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  // Animation variants
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const fadeInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
  
    <div 
      id="contact"
    className="container ms-auto rounded-2xl min-h-screen bg-linear-to-br from-base-200 via-base-100 to-base-200 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-6xl"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Say Hi, Don&apos;t Be Shy
          </h1>
          <p className="text-base-content/70 mt-3 text-lg max-w-2xl mx-auto">
            I&apos;m always open to new opportunities, collaborations, or just a
            friendly chat. Reach out anytime!
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Main Card */}
        <motion.div
          variants={fadeInUp}
          className="card lg:card-side bg-base-100 shadow-2xl rounded-3xl overflow-hidden border border-base-200/50 backdrop-blur-sm"
        >
          {/* Left Side - Contact Info */}
          <motion.div
            variants={itemVariants}
            className="lg:w-2/5 p-8 md:p-10 bg-linear-to-br from-primary/10 to-secondary/10 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-base-content mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded-full" />
              Get in Touch
            </h2>

            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <p className="text-sm font-medium text-base-content/50 uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href="mailto:afsana.laz@gmail.com"
                    className="text-base-content hover:text-primary transition-colors font-medium"
                  >
                    afsana.laz@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-sm font-medium text-base-content/50 uppercase tracking-wider">
                    Phone
                  </p>
                  <a
                    href="tel:+017381150341"
                    className="text-base-content hover:text-secondary transition-colors font-medium"
                  >
                    +017381150341
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <p className="text-sm font-medium text-base-content/50 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-base-content font-medium">
                    Rajshahi, Bangladesh
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="divider my-8" />

            {/* Connect With Me */}
            <div>
              <h3 className="text-lg font-semibold text-base-content mb-4 flex items-center gap-2">
                Connect With Me
              </h3>
              <div className="flex gap-3 flex-wrap">
                {[
                  { icon: FaGithub, 
                    label: "GitHub",
                     url: "https://github.com/afsanalaz953/",
                    color: "hover:bg-[#333]" },
                  {
                    icon: FaLinkedinIn,
                    label: "LinkedIn",
                     url: "https://www.linkedin.com/in/afsana-laz/",
                    color: "hover:bg-[#0A66C2]",
                  },
                  // {
                  //   icon: FaTwitter,
                  //   label: "Twitter",
                  //   color: "hover:bg-[#1DA1F2]",
                  // },
                  // {
                  //   icon: FaInstagram,
                  //   label: "Instagram",
                  //   color: "hover:bg-gradient-to-br from-[#E4405F] to-[#F58529]",
                  // },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    variants={itemVariants}
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-2xl bg-base-200 flex items-center justify-center text-base-content/70 hover:text-white ${social.color} transition-all duration-300 shadow-sm hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex items-center gap-2 text-sm text-success"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-success" />
              </span>
              Available for work
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            variants={itemVariants}
            className="lg:w-3/5 p-8 md:p-10"
          >
            <h2 className="text-2xl font-bold text-base-content mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-secondary rounded-full" />
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div variants={itemVariants} className="form-control">
                  <label className="label pb-1.5">
                    <span className="label-text font-medium text-base-content/70 flex items-center gap-1.5">
                      <FaUser className="text-primary text-xs" />
                      Your Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ashish Chanchlani"
                    className="input input-bordered w-full bg-base-200/50 border-base-300/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-xl"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="form-control">
                  <label className="label pb-1.5">
                    <span className="label-text font-medium text-base-content/70 flex items-center gap-1.5">
                      <FaEnvelope className="text-secondary text-xs" />
                      Your Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="founder@nextbigthing.ai"
                    className="input input-bordered w-full bg-base-200/50 border-base-300/50 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all rounded-xl"
                    required
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="form-control">
                <label className="label pb-1.5">
                  <span className="label-text font-medium text-base-content/70 flex items-center gap-1.5">
                    <FaComment className="text-accent text-xs" />
                    Subject
                  </span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="input input-bordered w-full bg-base-200/50 border-base-300/50 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all rounded-xl"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants} className="form-control">
                <label className="label pb-1.5">
                  <span className="label-text font-medium text-base-content/70">
                    Message
                  </span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="textarea textarea-bordered w-full bg-base-200/50 border-base-300/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-xl h-32 resize-none"
                  required
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-between"
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn btn-primary w-full sm:w-auto px-8 rounded-xl gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>

                {isSubmitted && (
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-success font-medium flex items-center gap-2"
                  >
                    <span className="badge badge-success badge-sm" />
                    Message sent successfully!
                  </motion.span>
                )}
              </motion.div>
            </form>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={fadeInUp}
          className="text-center mt-10 text-sm text-base-content/40"
        >
          <p>
            © {new Date().getFullYear()} Afsana Laz. Crafted with{" "}
            <span className="text-error">❤</span> using Next.js
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}