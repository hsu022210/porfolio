import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar, Code2, Server } from "lucide-react";
import {
  SiPython, SiJavascript, SiHtml5, SiReact, SiNodedotjs, SiDjango, SiGraphql, SiJest, SiTypescript, SiVite, SiVitest, SiSass, SiPostgresql, SiDocker, SiKubernetes, SiTravisci, SiGithub, SiSlack, SiJira, SiGitlab, SiFigma, SiInvision
} from 'react-icons/si';
import { FaDatabase, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import type { ReactNode } from 'react';

const skillIconMap: Record<string, ReactNode> = {
  'React.js': <SiReact className="text-cyan-500" />,
  'TypeScript': <SiTypescript className="text-blue-600" />,
  'JavaScript(ES6+)': <SiJavascript className="text-yellow-400" />,
  'Vite': <SiVite className="text-purple-500" />,
  'Vitest': <SiVitest className="text-lime-500" />,
  'Zustand': <span className="text-green-600 text-lg">🌿</span>,
  'Zod': <span className="text-green-500 text-lg">💎</span>,
  'SCSS': <SiSass className="text-pink-500" />,
  'Carbon': <FaProjectDiagram className="text-gray-400" />,
  'Jest': <SiJest className="text-red-500" />,
  'RESTful API': <FaDatabase className="text-indigo-500" />,
  'Python': <SiPython className="text-blue-500" />,
  'Django': <SiDjango className="text-green-700" />,
  'GraphQL': <SiGraphql className="text-pink-600" />,
  'Node.js': <SiNodedotjs className="text-green-600" />,
  'HTML': <SiHtml5 className="text-orange-500" />,
  'Bootstrap': <SiSass className="text-purple-600" />,
  'Authentication': <FaProjectDiagram className="text-gray-400" />,
  'Web Crawling': <FaProjectDiagram className="text-pink-500" />,
  'Microservice': <FaProjectDiagram className="text-gray-400" />,
  'PostgreSQL': <SiPostgresql className="text-blue-700" />,
  'Kubernetes': <SiKubernetes className="text-blue-400" />,
  'Docker': <SiDocker className="text-blue-400" />,
  'Travis CI': <SiTravisci className="text-green-600" />,
  'Slack': <SiSlack className="text-purple-400" />,
  'Github': <SiGithub className="text-black dark:text-white" />,
  'Jira': <SiJira className="text-blue-600" />,
  'Gitlab': <SiGitlab className="text-orange-600" />,
  'Figma': <SiFigma className="text-pink-600" />,
  'InVision': <SiInvision className="text-pink-400" />,
  'Outlook': <FaEnvelope className="text-blue-600" />,
};

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
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 crisp-text">
            Side <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 crisp-gradient-text">Project</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work and technical expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project) => (
            <Card 
              key={project.name} 
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
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button asChild variant="default" size="default" className="flex-1 group/btn">
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      Website
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="default" className="flex-1 group/btn">
                    <a
                      href={project.links.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Frontend
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="default" className="flex-1 group/btn">
                    <a
                      href={project.links.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Server className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Backend
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="default" className="flex-1 group/btn">
                    <a
                      href={project.links.api}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Code2 className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      API Doc
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 