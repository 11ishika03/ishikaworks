
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-purple-500/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-brown">About Me</h2>
          <div className="w-20 h-1 bg-dark-brown mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto backdrop-blur-sm bg-card/30 p-8 rounded-2xl border border-primary/10 shadow-xl">
          <p className="text-lg mb-6">
            <span className="font-semibold text-primary">Final-year B.Tech Information Technology student</span> at Vellore Institute of Technology, graduating in May 2025, with a strong interest in software development, data analytics, and cyber security.
          </p>
          <p className="text-lg mb-6">
            <span className="font-semibold text-primary">Passionate about problem-solving, coding, and exploring new technologies.</span> A fast learner and dedicated professional who thrives in dynamic environments.
          </p>
          <p className="text-lg mb-8">
            Eager to grow, take on challenges, and make meaningful contributions to the tech industry.
          </p>
          
          <div className="space-y-6 mt-10">
            <div>
              <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">Education</h3>
              <ul className="space-y-4">
                <li className="flex p-3 bg-card/50 rounded-lg hover:bg-card/70 transition-all">
                  <div className="mr-2">🎓</div>
                  <div>
                    <div className="font-medium">B.Tech – Vellore Institute of Technology (2025)</div>
                    <div className="text-foreground/70">CGPA: 7.59</div>
                  </div>
                </li>
                <li className="flex p-3 bg-card/50 rounded-lg hover:bg-card/70 transition-all">
                  <div className="mr-2">🎓</div>
                  <div>
                    <div className="font-medium">12th – Sri Chaitanya Junior Kalasala (2021)</div>
                    <div className="text-foreground/70">GPA: 9.70</div>
                  </div>
                </li>
                <li className="flex p-3 bg-card/50 rounded-lg hover:bg-card/70 transition-all">
                  <div className="mr-2">🎓</div>
                  <div>
                    <div className="font-medium">10th – St. Joseph's Convent High School (2019)</div>
                    <div className="text-foreground/70">GPA: 9.70</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/about" className="inline-flex items-center justify-center text-primary hover:text-purple-400 transition-colors font-medium group">
              Learn More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
