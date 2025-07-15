import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alechsu83@gmail.com',
      link: 'mailto:alechsu83@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/alechsu83',
      link: 'https://linkedin.com/in/alechsu83'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 crisp-text">
            Get In <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 crisp-gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just connecting with fellow developers
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
                      <Card className="dark:bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge variant="outline" className="p-2">
                    <info.icon className="h-4 w-4" />
                  </Badge>
                  <div>
                    <span className="text-sm text-muted-foreground">{info.label}:</span>
                    <span className="ml-2 font-medium">{info.value}</span>
                  </div>
                </a>
              ))}


            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact; 