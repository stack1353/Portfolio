import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Brain, 
  Cpu, 
  Globe, 
  Zap, 
  GitBranch,
  Server,
  Eye
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "neon-blue",
      icon: Globe,
      skills: ["React", "HTML/CSS", "JavaScript", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      color: "neon-purple",
      icon: Server,
      skills: ["Node.js", "Express", "MongoDB", "SQL", "REST APIs"]
    },
    {
      title: "Programming Languages",
      color: "neon-green",
      icon: Code2,
      skills: ["Python", "C++", "Java", "JavaScript", "TypeScript"]
    },
    {
      title: "AI & Machine Learning",
      color: "neon-pink",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "Computer Vision", "YOLO", "OpenCV"]
    },
    {
      title: "Embedded Systems",
      color: "neon-cyan",
      icon: Cpu,
      skills: ["Raspberry Pi", "Arduino", "IoT", "Edge AI", "Microcontrollers"]
    },
    {
      title: "Data Structures & Algorithms",
      color: "neon-blue",
      icon: GitBranch,
      skills: ["DSA", "Problem Solving", "Algorithm Design", "Optimization"]
    },
    {
      title: "Computer Vision",
      color: "neon-green",
      icon: Eye,
      skills: ["OpenCV", "Image Processing", "Object Detection", "Sony IMX477"]
    },
    {
      title: "Tools & Technologies",
      color: "neon-purple",
      icon: Zap,
      skills: ["Git", "Docker", "Linux", "VS Code", "Postman"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl"></div>
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and skills I've developed through projects and learning
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 30px rgba(0, 212, 255, 0.3)`
              }}
              className="group glass-card p-6 hover-glow cursor-pointer"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-${category.color}/20 rounded-xl flex items-center justify-center group-hover:bg-${category.color}/30 transition-colors duration-300`}>
                  <category.icon size={24} className={`text-${category.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <div className={`w-2 h-2 bg-${category.color} rounded-full`}></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl border border-${category.color}/20 group-hover:border-${category.color}/40 transition-all duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Additional <span className="gradient-text">Technologies</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {[
              "Python", "React", "Node.js", "MongoDB", "C++", "Java",
              "TensorFlow", "OpenCV", "Raspberry Pi", "IoT", "Git", "Linux"
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="glass-card p-4 text-center hover-glow cursor-pointer"
              >
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 