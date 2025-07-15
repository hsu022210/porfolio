import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'IBM ASPERA',
      location: 'Costa Mesa, CA (Remote)',
      period: 'Aug 2021 – Feb 2025',
      description: [
        'Owned front-end development of a microservice-based React application for the IBM Aspera product, serving clients like Netflix, Disney, Apple, and Fox News.',
        'Collaborated with back-end team for API design, integration, enabling efficient data retrieval and maintainability.',
        'Translated Figma design systems into interactive, production-ready UI components with TypeScript and React.',
        'Proactively engaged with executives and project managers on finalizing customer needs and sprint planning.'
      ],
      link: '#'
    },
    {
      title: 'Software Engineer',
      company: 'IBM ASPERA',
      location: 'San Francisco, CA',
      period: 'Oct 2019 – Aug 2021',
      description: [
        'Designed a modern microservices architecture and defined API standards/endpoints for a complete rewrite of an enterprise-scale monolithic legacy web app.',
        'Developed a new SPA React app from scratch with Carbon as UI framework for the rewrite plan, set up branching/workflow pipeline, coding standards, sprint planning tickets for the team to work on.',
      ],
      link: '#'
    },
    {
      title: 'Software Engineer',
      company: 'IBM',
      location: 'Durham, NC',
      period: 'Nov 2018 – Oct 2019',
      description: [
        'Developed IBM Multi-Cloud Manager with React.js, Node.js with Express, Jest, Kubernetes, Docker, Travis CI.',
        'Worked on enterprise-scale web applications and contributed to the development of scalable solutions.'
      ],
      link: '#'
    },
    {
      title: 'Capstone Project Software Engineer',
      company: 'TWITTER',
      location: 'San Francisco, CA',
      period: 'Sep 2017 – Dec 2017',
      description: [
        'Developed a full-stack dashboard to visualize incident data from PagerDuty for Engineering Effectiveness team.',
        'Data visualization on trends and statistical charts with incident data queried from PagerDuty API filtered by team.'
      ],
      link: '#'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 crisp-text">
            Work <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 crisp-gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and achievements
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Card 
              key={index} 
              className={`dark:bg-card/50`}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="p-2">
                      <Briefcase className="h-4 w-4" />
                    </Badge>
                    <div>
                      <CardTitle className="text-xl">{experience.title}</CardTitle>
                      <p className="text-blue-500 dark:text-blue-400 font-medium">{experience.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {experience.period}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1">
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 