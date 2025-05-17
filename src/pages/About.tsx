
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-28 pb-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="rounded-2xl overflow-hidden">
                <div className="aspect-[3/4] bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center text-white">
                  {/* Replace with actual photo later */}
                  <span className="text-4xl font-bold">Ishika Khandelwal</span>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-lg mb-6">
                <span className="font-semibold text-primary">Final-year B.Tech Information Technology student</span> at Vellore Institute of Technology, graduating in May 2025, with a strong interest in software development, data analytics, and cyber security.
              </p>
              <p className="text-lg mb-6">
                <span className="font-semibold text-primary">Passionate about problem-solving, coding, and exploring new technologies.</span> A fast learner and dedicated professional who thrives in dynamic environments.
              </p>
              <p className="text-lg mb-6">
                Eager to grow, take on challenges, and make meaningful contributions to the tech industry.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/contact" className="btn-primary flex items-center gap-2">
                  Contact Me <ArrowRight size={18} />
                </Link>
                <Link to="/projects" className="btn-outline">
                  View Projects
                </Link>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold">B.Tech – Information Technology</h3>
                  <span className="text-primary font-medium">2021 - 2025</span>
                </div>
                <p className="text-foreground/70">Vellore Institute of Technology</p>
                <p className="mt-2 font-medium">CGPA: 7.50</p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold">12th Standard</h3>
                  <span className="text-primary font-medium">2021</span>
                </div>
                <p className="text-foreground/70">Sri Chaitanya Junior Kalasala</p>
                <p className="mt-2 font-medium">GPA: 9.70</p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold">10th Standard</h3>
                  <span className="text-primary font-medium">2019</span>
                </div>
                <p className="text-foreground/70">St. Joseph's Convent High School</p>
                <p className="mt-2 font-medium">GPA: 9.70</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 mt-12">Interests & Hobbies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="text-4xl mb-3">💃</div>
                <h3 className="text-lg font-semibold">Bharatanatyam Dancing</h3>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="text-4xl mb-3">🏸</div>
                <h3 className="text-lg font-semibold">Badminton</h3>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold">Throw Ball</h3>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="text-4xl mb-3">🌐</div>
                <h3 className="text-lg font-semibold">Learning Languages</h3>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="text-4xl mb-3">👨‍💻</div>
                <h3 className="text-lg font-semibold">Coding</h3>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="text-lg font-semibold">Reading</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
