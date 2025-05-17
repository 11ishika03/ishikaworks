
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-28 pb-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
            <p className="max-w-2xl mx-auto text-foreground/70">
              My professional journey and work experience in the tech industry.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-primary/30 pl-8 sm:pl-12 py-12">
              {/* Experience 1 */}
              <div className="mb-16 relative">
                <div className="absolute -left-[41px] sm:-left-[49px] top-0 w-5 h-5 rounded-full bg-primary"></div>
                
                <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h2 className="text-2xl font-semibold">AI-ML Developer Intern</h2>
                    <span className="text-primary font-medium">Aug 2024 – Oct 2024</span>
                  </div>
                  
                  <h3 className="text-xl font-medium mb-4 text-primary">Next24tech Technology & Services</h3>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-foreground/80">
                      As an AI-ML Developer Intern at Next24tech, I worked on developing machine learning solutions for various real-world problems. I gained hands-on experience with computer vision, deep learning, and API integration.
                    </p>
                  </div>
                  
                  <h4 className="text-lg font-medium mb-3">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                    <li>Developed 3 key projects using Python, OpenCV, TensorFlow, Twilio API</li>
                    <li>Worked on ML, CV, deep learning techniques</li>
                    <li>Built solutions for safety, agriculture, and weather alerts</li>
                    <li>Collaborated with team members to integrate ML models with existing systems</li>
                    <li>Documented project architectures and implementation details</li>
                  </ul>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-medium mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm bg-secondary text-foreground/80 px-3 py-1 rounded-full">Python</span>
                      <span className="text-sm bg-secondary text-foreground/80 px-3 py-1 rounded-full">TensorFlow</span>
                      <span className="text-sm bg-secondary text-foreground/80 px-3 py-1 rounded-full">OpenCV</span>
                      <span className="text-sm bg-secondary text-foreground/80 px-3 py-1 rounded-full">Twilio API</span>
                      <span className="text-sm bg-secondary text-foreground/80 px-3 py-1 rounded-full">Pandas</span>
                      <span className="text-sm bg-secondary text-foreground/80 px-3 py-1 rounded-full">NumPy</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Experience 2 - Additional positions can be added in the future */}
              <div className="relative">
                <div className="absolute -left-[41px] sm:-left-[49px] top-0 w-5 h-5 rounded-full bg-secondary"></div>
                
                <div className="bg-card/50 rounded-xl p-6 md:p-8 border border-dashed border-border">
                  <h2 className="text-2xl font-semibold mb-4">Ready for New Opportunities</h2>
                  <p className="text-foreground/80">
                    I am actively seeking new opportunities to apply and expand my skills in software development, data analytics, and cybersecurity. If you're looking for a dedicated and passionate professional for your team, I'd love to connect!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Experience;
