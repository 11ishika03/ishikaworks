
export function ExperienceSection() {
  return (
    <section className="section-padding bg-cream-50 dark:bg-secondary/30 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-medium mb-4 text-foreground">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-12 py-6 group">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row items-start mb-4 group-hover:text-primary transition-colors">
                <div className="flex items-center mb-2 sm:mb-0">
                  <h3 className="text-2xl font-heading font-medium">AI-ML Developer Intern</h3>
                </div>
                <div className="sm:ml-auto text-foreground/70 bg-secondary px-3 py-1 rounded-full text-sm border border-border">Aug 2024 – Oct 2024</div>
              </div>
              
              <h4 className="text-lg font-medium mb-6 text-primary">Next24tech Technology & Services</h4>
              
              <ul className="list-none space-y-4 text-foreground/80">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></div>
                  <span className="leading-relaxed">Developed 3 key projects using Python, OpenCV, TensorFlow, Twilio API</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></div>
                  <span className="leading-relaxed">Worked on ML, CV, deep learning techniques</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0"></div>
                  <span className="leading-relaxed">Built solutions for safety, agriculture, and weather alerts</span>
                </li>
              </ul>
            </div>
            
            {/* Timeline dot and line */}
            <div className="absolute left-0 top-8 sm:left-4 h-full w-[2px] bg-primary/30"></div>
            <div className="absolute left-0 sm:left-4 top-8 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10 shadow-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
