import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Code2, Server } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-animations";
import { skillIconMap } from "@/lib/skill-icon-map";
import { FaProjectDiagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    name: 'Code Snippets Management Web App',
    description: 'A comprehensive web application for managing and organizing code snippets. Features include user authentication, snippet categorization, search functionality, and collaborative sharing. Built with modern technologies for optimal performance and user experience.',
    stack: ['React.js', 'TypeScript', 'Vite', 'Vitest', 'Zustand', 'RESTful API', 'Python', 'Django', 'PostgreSQL', 'Bootstrap', 'Zod'],
    links: {
      website: 'https://snippets-frontend-ogbf.onrender.com',
      frontend: 'https://github.com/hsu022210/Snippets-frontend',
      backend: 'https://github.com/hsu022210/Snippets-backend',
      api: 'https://snippets-backend-69z8.onrender.com/swagger/',
    },
    updated_at: '2025-07-14',
  },
];

const Projects = () => {
  const animation = useScrollAnimation();
  const projectsAnimation = useScrollAnimation({ staggerDelay: 0.5 });

  return (
    <motion.section 
      id="projects" 
      className="py-16 sm:py-24 bg-background"
      ref={animation.ref}
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
    >
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 crisp-text">
            Side <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 crisp-gradient-text">Project</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A showcase of my latest work and technical expertise
          </p>
        </div>

        <motion.div 
          className="max-w-4xl mx-auto"
          ref={projectsAnimation.ref}
          variants={projectsAnimation.containerVariants}
          initial="hidden"
          animate={projectsAnimation.isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div key={project.name} variants={projectsAnimation.itemVariants}>
              <Card 
                className="group overflow-hidden border-2 hover:border-primary/20 dark:hover:border-primary/30 dark:bg-card/50"
              >
                <div className="p-6">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Code2 className="h-5 w-5 text-primary" />
                        <CardTitle className="text-xl lg:text-2xl transition-colors">
                          {project.name}
                        </CardTitle>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">Last updated: {project.updated_at}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-sm px-3 py-1 self-start">
                      Side Project
                    </Badge>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h3 className="text-base font-semibold mb-3 text-foreground">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary" 
                          className="text-xs px-3 py-1 bg-secondary/50 hover:bg-secondary transition-colors flex items-center gap-2"
                        >
                          {skillIconMap[tech] || <FaProjectDiagram className="text-gray-400" />} {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Links as Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 mt-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    <Button asChild variant="default" size="default" className="w-full group/btn">
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        <span className="sm:inline">Website</span>
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="default" className="w-full group/btn">
                      <a
                        href={project.links.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <FaGithub className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        <span className="sm:inline">Frontend</span>
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="default" className="w-full group/btn">
                      <a
                        href={project.links.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Server className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        <span className="sm:inline">Backend</span>
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="default" className="w-full group/btn">
                      <a
                        href={project.links.api}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Code2 className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        <span className="sm:inline">API Doc</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects; 