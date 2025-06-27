
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Download, Mail, Linkedin, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">Let's Connect</h2>
          <p className="text-xl text-muted-foreground">Ready to collaborate? Let's discuss your next project</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a href="mailto:2023ceb1024@iitrpr.ac.in" className="text-primary hover:underline">
                      2023ceb1024@iitrpr.ac.in
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/animesh-anand-iitrpr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      linkedin.com/in/animesh-anand-iitrpr
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Instagram className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Instagram</h4>
                    <div className="space-y-1">
                      <a 
                        href="https://instagram.com/animesh_anand_official" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-primary hover:underline"
                      >
                        @animesh_anand_official
                      </a>
                      <a 
                        href="https://instagram.com/animesh.tales" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-primary hover:underline"
                      >
                        @animesh.tales
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-r from-primary to-secondary text-white">
              <h3 className="text-2xl font-bold mb-4">Download Resume</h3>
              <p className="mb-6 opacity-90">
                Get a detailed overview of my experience, skills, and achievements.
              </p>
              <Button 
                asChild
                className="bg-white text-primary hover:bg-white/90"
              >
                <a
                  href="https://drive.google.com/drive/folders/1GhT7gIMCUsEM5dMpPvAXG3QS-OraKTT4?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
