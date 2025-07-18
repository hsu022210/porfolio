import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-animations";
import { skillIconMap } from "@/lib/skill-icon-map";

const Experience = () => {
  const animation = useScrollAnimation();
  const experienceAnimation = useScrollAnimation({ staggerDelay: 0.4 });
  
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'IBM ASPERA',
      location: 'Costa Mesa, CA (Remote)',
      period: 'Aug 2021 – Aug 2024',
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
    <motion.section 
      id="experience" 
      className="py-16 sm:py-24 bg-background"
      ref={animation.ref}
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
    >
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 crisp-text">
            Work <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 crisp-gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            My professional journey and achievements
          </p>
        </div>

        <motion.div 
          className="space-y-4 sm:space-y-6"
          ref={experienceAnimation.ref}
          variants={experienceAnimation.containerVariants}
          initial="hidden"
          animate={experienceAnimation.isInView ? "visible" : "hidden"}
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={experienceAnimation.itemVariants}>
              <Card 
                className={`dark:bg-card/50`}
              >
                <CardHeader className="pb-3 sm:pb-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4">
                    <div className="flex items-start sm:items-center gap-3">
                      <Badge variant="outline" className="p-1.5 sm:p-2 flex-shrink-0">
                        <Briefcase className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Badge>
                      <div className="min-w-0 flex-1">
                        <CardTitle className="text-lg sm:text-xl mb-1">{experience.title}</CardTitle>
                        <p className="text-blue-500 dark:text-blue-400 font-medium text-sm sm:text-base flex items-center gap-1">
                          {skillIconMap[experience.company] && (
                            <span className="inline-flex items-center mr-1 align-middle">{skillIconMap[experience.company]}</span>
                          )}
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="break-words">{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        {experience.period}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1 text-sm sm:text-base">
                    {experience.description.map((item, i) => (
                      <li key={i} className="break-words">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience; 