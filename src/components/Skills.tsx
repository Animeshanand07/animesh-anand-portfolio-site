
import React from 'react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "🚀 AI & Technical Tools",
      icon: "💻",
      skills: ["Figma", "ChatGPT", "Canva", "Notion", "Python (basic)", "SQL (beginner)", "Power BI", "Google Analytics", "Textify Analytics", "NotebookLM", "GenAI", "LLMs"],
      color: "from-primary to-blue-600"
    },
    {
      title: "📊 Product & Analytics",
      icon: "📈",
      skills: ["User Persona Creation", "Agile & Waterfall", "Business Model Canvas", "Research & Analysis"],
      color: "from-secondary to-green-600"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground">Technologies and methodologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-8 card-hover bg-gradient-to-br from-card to-muted/20">
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl mb-4 mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
