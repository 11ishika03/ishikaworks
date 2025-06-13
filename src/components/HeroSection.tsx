
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium mb-6 leading-tight text-dark-brown">
              Hello, I'm <span className="block">Ishika Khandelwal.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg leading-relaxed">
              I am a <strong>final-year IT student</strong> and problem solver passionate about technology and innovation. I build bridges between ideas and execution, turning visions into strategic solutions that drive results.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-outline shadow-sm hover:shadow-md transition-all">
                Contact Me
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative animate-slide-up">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-border shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <img 
                  src="https://ik.imagekit.io/g7ydgimnp/photo.jpg?updatedAt=1747513189117" 
                  alt="Ishika Khandelwal" 
                  className="rounded-3xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
