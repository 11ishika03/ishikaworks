
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-28 pb-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
            <p className="max-w-2xl mx-auto text-foreground/70">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
          
          <div className="max-w-xl mx-auto">
            <div className="bg-card rounded-xl shadow-sm p-6 md:p-8 border border-border">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-3 bg-primary/10 rounded-full text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <a href="mailto:khandelwalishika09@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
                      khandelwalishika09@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-3 bg-primary/10 rounded-full text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <a href="tel:+916303136689" className="text-foreground/70 hover:text-primary transition-colors">
                      +91-6303136689
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-3 bg-primary/10 rounded-full text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Location</h3>
                    <p className="text-foreground/70">Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Social Media</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-secondary rounded-full text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-secondary rounded-full text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="mailto:khandelwalishika09@gmail.com" 
                    className="p-3 bg-secondary rounded-full text-foreground/80 hover:text-primary transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
