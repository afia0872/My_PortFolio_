export const personalInfo = {
  name: "Alex Rodriguez",
  title: "Full Stack Developer & AI Enthusiast",
  email: "alex.rodriguez@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications and AI-powered solutions. I love creating beautiful, functional user experiences that solve real-world problems.",
  avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    portfolio: "https://portfolio.com"
  }
};

export const experiences = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Lead development of enterprise web applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
    achievements: [
      "Increased application performance by 40%",
      "Led team of 5 developers",
      "Implemented microservices architecture"
    ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect user interfaces.",
    technologies: ["Vue.js", "Python", "Django", "MySQL", "Docker"],
    achievements: [
      "Built 10+ client applications",
      "Reduced deployment time by 60%",
      "Improved code coverage to 95%"
    ]
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    location: "New York, NY",
    period: "2019 - 2020",
    description: "Created responsive web applications and landing pages. Worked closely with UX/UI designers to implement modern design systems.",
    technologies: ["React", "JavaScript", "SASS", "Webpack", "Git"],
    achievements: [
      "Delivered 20+ responsive websites",
      "Implemented design system",
      "Optimized loading times by 50%"
    ]
  }
];

export const skills = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Python", level: 85, category: "Backend" },
  { name: "AWS", level: 80, category: "Cloud" },
  { name: "PostgreSQL", level: 82, category: "Database" },
  { name: "Docker", level: 78, category: "DevOps" },
  { name: "GraphQL", level: 75, category: "API" }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered message suggestions and sentiment analysis.",
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "WebSocket", "OpenAI", "Express"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    id: 3,
    title: "Project Management Tool",
    description: "Collaborative project management tool with kanban boards, time tracking, and team collaboration features.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  }
];