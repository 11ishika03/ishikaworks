
export function ExperienceSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 sm:pl-12 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-primary transition-colors">
              <div className="flex items-center mb-1 sm:mb-0">
                <h3 className="text-xl font-bold">AI-ML Developer Intern</h3>
              </div>
              <div className="sm:ml-auto text-foreground/70">Aug 2024 – Oct 2024</div>
            </div>
            
            <h4 className="text-lg font-medium mb-2 text-primary">Next24tech Technology & Services</h4>
            
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Developed 3 key projects using Python, OpenCV, TensorFlow, Twilio API</li>
              <li>Worked on ML, CV, deep learning techniques</li>
              <li>Built solutions for safety, agriculture, and weather alerts</li>
            </ul>
            
            {/* Timeline dot */}
            <div className="absolute left-0 top-8 sm:left-4 h-full w-[1px] bg-border"></div>
            <div className="absolute left-0 sm:left-4 top-8 w-2 h-2 rounded-full bg-primary -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
