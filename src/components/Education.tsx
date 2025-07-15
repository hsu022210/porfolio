import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

const Education = () => {
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
    <section id="education" className="py-20 bg-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold mb-4 crisp-text">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 crisp-gradient-text">Education</span>
            </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and achievements that have shaped my technical foundation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="mb-6 animate-fade-in dark:bg-card/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <p className="text-lg font-medium text-primary">{edu.school}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 