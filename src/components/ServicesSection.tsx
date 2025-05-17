
export function ServicesSection() {
  const services = [
    {
      title: "Full-stack Web Development (MERN)",
      description: "Building responsive and dynamic web applications using MongoDB, Express.js, React, and Node.js.",
      icon: "💻"
    },
    {
      title: "Machine Learning Model Development",
      description: "Developing and training custom machine learning models for various use cases and domains.",
      icon: "🤖"
    },
    {
      title: "Data Analysis & Visualization",
      description: "Analyzing complex data sets and creating meaningful visualizations for insights and decision-making.",
      icon: "📊"
    },
    {
      title: "Basic Cloud Deployment (AWS)",
      description: "Deploying applications on AWS cloud infrastructure with basic configuration and security.",
      icon: "☁️"
    },
    {
      title: "Cybersecurity Research",
      description: "Conducting cybersecurity research including honeypot setup, threat analysis, and vulnerability assessment.",
      icon: "🔐"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:border-primary/50 transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
