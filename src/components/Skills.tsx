import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Cloud, Cpu } from "lucide-react";
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

const techStacks = [
  'React.js', 'TypeScript', 'JavaScript(ES6+)', 'Vite', 'Vitest', 'Zustand', 'Zod', 'SCSS', 'Carbon', 'Jest', 'RESTful API', 'Python', 'Django', 'GraphQL', 'Node.js', 'HTML', 'Bootstrap', 'Authentication', 'Web Crawling', 'Microservice'
];

const tools = [
  'Slack', 'VS Code', 'Github', 'Zenhub', 'Jira', 'Gitlab', 'Figma', 'InVision', 'Outlook'
];

const languages = [
  'English (Fluent)', 'Mandarin Chinese (Native)'
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-alt">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 crisp-text">
            Technical <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 crisp-gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Tech Stacks */}
        <Card className="mb-8 dark:bg-card/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="h-5 w-5" /> Tech Stacks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {techStacks.map((skill, i) => (
                <Badge key={i} variant="secondary" className="flex items-center gap-2 px-3 py-1">
                  {skillIconMap[skill] || <FaProjectDiagram className="text-gray-400" />} {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tools */}
        <Card className="mb-8 dark:bg-card/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-5 w-5" /> Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <Badge key={i} variant="secondary" className="flex items-center gap-2 px-3 py-1">
                  {skillIconMap[tool] || <FaProjectDiagram className="text-gray-400" />} {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card className="dark:bg-card/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" /> Languages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, i) => (
                <Badge key={i} variant="secondary" className="flex items-center gap-2 px-3 py-1">
                  {lang}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills; 