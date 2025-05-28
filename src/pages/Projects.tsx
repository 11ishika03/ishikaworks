
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Github, Figma } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Music Streaming App",
      description: "A full-fledged music streaming web application built with the MERN stack. Features include user authentication, music library browsing with dynamic search, playlist creation, track management, and playback controls with visual cues and real-time updates. Focused on creating a user-centric experience with a clean UI and good performance.",
      technologies: ["React.js", "Express.js", "MongoDB", "Node.js", "Redux"],
      link: "https://github.com",
      linkType: "GitHub",
      linkIcon: Github,
      icon: "🎵"
    },
    {
      title: "E-Commerce Fraud Detection",
      description: "A machine learning model that identifies fraudulent transactions in e-commerce platforms. Using Python, scikit-learn, and pandas, this project implements various classification algorithms to detect unusual patterns in transaction data.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      link: "https://drive.google.com",
      linkType: "Google Drive",
      linkIcon: Github,
      icon: "📊"
    },
    {
      title: "House Price Prediction",
      description: "A regression model that predicts housing prices based on features like square footage, location, number of bedrooms, etc. Built with Python, TensorFlow, and data visualization tools to provide accurate price estimates.",
      technologies: ["Python", "TensorFlow", "Pandas", "Seaborn"],
      link: "https://github.com",
      linkType: "GitHub",
      linkIcon: Github,
      icon: "🏠"
    },
    {
      title: "Financify– Finance App UI (Figma)",
      description: "Designed a mobile-first personal finance app UI using Figma, focused on intuitive user experience and visual clarity. Created high-fidelity wireframes and interactive prototypes for features including expense tracking, budgeting, savings goals, and transaction history. Applied principles of design thinking and user-centric design to streamline navigation and improve usability. Incorporated modern UI elements, consistent design system, and responsive layout for seamless cross-device adaptability.",
      technologies: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"],
      link: "https://www.figma.com/proto/AckzWv2peW5F5iLh6AJZhg/Financify?node-id=79-40&t=GU4s9AfXJ4GsqrLn-6&starting-point-node-id=212%3A1",
      linkType: "Figma Prototype",
      linkIcon: Figma,
      icon: "💰"
    },
    {
      title: "Intruder Insight: Honeypot Snapshot",
      description: "A cybersecurity tool that deploys honeypots to attract and analyze attack patterns. The system records intrusion attempts and provides comprehensive security insights to help organizations enhance their defenses.",
      technologies: ["Python", "Network Security", "MongoDB", "Flask"],
      link: "https://github.com",
      linkType: "GitHub",
      linkIcon: Github,
      icon: "🔒"
    },
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built with React, Tailwind CSS, and modern web technologies to showcase skills, projects, and professional experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      link: "https://github.com",
      linkType: "GitHub",
      linkIcon: Github,
      icon: "💻"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-28 pb-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
            <p className="max-w-2xl mx-auto text-foreground/70">
              Here are some of the projects I've worked on. Each project reflects my skills, interests, and growth as a developer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-sm border border-border transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-secondary text-foreground/80 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    <project.linkIcon size={18} className="mr-2" />
                    {project.linkType}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;
