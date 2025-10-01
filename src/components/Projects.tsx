import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, Leaf, Brain, Utensils } from 'lucide-react';
import Card from './Card';
import Button from './Button';

const Projects: React.FC = memo(() => {
  const colorClasses: Record<string, {
    gradientFrom: string;
    iconBg: string;
    iconText: string;
    chipBg: string;
    chipText: string;
    chipBorder: string;
    cardBorder: string;
    cardBorderHover: string;
  }> = {
    'neon-blue': {
      gradientFrom: 'from-neon-blue/20',
      iconBg: 'bg-neon-blue/20',
      iconText: 'text-neon-blue',
      chipBg: 'bg-neon-blue/10',
      chipText: 'text-neon-blue',
      chipBorder: 'border-neon-blue/20',
      cardBorder: 'border-neon-blue/20',
      cardBorderHover: 'group-hover:border-neon-blue/40',
    },
    'neon-purple': {
      gradientFrom: 'from-neon-purple/20',
      iconBg: 'bg-neon-purple/20',
      iconText: 'text-neon-purple',
      chipBg: 'bg-neon-purple/10',
      chipText: 'text-neon-purple',
      chipBorder: 'border-neon-purple/20',
      cardBorder: 'border-neon-purple/20',
      cardBorderHover: 'group-hover:border-neon-purple/40',
    },
    'neon-green': {
      gradientFrom: 'from-neon-green/20',
      iconBg: 'bg-neon-green/20',
      iconText: 'text-neon-green',
      chipBg: 'bg-neon-green/10',
      chipText: 'text-neon-green',
      chipBorder: 'border-neon-green/20',
      cardBorder: 'border-neon-green/20',
      cardBorderHover: 'group-hover:border-neon-green/40',
    },
    'neon-pink': {
      gradientFrom: 'from-neon-pink/20',
      iconBg: 'bg-neon-pink/20',
      iconText: 'text-neon-pink',
      chipBg: 'bg-neon-pink/10',
      chipText: 'text-neon-pink',
      chipBorder: 'border-neon-pink/20',
      cardBorder: 'border-neon-pink/20',
      cardBorderHover: 'group-hover:border-neon-pink/40',
    },
  };

  const projects = [
    // {
    //   title: "Rescue Radar",
    //   description: "Platform for animal rescuers to receive and respond to injury reports. Built with React, Node.js, and MongoDB for real-time communication between rescuers and people reporting injured animals.",
    //   image: "🦮",
    //   icon: Shield,
    //   color: "neon-blue",
    //   tech: ["React", "Node.js", "MongoDB", "Real-time"],
    //   github: "#",
    //   demo: "https://pet-pet-picks.netlify.app/"
    // },
    {
      title: "Crime Detection System",
      description: "YOLO-based detection of guns and masks in CCTV footage using Raspberry Pi with a web interface. Implements computer vision for real-time surveillance and security applications.",
      image: "🔍",
      icon: Shield,
      // Map unsupported neon-red to neon-pink for consistent Tailwind classes
      color: "neon-pink",
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
    // {
    //   title: "Personalized Diet & Meal Planner",
    //   description: "AI-driven algorithm for generating personalized meal plans based on user preferences, dietary restrictions, and nutritional requirements. Smart recommendations for healthy eating.",
    //   image: "🍽️",
    //   icon: Utensils,
    //   color: "neon-pink",
    //   tech: ["AI", "Python", "Nutrition", "Personalization"],
    //   github: "#",
    //   demo: "#"
    // }
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
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-neon-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-neon-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            A collection of innovative projects showcasing my skills in AI, Embedded Systems, and Web Development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-4 sm:mt-6"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => {
            const c = colorClasses[project.color] ?? colorClasses['neon-blue'];
            return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: `0 0 40px rgba(0, 212, 255, 0.3)`
              }}
            >
              <Card variant="glass" className="group overflow-hidden hover-glow h-full">
                {/* Project Image */}
                <div className="relative h-40 sm:h-48 bg-gradient-to-br from-dark-800 to-dark-700 flex items-center justify-center overflow-hidden">
                  <div className="text-4xl sm:text-6xl">{project.image}</div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${c.gradientFrom} to-transparent`}></div>
                  
                  {/* Project Icon */}
                  <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 w-10 sm:w-12 h-10 sm:h-12 ${c.iconBg} rounded-xl flex items-center justify-center backdrop-blur-sm`}>
                    <project.icon size={20} className={`${c.iconText} sm:w-6 sm:h-6`} />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6 flex flex-col h-full">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-neon-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 sm:px-3 py-1 text-xs font-medium ${c.chipBg} ${c.chipText} rounded-full border ${c.chipBorder}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
                    <Button
                      variant="ghost"
                      size="sm"
                      icon={Github}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      GitHub
                    </Button>
                    
                    <Button
                      variant="primary"
                      size="sm"
                      icon={ExternalLink}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl border ${c.cardBorder} ${c.cardBorderHover} transition-all duration-300`}></div>
              </Card>
            </motion.div>
          );})}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-6 px-4">
            Interested in collaborating or have a project in mind?
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Let's Build Something Amazing
          </Button>
        </motion.div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects; 