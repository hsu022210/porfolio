import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, MapPin, Calendar, Mail, Shield, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-animations";

const About = () => {
  const animation = useScrollAnimation();
  
  const personalInfo = [
    { icon: User, label: 'Name', value: 'Alec Hsu' },
    { icon: MapPin, label: 'Location', value: 'Los Angeles, CA' },
    { icon: Calendar, label: 'Experience', value: '6+ Years' },
    { icon: Shield, label: 'Citizenship', value: 'U.S. Citizen' },
  ];

  const contactLinks = [
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:alechsu83@gmail.com',
      color: 'text-orange-500 hover:text-orange-600'
    },
    { 
      icon: FaLinkedin, 
      label: 'LinkedIn', 
      href: 'https://linkedin.com/in/alechsu83',
      color: 'text-blue-500 hover:text-blue-600'
    },
    { 
      icon: FaGithub, 
      label: 'GitHub', 
      href: 'https://github.com/hsu022210',
      color: 'text-purple-600 hover:text-purple-700'
    },
    { 
      icon: FileText, 
      label: 'Resume', 
      href: 'https://drive.google.com/file/d/1A7tSV9T6Sfo1JRQqeDnZbfceak4JrhRO/view?usp=share_link',
      color: 'text-green-600 hover:text-green-700'
    },
  ];

  return (
    <motion.section 
      id="about" 
      className="py-16 sm:py-24 bg-alt"
      ref={animation.ref}
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
    >
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 crisp-text">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 crisp-gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Get to know me better
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <User className="h-4 w-4 sm:h-5 sm:w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <Badge variant="outline" className="p-1.5 sm:p-2 flex-shrink-0">
                      <info.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Badge>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs sm:text-sm text-muted-foreground">{info.label}:</span>
                      <span className="ml-1 sm:ml-2 font-medium text-sm sm:text-base break-words">{info.value}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  Contact & Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {contactLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg border hover:bg-muted/50 transition-all duration-200 hover:scale-105 group"
                    >
                      <div className={`p-2 rounded-full bg-muted/50 group-hover:bg-muted transition-colors ${link.color}`}>
                        <link.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-center">{link.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">My Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  Software engineer with 6+ years of experience specializing in scalable web application development using React, TypeScript. Proven success in building high-performance and maintainable codebase for enterprise-scale products.
                </p>
                <p>
                  Experienced in collaborating with cross-functional teams, translating Figma designs into production-ready UI, and delivering solutions for clients like Netflix, Disney, Apple, and Fox News.
                </p>
                <p>
                  Passionate about building maintainable, scalable, and high-performance web applications.
                </p>
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <Card>
                  <CardContent className="text-center p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-blue-500 dark:text-blue-400">6+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="text-center p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-blue-500 dark:text-blue-400">10+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Enterprise Projects</div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default About; 