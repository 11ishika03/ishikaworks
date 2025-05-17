
export function AchievementsSection() {
  const achievements = [
    "Trained Bharatanatyam Dancer",
    "State-Level: Badminton & Throw Ball",
    "Event Coordinator: Aikya @ Riviera 2024"
  ];

  const languages = ["English", "Hindi", "Telugu", "Marwari", "Beginner French"];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">Achievements & Interests</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-primary/10 transform transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-primary">Achievements</h3>
            </div>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-center group">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3 group-hover:w-3 group-hover:h-3 transition-all"></div>
                  <span className="group-hover:text-primary transition-colors">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-card/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-primary/10 transform transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-primary">Languages</h3>
            </div>
            <ul className="space-y-4">
              {languages.map((language, index) => (
                <li key={index} className="flex items-center group">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3 group-hover:w-3 group-hover:h-3 transition-all"></div>
                  <span className="group-hover:text-primary transition-colors">{language}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;
