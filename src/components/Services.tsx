
import React from 'react';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Product Strategy Consulting",
      description: "UX research, persona definition, idea validation, prioritization",
      icon: "🎯",
      features: ["User Research", "Market Analysis", "Product Roadmapping", "Competitive Analysis"],
      gradient: "from-primary to-blue-600"
    },
    {
      title: "Video Editing",
      description: "30+ content pieces created for creators and startups (reels, promos, explainers)",
      icon: "🎥",
      features: ["Social Media Content", "Brand Videos", "Explainer Videos", "Event Coverage"],
      gradient: "from-secondary to-green-600"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Services</h2>
          <p className="text-xl text-muted-foreground">What I can help you with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="p-8 card-hover bg-gradient-to-br from-card to-muted/20 border-2 hover:border-primary/20 transition-all duration-300">
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-3xl mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
