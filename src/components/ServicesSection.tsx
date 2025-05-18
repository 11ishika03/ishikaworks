
import { 
  Code, 
  Database, 
  BarChart, 
  Cloud, 
  Shield 
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Full-stack Web Development (MERN)",
      description: "Building responsive and dynamic web applications using MongoDB, Express.js, React, and Node.js.",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "Machine Learning Model Development",
      description: "Developing and training custom machine learning models for various use cases and domains.",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "Data Analysis & Visualization",
      description: "Analyzing complex data sets and creating meaningful visualizations for insights and decision-making.",
      icon: <BarChart className="w-8 h-8" />
    },
    {
      title: "Basic Cloud Deployment (AWS)",
      description: "Deploying applications on AWS cloud infrastructure with basic configuration and security.",
      icon: <Cloud className="w-8 h-8" />
    },
    {
      title: "Cybersecurity Research",
      description: "Conducting cybersecurity research including honeypot setup, threat analysis, and vulnerability assessment.",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-purple-500/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card/60 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-primary/10 hover:border-primary/30 hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-br from-primary/10 to-purple-400/10 p-4 rounded-lg inline-block mb-6 transform transition-all group-hover:scale-110 group-hover:rotate-3 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
