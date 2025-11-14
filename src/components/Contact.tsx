import { Mail, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/yourusername",
    color: "hover:text-foreground"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    color: "hover:text-[#0077b5]"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/yourusername",
    color: "hover:text-[#1DA1F2]"
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:your.email@example.com",
    color: "hover:text-primary"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-12 mb-12 animate-scale-in">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
            <p className="text-muted-foreground">
              Feel free to reach out through any of these platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary hover:bg-secondary/70 transition-all hover-lift">
                  <social.icon className={`w-6 h-6 text-muted-foreground ${social.color} transition-colors`} />
                  <span className="text-sm font-medium">{social.label}</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="animate-fade-in">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl"
            onClick={() => window.open("mailto:your.email@example.com", "_blank")}
          >
            <Mail className="mr-2 h-5 w-5" />
            Send me an email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
