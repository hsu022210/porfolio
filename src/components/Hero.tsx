import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { config } from "@/lib/config";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-secondary/30" />
      <div className="container relative z-10 flex flex-col items-center text-center gap-4 sm:gap-6 py-16 sm:py-24 px-4">
        <Avatar className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 shadow-lg">
          <AvatarImage src="/avatar.png" alt="Alec Hsu" className="object-cover avatar-image" />
          <AvatarFallback className="text-2xl sm:text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">A</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 crisp-text px-2">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 crisp-gradient-text">Alec Hsu</span>
        </h1>
        <Badge variant="outline" className="text-base sm:text-lg px-3 sm:px-4 py-1 sm:py-2 mb-2 crisp-text">Web Developer</Badge>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4 crisp-text px-4">
          Software engineer with 6+ years of experience specializing in scalable web application development using React, TypeScript. Proven success in building high-performance and maintainable codebase for enterprise-scale products.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4 w-full max-w-sm sm:max-w-none">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a
              href={config.resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4 sm:h-5 sm:w-5" />
              Download {config.resume.label}
            </a>
          </Button>
        </div>
        <div className="flex justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Button asChild variant="ghost" size="icon">
            <a
              href={config.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a
              href={config.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a
              href={`mailto:${config.contact.email}`}
              aria-label="Email"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </Button>
        </div>
        
        <Button variant="link" size="sm" onClick={scrollToAbout} className="flex flex-col items-center text-muted-foreground">
          <span className="text-xs sm:text-sm mb-1 sm:mb-2">Scroll Down</span>
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero; 