import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-animations";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const animation = useScrollAnimation();
  
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alechsu83@gmail.com',
      link: 'mailto:alechsu83@gmail.com'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/alechsu83',
      link: 'https://linkedin.com/in/alechsu83'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-16 sm:py-24 bg-background"
      ref={animation.ref}
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
    >
      <div className="container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 crisp-text">
            Get In <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 crisp-gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            I'm always open to discussing new opportunities, collaborations, or just connecting with fellow developers
          </p>
        </div>

        <motion.div 
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Card className="dark:bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="flex items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Badge variant="outline" className="p-1.5 sm:p-2 flex-shrink-0">
                    <info.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Badge>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs sm:text-sm text-muted-foreground">{info.label}:</span>
                    <span className="ml-1 sm:ml-2 font-medium text-sm sm:text-base break-words">{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact; 