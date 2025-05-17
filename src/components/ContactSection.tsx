
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          <p className="text-foreground/70 mb-8">
            Have a question or want to work together? Feel free to contact me!
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mt-1 mr-4 p-3 bg-primary/10 rounded-full text-primary">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium">Email</h4>
                <a href="mailto:khandelwalishika09@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
                  khandelwalishika09@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mt-1 mr-4 p-3 bg-primary/10 rounded-full text-primary">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium">Phone</h4>
                <a href="tel:+916303136689" className="text-foreground/70 hover:text-primary transition-colors">
                  +91-6303136689
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mt-1 mr-4 p-3 bg-primary/10 rounded-full text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium">Location</h4>
                <p className="text-foreground/70">Vellore Institute of Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
