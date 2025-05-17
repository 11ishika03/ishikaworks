
export function AchievementsSection() {
  const achievements = [
    "Trained Bharatanatyam Dancer",
    "State-Level: Badminton & Throw Ball",
    "Event Coordinator: Aikya @ Riviera 2024"
  ];

  const languages = ["English", "Hindi", "Telugu", "Marwari", "Beginner French"];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Interests</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card rounded-xl shadow-sm p-6 md:p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Achievements</h3>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-card rounded-xl shadow-sm p-6 md:p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Languages</h3>
            <ul className="space-y-4">
              {languages.map((language, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  <span>{language}</span>
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
