
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Full-stack Web Development (MERN)",
      description: "Building responsive and dynamic web applications using MongoDB, Express.js, React, and Node.js. I develop complete solutions from database design to user interface implementation.",
      features: [
        "RESTful API development",
        "User authentication & authorization",
        "Responsive UI/UX design",
        "Database design and integration",
        "Frontend state management with Redux"
      ],
      icon: "💻"
    },
    {
      title: "UI/UX Design & Prototyping",
      description: "Creating intuitive and visually appealing user interfaces with modern design principles and user-centered approach. I focus on delivering seamless user experiences across all platforms.",
      features: [
        "User research and persona development",
        "Wireframing and high-fidelity mockups",
        "Interactive prototyping with Figma",
        "Design system creation",
        "Responsive design for all devices"
      ],
      icon: "🎨"
    },
    {
      title: "Machine Learning Model Development",
      description: "Developing and training custom machine learning models for various use cases and domains. I create solutions for classification, regression, clustering, and more.",
      features: [
        "Data preprocessing and cleaning",
        "Feature engineering",
        "Model selection and hyperparameter tuning",
        "Evaluation metrics and validation",
        "Model deployment and monitoring"
      ],
      icon: "🤖"
    },
    {
      title: "Data Analysis & Visualization",
      description: "Analyzing complex data sets and creating meaningful visualizations for insights and decision-making. I transform raw data into actionable information.",
      features: [
        "Exploratory data analysis",
        "Statistical analysis",
        "Interactive dashboard creation",
        "Business intelligence reporting",
        "Data storytelling"
      ],
      icon: "📊"
    },
    {
      title: "Basic Cloud Deployment (AWS)",
      description: "Deploying applications on AWS cloud infrastructure with basic configuration and security. I help take your applications from local to global.",
      features: [
        "EC2 instance configuration",
        "S3 storage management",
        "Security group setup",
        "Docker container deployment",
        "Basic CI/CD pipeline implementation"
      ],
      icon: "☁️"
    },
    {
      title: "Cybersecurity Research",
      description: "Conducting cybersecurity research including honeypot setup, threat analysis, and vulnerability assessment. I help identify and mitigate security risks.",
      features: [
        "Honeypot deployment and monitoring",
        "Attack pattern analysis",
        "Security best practices implementation",
        "Vulnerability scanning",
        "Basic penetration testing"
      ],
      icon: "🔐"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-28 pb-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-medium mb-4">Services</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-foreground/70 leading-relaxed">
              I offer a range of technical services to help businesses and individuals achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="p-6 md:p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-heading font-medium mb-3">{service.title}</h3>
                  <p className="text-foreground/80 mb-6 leading-relaxed">{service.description}</p>
                  
                  <h4 className="text-lg font-medium mb-3">What's Included:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-heading font-medium mb-6">Ready to Work Together?</h2>
            <p className="max-w-2xl mx-auto text-foreground/80 mb-8 leading-relaxed">
              If you're interested in any of my services or would like to discuss a custom project, feel free to get in touch.
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
