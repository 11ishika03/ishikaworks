
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <p className="text-lg mb-6">
              <span className="font-semibold text-primary">Final-year B.Tech Information Technology student</span> at Vellore Institute of Technology, graduating in May 2025, with a strong interest in software development, data analytics, and cyber security.
            </p>
            <p className="text-lg mb-6">
              <span className="font-semibold text-primary">Passionate about problem-solving, coding, and exploring new technologies.</span> A fast learner and dedicated professional who thrives in dynamic environments.
            </p>
            <p className="text-lg mb-8">
              Eager to grow, take on challenges, and make meaningful contributions to the tech industry.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-2">🎓</div>
                    <div>
                      <div className="font-medium">B.Tech – Vellore Institute of Technology (2025)</div>
                      <div className="text-foreground/70">CGPA: 7.50</div>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-2">🎓</div>
                    <div>
                      <div className="font-medium">12th – Sri Chaitanya Junior Kalasala (2021)</div>
                      <div className="text-foreground/70">GPA: 9.70</div>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-2">🎓</div>
                    <div>
                      <div className="font-medium">10th – St. Joseph's Convent High School (2019)</div>
                      <div className="text-foreground/70">GPA: 9.70</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <Link to="/about" className="flex items-center text-primary hover:underline transition-colors font-medium">
                Learn More <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <div className="aspect-[3/4] bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center text-white">
                  {/* Replace with actual photo later */}
                  <span className="text-4xl font-bold">Ishika Khandelwal</span>
                </div>
              </div>
              <div className="absolute top-4 -right-4 w-40 h-40 bg-secondary rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-primary/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
