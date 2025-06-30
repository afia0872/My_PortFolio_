import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js', category: 'Frontend', level: 85 },
  { name: 'HTML5', category: 'Frontend', level: 90 },
  { name: 'CSS3', category: 'Frontend', level: 85 },
  { name: 'JavaScript', category: 'Frontend', level: 80 },
  { name: 'MySQL', category: 'Database', level: 75 },
  { name: 'SQL', category: 'Database', level: 70 },
  { name: 'Git & GitHub', category: 'Tools & Platforms', level: 85 },
  { name: 'Linux (Basics)', category: 'Tools & Platforms', level: 70 },
  { name: 'VS Code', category: 'Tools & Platforms', level: 90 },
  { name: 'Java', category: 'Programming Languages', level: 85 },
  { name: 'Python', category: 'Programming Languages', level: 75 },
];

const Skills: React.FC = () => {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 mb-4 animate-bounce">
            What I Bring to the Table
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto italic">
            My expertise across tools, technologies, and platforms.
          </p>
        </motion.div>

        {categories.map((category, index) => (
          <motion.div
            key={category}
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-blue-600 mb-6 border-l-4 border-blue-400 pl-4">
              {category}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {skills.filter(skill => skill.category === category).map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="relative p-6 bg-white border border-blue-100 rounded-2xl shadow-xl hover:shadow-blue-300 transform hover:scale-105 transition duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-800 font-semibold text-lg">{skill.name}</span>
                    <span className="text-blue-600 font-bold text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          className="mt-20 p-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-blue-800 mb-10">
            Additional Competencies
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
            <div className="p-4 flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105">
              <img src="https://ui-avatars.com/api/?name=Agile&background=0D8ABC&color=fff" alt="Agile Avatar" className="w-20 h-20 rounded-full mb-3 shadow-md border-4 border-white" />
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Agile Methodology</h4>
              <p className="text-gray-700 text-sm">Scrum, Sprint Planning, Team Collaboration</p>
            </div>
            <div className="p-4 flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105">
              <img src="https://ui-avatars.com/api/?name=Data&background=F59E0B&color=fff" alt="Data Avatar" className="w-20 h-20 rounded-full mb-3 shadow-md border-4 border-white" />
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Data Annotation</h4>
              <p className="text-gray-700 text-sm">Labeling datasets, supporting AI/ML models</p>
            </div>
            <div className="p-4 flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105">
              <img src="https://ui-avatars.com/api/?name=Linux&background=10B981&color=fff" alt="Linux Avatar" className="w-20 h-20 rounded-full mb-3 shadow-md border-4 border-white" />
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Networking & Linux</h4>
              <p className="text-gray-700 text-sm">Shell scripting, System configuration, Troubleshooting</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
