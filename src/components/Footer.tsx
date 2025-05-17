
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Ishika Khandelwal</h3>
            <p className="text-foreground/70 mb-4">
              Final-year IT student, full-stack developer, and problem solver passionate about technology and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:khandelwalishika09@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/70 hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-foreground/70 mb-1">📧 khandelwalishika09@gmail.com</p>
            <p className="text-foreground/70 mb-1">📞 +91-6303136689</p>
            <p className="text-foreground/70">🌍 Vellore Institute of Technology</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-foreground/70">
          <p>© {new Date().getFullYear()} Ishika Khandelwal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
