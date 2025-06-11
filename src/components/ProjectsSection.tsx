
import { Link } from "react-router-dom";
import { ArrowRight, Github, Figma } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Music Streaming App",
      description: "A full-fledged music streaming web application built with the MERN stack featuring user authentication, music library browsing, playlist creation, and playback controls.",
      link: "https://github.com",
      linkText: "GitHub",
      linkIcon: Github,
      icon: "🎵"
    },
    {
      title: "E-Commerce Fraud Detection",
      description: "Machine learning model to detect fraudulent transactions in e-commerce platforms using Python, Scikit-learn, and Pandas.",
      link: "https://drive.google.com",
      linkText: "Google Drive",
      linkIcon: Github,
      icon: "📊"
    },
    {
      title: "House Price Prediction",
      description: "Regression model to predict house prices based on various features using Python, TensorFlow and data visualization tools.",
      link: "https://github.com",
      linkText: "GitHub",
      linkIcon: Github,
      icon: "🏠"
    },
    {
      title: "Financify– Finance App UI (Figma)",
      description: "Designed a mobile-first personal finance app UI using Figma, focused on intuitive user experience and visual clarity. Created high-fidelity wireframes and interactive prototypes for features including expense tracking, budgeting, savings goals, and transaction history.",
      link: "https://www.figma.com/proto/AckzWv2peW5F5iLh6AJZhg/Financify?node-id=79-40&t=GU4s9AfXJ4GsqrLn-6&starting-point-node-id=212%3A1",
      linkText: "Figma Prototype",
      linkIcon: Figma,
      icon: "💰"
    },
    {
      title: "Intruder Insight: Honeypot Snapshot",
      description: "A cybersecurity tool that creates honeypots to analyze attack patterns and provide security insights using Python.",
      link: "https://github.com",
      linkText: "GitHub",
      linkIcon: Github,
      icon: "🔒"
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-medium mb-4 text-foreground">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border transition-transform hover:-translate-y-1 hover:shadow-md group"
            >
              <div className="p-8">
                <div className="text-5xl mb-6 transform transition-all group-hover:scale-110">{project.icon}</div>
                <h3 className="text-xl font-heading font-medium mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary border border-primary/30 px-4 py-2 rounded-full hover:bg-primary/10 transition-colors text-sm"
                >
                  <project.linkIcon size={16} className="mr-2" />
                  {project.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            to="/projects" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-primary/20"
          >
            View All Projects <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
