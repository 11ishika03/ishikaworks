export function SkillsSection() {
  const skills = [
    {
      category: "Languages",
      items: ["C/C++", "Python", "JavaScript"]
    },
    {
      category: "Databases",
      items: ["SQL", "MongoDB", "MySQL"]
    },
    {
      category: "Technologies & Frameworks",
      items: ["HTML", "CSS", "Bootstrap", "React JS"]
    },
    {
      category: "Domains",
      items: ["Software Development", "Data Analytics", "Cyber Security"]
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-brown">My Skills</h2>
          <div className="w-20 h-1 bg-dark-brown mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">{skillGroup.category}</h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx} className="flex items-center group/item">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3 group-hover/item:w-3 group-hover/item:h-3 transition-all"></div>
                    <span className="group-hover/item:text-primary transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">AWS Cloud Practitioner – 2024</h4>
              <a href="#" className="text-primary hover:underline">Certificate Link</a>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">MERN Fullstack – 2023</h4>
              <a href="#" className="text-primary hover:underline">Certificate Link</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
