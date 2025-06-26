
import React from 'react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Video Editor & Strategist",
      period: "2022–Present",
      description: "Creating compelling video content for creators and brands",
      icon: "🎬"
    },
    {
      title: "Secretary – Alpha Productions",
      period: "2025–Present",
      description: "Leading production teams and managing creative projects",
      icon: "🎭"
    },
    {
      title: "Event Head – Advitiya",
      period: "2025",
      description: "Organizing and executing large-scale events",
      icon: "🎪"
    },
    {
      title: "Coordinator – Alpha Productions",
      period: "2024–2025",
      description: "Coordinating production activities and team management",
      icon: "🎨"
    },
    {
      title: "Media Head – Aarohan",
      period: "2024 & 2025",
      description: "Overseeing media strategy for major college events",
      icon: "📺"
    },
    {
      title: "Mentor – ISMP, IIT Ropar",
      period: "2024–2025",
      description: "Guiding students in their academic and career journey",
      icon: "🎓"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Experience & Leadership</h2>
          <p className="text-xl text-muted-foreground">My journey through various roles and responsibilities</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary items-center justify-center text-2xl flex-shrink-0 relative z-10">
                    {exp.icon}
                  </div>
                  
                  <Card className="flex-1 p-6 card-hover">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <span className="text-primary font-semibold">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
