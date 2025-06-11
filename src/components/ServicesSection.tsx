
import { 
  Code, 
  Database, 
  BarChart, 
  Cloud, 
  Shield,
  Palette
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Full-stack Web Development (MERN)",
      description: "Building responsive and dynamic web applications using MongoDB, Express.js, React, and Node.js.",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "UI/UX Design & Prototyping",
      description: "Creating intuitive and visually appealing user interfaces with modern design principles and user-centered approach.",
      icon: <Palette className="w-8 h-8" />
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
    <section className="section-padding bg-cream-50 dark:bg-secondary/30 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-medium mb-4 text-foreground">Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-secondary/50 p-4 rounded-xl inline-block mb-6 transform transition-all group-hover:scale-110 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-medium mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
