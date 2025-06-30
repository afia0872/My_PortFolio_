import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award } from 'lucide-react';

// Define experiences data directly within the component for this example.
// In a real application, you would typically manage this in a separate data file.
const experiences = [
  {
    id: 1,
    title: "Internship",
    company: "Varcons Technologies Pvt Ltd",
    period: "Oct 2022 - Nov 2022",
    location: "Mysore, Karnataka",
    description: "Collaborated with a team of four developers to debug and resolve 20+ front-end and back-end issues, contributing to stable releases and improving overall application performance.",
    technologies: ["JavaScript", "HTML", "CSS", "Debugging", "Team Collaboration"],
    achievements: [
      "Debugged and resolved 20+ front-end and back-end issues.",
      "Contributed to stable releases and improved application performance."
    ],
  },
  {
    id: 2,
    title: "Internship (Linux and Networking)",
    company: "Planet Globe",
    period: "Oct 2023 - Nov 2023",
    location: "Bengaluru, Karnataka",
    description: "Completed internship in Linux and Networking, gaining hands-on experience in system administration, shell scripting, network configuration, and troubleshooting.",
    technologies: ["Linux", "Networking", "System Administration", "Shell Scripting", "Troubleshooting"],
    achievements: [
      "Gained hands-on experience in system administration and network configuration.",
      "Developed skills in shell scripting and network troubleshooting."
    ],
  },
  {
    id: 3,
    title: "AI Data Annotation Specialist (Internship)",
    company: "Planet Globe",
    period: "Jun 2024 - Jul 2024",
    location: "Mysore, Karnataka",
    description: "Completed internship in Data Annotation, working on labeling and organizing large datasets to support machine learning and AI model training with high accuracy.",
    technologies: ["Data Annotation", "Machine Learning (ML)", "Artificial Intelligence (AI)", "Data Organization"],
    achievements: [
      "Labeled and organized large datasets for ML and AI model training.",
      "Ensured high accuracy in data annotation tasks."
    ],
  },
  {
    id: 4,
    title: "Java Full Stack Internship",
    company: "PariTechSoft",
    period: "Feb 2025 - May 2025",
    location: "Bengaluru, Karnataka",
    description: "Completed Java Full Stack internship with hands-on experience in building end-to-end web applications using Java, React.js, HTML, CSS, JavaScript, and MySQL.",
    technologies: ["Java", "React.js", "HTML", "CSS", "JavaScript", "MySQL", "Full Stack Development"],
    achievements: [
      "Gained hands-on experience in building end-to-end web applications.",
      "Developed proficiency in Java, React.js, and MySQL for full-stack development."
    ],
  },
];

const Experience: React.FC = () => {
  // Sort experiences by period in descending order (most recent first)
  // This is a simple date parsing for the given format, assuming 'Month YYYY' or 'Month YYYY - Month YYYY'
  const sortedExperiences = [...experiences].sort((a, b) => {
    const parseMonthYear = (dateString: string) => {
      // Takes the end date if a range is present, otherwise the single date
      const parts = dateString.split(' - ');
      const datePart = parts[parts.length - 1]; // Get the last part, which is the end date for a range or the single date
      const [monthStr, yearStr] = datePart.split(' ');
      const month = new Date(Date.parse(monthStr + " 1, 2000")).getMonth(); // Get month index (0-11)
      const year = parseInt(yearStr);
      return new Date(year, month);
    };

    const dateA = parseMonthYear(a.period);
    const dateB = parseMonthYear(b.period);

    // Sort in descending order (most recent first)
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <section id="experience" className="py-20 bg-slate-900 font-inter">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            My professional journey and the milestones that have shaped my career
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-teal-500 to-amber-500"></div>

            {sortedExperiences.map((experience, index) => ( // Use sortedExperiences here
              <motion.div
                key={experience.id}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    className="bg-slate-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-2 text-teal-400 mb-2">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{experience.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {experience.title}
                    </h3>

                    <div className="flex items-center gap-2 text-slate-300 mb-4">
                      <span className="font-semibold">{experience.company}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-400 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-700 text-teal-300 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-amber-400 mb-2">
                        <Award size={16} />
                        <span className="text-sm font-medium">Key Achievements</span>
                      </div>
                      {experience.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-teal-500/10 to-amber-500/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-slate-300 mb-6">
              I'm always excited to take on new challenges and collaborate on innovative projects.
            </p>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
