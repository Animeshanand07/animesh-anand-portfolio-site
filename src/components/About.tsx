import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-xl text-muted-foreground">Getting to know the person behind the work</p>
        </div>

        <div className=" items-center">
          <div className="flex justify-center">
            
          </div>

          <div className="space-y-6">
            <Card className="p-8 card-hover">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Who am I ?</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a pre-final year undergraduate at IIT Ropar, deeply passionate about product innovation 
                and market strategy. With a strong foundation in user research, data-driven thinking, and 
                cross-functional collaboration, I thrive at the intersection of design, tech, and business.
              </p>
              <br />
              <p className="text-muted-foreground leading-relaxed">
                Alongside my product interests, I'm also a professional video editor with a portfolio of 
                freelance projects delivered to creators, startups, and brands — enabling me to bring 
                storytelling and customer-centric thinking into every project I undertake.
              </p>
              <br />
              <p className="text-muted-foreground leading-relaxed">
                I'm actively exploring opportunities in product management where I can contribute with a 
                blend of creative execution, analytical mindset, and user-first thinking.
              </p>
            </Card>

            <Card className="p-8 card-hover">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Education</h3>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">IIT</span>
                </div>
                <div>
                  <h4 className="font-semibold">B.Tech in Civil Engineering</h4>
                  <p className="text-muted-foreground">IIT Ropar (2023–2027)</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;