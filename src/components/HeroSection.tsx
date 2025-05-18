
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 dark:bg-hero-pattern bg-hero-light opacity-25"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary text-foreground/80 text-sm font-medium">
              IT Student
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-primary">Ishika</span> Khandelwal
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg">
              Final-year IT student and problem solver passionate about technology and innovation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn-primary flex items-center gap-2 shadow-lg hover:shadow-primary/20 transition-all">
                View Portfolio <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline shadow-lg hover:shadow-primary/20 transition-all">
                Contact Me
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative animate-slide-up">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 p-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <img 
                  src="https://ik.imagekit.io/g7ydgimnp/photo.jpg?updatedAt=1747513189117" 
                  alt="Ishika Khandelwal" 
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary to-purple-400 -bottom-3 -right-3 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
