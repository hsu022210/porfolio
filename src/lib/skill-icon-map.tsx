import {
  SiPython, SiJavascript, SiHtml5, SiReact, SiNodedotjs, SiDjango, SiGraphql, SiJest, SiTypescript, SiVite, SiVitest, SiSass, SiPostgresql, SiDocker, SiKubernetes, SiTravisci, SiGithub, SiSlack, SiJira, SiGitlab, SiFigma, SiInvision, SiWebcomponentsdotorg
} from 'react-icons/si';
import { FaProjectDiagram, FaEnvelope, FaLock, FaSpider, FaNetworkWired, FaExchangeAlt, FaCubes } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import type { ReactNode } from 'react';

export const skillIconMap: Record<string, ReactNode> = {
  'React.js': <SiReact className="text-cyan-500" />,
  'TypeScript': <SiTypescript className="text-blue-600" />,
  'JavaScript(ES6+)': <SiJavascript className="text-yellow-400" />,
  'Vite': <SiVite className="text-purple-500" />,
  'Vitest': <SiVitest className="text-lime-500" />,
  'Zustand': <span className="text-green-600 text-md">🌿</span>,
  'Zod': <span className="text-green-500 text-md">💎</span>,
  'SCSS': <SiSass className="text-pink-500" />,
  'Carbon': <FaCubes className="text-blue-900" />,
  'Jest': <SiJest className="text-red-500" />,
  'RESTful API': <FaExchangeAlt className="text-indigo-500" />,
  'Python': <SiPython className="text-blue-500" />,
  'Django': <SiDjango className="text-green-700" />,
  'GraphQL': <SiGraphql className="text-pink-600" />,
  'Node.js': <SiNodedotjs className="text-green-600" />,
  'HTML': <SiHtml5 className="text-orange-500" />,
  'Bootstrap': <SiSass className="text-purple-600" />,
  'Web Application': <SiWebcomponentsdotorg className="text-blue-400" />,
  'Authentication': <FaLock className="text-gray-600" />,
  'Web Crawling': <FaSpider className="text-green-700" />,
  'Microservice': <FaNetworkWired className="text-indigo-500" />,
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
  'VS Code': <VscVscode className="text-blue-500" />,
  'Zenhub': <FaProjectDiagram className="text-purple-600" />,
}; 