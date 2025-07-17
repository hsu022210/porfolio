import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-animations";

const Education = () => {
  const animation = useScrollAnimation();
  const educationAnimation = useScrollAnimation({ staggerDelay: 0.3 });
  
  const education = [
    {
      degree: "M.S. in Computer Science",
      school: "University of San Francisco",
      location: "San Francisco, CA",
      period: "Aug 2016 – May 2018"
    },
    {
      degree: "B.Eng. in Mechanical Engineering",
      school: "National Taipei University of Technology",
      location: "Taipei, Taiwan",
      period: "Aug 2012 – June 2016"
    }
  ];

  return (
    <motion.section 
      id="education" 
      className="py-16 sm:py-20 bg-alt"
      ref={animation.ref}
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 crisp-text">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 crisp-gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            My academic background and achievements that have shaped my technical foundation.
          </p>
        </div>

        <motion.div 
          className="max-w-4xl mx-auto"
          ref={educationAnimation.ref}
          variants={educationAnimation.containerVariants}
          initial="hidden"
          animate={educationAnimation.isInView ? "visible" : "hidden"}
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={educationAnimation.itemVariants}>
              <Card className="mb-4 sm:mb-6 dark:bg-card/50">
                <CardHeader className="pb-3 sm:pb-6">
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <GraduationCap className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <CardTitle className="text-lg sm:text-xl mb-1">{edu.degree}</CardTitle>
                      <p className="text-base sm:text-lg font-medium text-primary">{edu.school}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="break-words">{edu.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education; 