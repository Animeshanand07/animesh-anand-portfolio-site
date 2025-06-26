
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "BOSA Portal",
      subtitle: "SaaS product to digitize sports equipment management at IIT Ropar",
      tech: "SaaS project, Innovation, data-driven solution",
      image: "/lovable-uploads/2518d214-f819-46db-b782-89d87ae014f9.png",
      link: "https://www.canva.com/design/DAGrA4v85uk/jODT92J0tMkpfokJUesewQ/view?utm_content=DAGrA4v85uk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcf067ea897",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Zepto Case Study",
      subtitle: "UX improvements for better search-to-cart conversion using RICE framework",
      tech: "UX Research, RICE Framework, Data Analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "https://drive.google.com/file/d/13nxc957x-wNgWeI3rN0KTPMwHaP0Adr9/view",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Streamstreak Elevate - A mock edtech startup",
      subtitle: "AI-powered upskilling platform with GTM strategy, personas, and positioning",
      tech: "AI/ML, EdTech, Go-to-Market Strategy",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      link: "https://www.canva.com/design/DAGqWsIwly4/brLLlAHz5DZURA49V-2qfw/view?utm_content=DAGqWsIwly4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4d47c59b34#1",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">A showcase of my recent work and case studies</p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.subtitle}</p>
                <p className="text-sm text-primary mb-6 font-medium">{project.tech}</p>
                
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 group/btn"
                >
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Open Project
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
