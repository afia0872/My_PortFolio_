import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code using Java, React.js, and MySQL."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Focus",
      description: "Designing responsive interfaces with intuitive navigation and clean layouts."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Ensuring optimized and efficient full stack web applications."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Teamwork",
      description: "Collaborated in 4 internships to build real-time industry projects."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional developer workspace"
                className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Fresher Developer with Real-World Project Exposure
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              I'm a passionate Information Science graduate with a CGPA of 8.9 and multiple internships in Full Stack Development, Web Development, Linux & Networking, and AI Data Annotation. I've built projects like a Women’s Safety App, a Hotel Booking Platform, and an AI Chatbot Assistant using Java, React.js, and MySQL.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              I enjoy solving real-world problems through technology and thrive in collaborative environments. I’m eager to join a forward-thinking team where I can contribute, learn, and grow in the software development field.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white px-4 py-2 rounded-full shadow-md border border-slate-200">
                <span className="text-slate-700 font-medium">📍 Bengaluru, India</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-md border border-slate-200">
                <span className="text-slate-700 font-medium">💼 Available for hire</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-md border border-slate-200">
                <span className="text-slate-700 font-medium">🌍 Remote friendly</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-teal-500 mb-4">{highlight.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{highlight.title}</h4>
              <p className="text-slate-600">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
