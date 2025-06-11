
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection />
      
      <div className="reveal bg-gradient-to-br from-cream-100 to-cream-200 dark:from-background dark:to-secondary">
        <AboutSection />
      </div>
      
      <div className="reveal bg-gradient-to-br from-cream-100 to-cream-200 dark:from-background dark:to-secondary">
        <SkillsSection />
      </div>
      
      <div className="reveal">
        <ExperienceSection />
      </div>
      
      <div className="reveal bg-gradient-to-br from-cream-100 to-cream-200 dark:from-background dark:to-secondary">
        <ProjectsSection />
      </div>
      
      <div className="reveal bg-gradient-to-br from-cream-100 to-cream-200 dark:from-background dark:to-secondary">
        <ServicesSection />
      </div>
      
      <div className="reveal bg-gradient-to-br from-cream-100 to-cream-200 dark:from-background dark:to-secondary">
        <AchievementsSection />
      </div>
      
      <div className="reveal bg-gradient-to-br from-cream-100 to-cream-200 dark:from-background dark:to-secondary">
        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
