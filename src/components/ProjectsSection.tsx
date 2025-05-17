
import { Link } from "react-router-dom";
import { ArrowRight, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Fraud Detection",
      description: "Machine learning model to detect fraudulent transactions in e-commerce platforms using Python, Scikit-learn, and Pandas.",
      link: "https://drive.google.com",
      linkText: "Google Drive",
      icon: "📊"
    },
    {
      title: "House Price Prediction",
      description: "Regression model to predict house prices based on various features using Python, TensorFlow and data visualization tools.",
      link: "https://github.com",
      linkText: "GitHub",
      icon: "🏠"
    },
    {
      title: "Intruder Insight: Honeypot Snapshot",
      description: "A cybersecurity tool that creates honeypots to analyze attack patterns and provide security insights using Python.",
      link: "https://github.com",
      linkText: "GitHub",
      icon: "🔒"
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-sm border border-border transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  <Github size={18} className="mr-2" />
                  {project.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/projects" className="btn-primary inline-flex items-center">
            View All Projects <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
