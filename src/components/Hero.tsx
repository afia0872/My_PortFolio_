import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';

const personalInfo = {
  // CORRECTED PATHS: Remove '/public'
  avatar: "/profile.jpg", // Assumes profile.jpg is directly in the public folder
  name: "Afia",
  title: "Developer",
  bio: "I'm a passionate fresher with internship experience in full stack and web development, skilled in Java, React.js, and MySQL. Excited to contribute to real-world software projects and grow in the tech industry.",
  cvUrl: "/updated_Resume.pdf", // Assumes Resume 2.pdf is directly in the public folder
};

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = personalInfo.cvUrl;
    link.setAttribute('download', 'Afia_F_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden font-inter"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar */}
          <motion.img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-teal-400"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.05 }}
          />

          {/* Name/Greeting */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-500">Afia F</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {personalInfo.title}
          </motion.p>

          {/* Bio */}
          <motion.p
            className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.button
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>

            <motion.button
              onClick={handleDownloadCV}
              className="border-2 border-slate-400 text-slate-300 hover:border-teal-400 hover:text-teal-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <button
            onClick={scrollToAbout}
            className="text-slate-400 hover:text-teal-400 transition-colors duration-300 animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;