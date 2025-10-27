import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const personalInfo = {
    name: 'Afia Fareen',
    email: 'sample@gmail.com',
    phone: '+91 0123456789',
    location: 'Bengaluru, Karnataka, 560001',
    social: {
      github: 'https://github.com/afia0872',
      linkedin: 'https://linkedin.com/in/Afia-fareen'
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: personalInfo.social.github,
      icon: '🐱'
    },
    {
      name: 'LinkedIn',
      href: personalInfo.social.linkedin,
      icon: '💼'
    },
    {
      name: 'Email',
      href: `mailto:${personalInfo.email}`,
      icon: '✉️'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-bold mb-4 cursor-pointer"
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
            >
              {personalInfo.name}
            </motion.h3>
            <p className="text-slate-400 mb-6 max-w-md">
              Full Stack Developer passionate about creating innovative digital solutions
              that make a difference. Always ready to take on new challenges and learn new technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-teal-500 rounded-full flex items-center justify-center text-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-slate-400">
              <p>{personalInfo.location}</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="block hover:text-teal-400 transition-colors duration-300"
              >
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="block hover:text-teal-400 transition-colors duration-300"
              >
                {personalInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-slate-400 mb-4 md:mb-0">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>by {personalInfo.name}</span>
          </div>
          <p className="text-slate-400 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 w-12 h-12 bg-slate-700 hover:bg-teal-500 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-30"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        viewport={{ once: true }}
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
