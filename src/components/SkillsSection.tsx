
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
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">{skillGroup.category}</h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h4 className="text-lg font-medium mb-2">AWS Cloud Practitioner – 2024</h4>
              <a href="#" className="text-primary hover:underline">Certificate Link</a>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
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
