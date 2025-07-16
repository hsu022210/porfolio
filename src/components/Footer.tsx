import { Button } from "@/components/ui/button";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-8 sm:py-12 dark:bg-gradient-to-t dark:from-secondary/20 dark:to-background">
      <div className="container">
        <div className="text-center">
          <div className="flex justify-center items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
            <Button asChild variant="ghost" size="icon">
              <a
                href="https://github.com/hsu022210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a
                href="https://www.linkedin.com/in/alechsu83/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a
                href="mailto:alechsu83@gmail.com"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </Button>
          </div>

          <div className="text-muted-foreground text-xs sm:text-sm">
            <p className="mb-2">
              © {currentYear} AlecHsu. All rights reserved.
            </p>
            <p className="flex items-center justify-center gap-1">
              Made with <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" /> using React, TypeScript, Vite, and shadcn/ui
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 