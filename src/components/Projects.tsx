import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Shield, Leaf, Brain, Utensils } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Rescue Radar",
      description: "Platform for animal rescuers to receive and respond to injury reports. Built with React, Node.js, and MongoDB for real-time communication between rescuers and people reporting injured animals.",
      image: "🦮",
      icon: Shield,
      color: "neon-blue",
      tech: ["React", "Node.js", "MongoDB", "Real-time"],
      github: "#",
      demo: "https://pet-pet-picks.netlify.app/"
    },
    {
      title: "Crime Detection System",
      description: "YOLO-based detection of guns and masks in CCTV footage using Raspberry Pi with a web interface. Implements computer vision for real-time surveillance and security applications.",
      image: "🔍",
      icon: Shield,
      color: "neon-red",
      tech: ["YOLO", "Raspberry Pi", "Computer Vision", "Python"],
      github: "#",
      demo: "#"
    },
    {
      title: "Disease Detection in Crops",
      description: "Raspberry Pi + Sony IMX477 camera system for detecting diseases in pomegranate and grape crops. Uses AI/ML algorithms to identify plant diseases early for better crop management.",
      image: "🌱",
      icon: Leaf,
      color: "neon-green",
      tech: ["Raspberry Pi", "Sony IMX477", "AI/ML", "Agriculture"],
      github: "#",
      demo: "#"
    },
    {
      title: "AlgoViz",
      description: "Web-based tool to visualize graph algorithms with AI explanations. Interactive platform for learning and understanding complex algorithms through visual representation and AI-powered insights.",
      image: "📊",
      icon: Brain,
      color: "neon-purple",
      tech: ["React", "AI", "Algorithms", "Visualization"],
      github: "#",
      demo: "#"
    },
    {
      title: "Personalized Diet & Meal Planner",
      description: "AI-driven algorithm for generating personalized meal plans based on user preferences, dietary restrictions, and nutritional requirements. Smart recommendations for healthy eating.",
      image: "🍽️",
      icon: Utensils,
      color: "neon-pink",
      tech: ["AI", "Python", "Nutrition", "Personalization"],
      github: "#",
      demo: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of innovative projects showcasing my skills in AI, Embedded Systems, and Web Development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: `0 0 40px rgba(0, 212, 255, 0.3)`
              }}
              className="group glass-card overflow-hidden hover-glow"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-dark-800 to-dark-700 flex items-center justify-center overflow-hidden">
                <div className="text-6xl">{project.image}</div>
                <div className={`absolute inset-0 bg-gradient-to-t from-${project.color}/20 to-transparent`}></div>
                
                {/* Project Icon */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-${project.color}/20 rounded-xl flex items-center justify-center backdrop-blur-sm`}>
                  <project.icon size={24} className={`text-${project.color}`} />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium bg-${project.color}/10 text-${project.color} rounded-full border border-${project.color}/20`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-dark-800 hover:bg-dark-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 border border-white/10 hover:border-neon-blue/50"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/25"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl border border-${project.color}/20 group-hover:border-${project.color}/40 transition-all duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-400 mb-6">
            Interested in collaborating or have a project in mind?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-full hover-glow"
          >
            Let's Build Something Amazing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 