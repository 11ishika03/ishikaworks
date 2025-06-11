import { Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-purple-500/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">Contact Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto backdrop-blur-lg bg-card/30 rounded-xl p-8 border border-primary/10 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
          <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">Get in Touch</h3>
          <p className="text-foreground/70 mb-8">
            Have a question or want to work together? Feel free to contact me!
          </p>

          <div className="space-y-8">
            <div className="flex items-start transform transition-all hover:translate-x-2">
              <div className="mt-1 mr-4 p-3 bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-full text-primary shadow-lg">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium">Email</h4>
                <a href="mailto:khandelwalishika09@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
                  khandelwalishika09@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start transform transition-all hover:translate-x-2">
              <div className="mt-1 mr-4 p-3 bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-full text-primary shadow-lg">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium">Phone</h4>
                <a href="tel:+916303136689" className="text-foreground/70 hover:text-primary transition-colors">
                  +91-6303136689
                </a>
              </div>
            </div>

            <div className="flex items-start transform transition-all hover:translate-x-2">
              <div className="mt-1 mr-4 p-3 bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-full text-primary shadow-lg">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium">Location</h4>
                <p className="text-foreground/70">Hyderabad, Telangana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
