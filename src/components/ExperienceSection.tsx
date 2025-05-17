
export function ExperienceSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 sm:pl-12 py-6 group">
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row items-start mb-4 group-hover:text-primary transition-colors">
                <div className="flex items-center mb-2 sm:mb-0">
                  <h3 className="text-xl font-bold">AI-ML Developer Intern</h3>
                </div>
                <div className="sm:ml-auto text-foreground/70 bg-primary/10 px-3 py-1 rounded-full text-sm">Aug 2024 – Oct 2024</div>
              </div>
              
              <h4 className="text-lg font-medium mb-4 text-primary">Next24tech Technology & Services</h4>
              
              <ul className="list-none space-y-3 text-foreground/80">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span>Developed 3 key projects using Python, OpenCV, TensorFlow, Twilio API</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span>Worked on ML, CV, deep learning techniques</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span>Built solutions for safety, agriculture, and weather alerts</span>
                </li>
              </ul>
            </div>
            
            {/* Timeline dot and line */}
            <div className="absolute left-0 top-8 sm:left-4 h-full w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
            <div className="absolute left-0 sm:left-4 top-8 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(139,92,246,0.5)] -translate-x-1/2 z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
