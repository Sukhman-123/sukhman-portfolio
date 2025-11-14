const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A brief introduction to who I am and what I do
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg leading-relaxed">
              I'm a passionate developer with a keen eye for design and a love for creating 
              seamless user experiences. With expertise in modern web technologies, I transform 
              ideas into elegant, functional solutions.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me exploring new design trends, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["React", "TypeScript", "Node.js", "UI/UX", "Tailwind", "Git"].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium hover-lift cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="glass-card rounded-2xl p-8 hover-lift">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                    5+
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Years Experience</h3>
                    <p className="text-muted-foreground text-sm">Building digital products</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-xl">
                    50+
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Projects Completed</h3>
                    <p className="text-muted-foreground text-sm">Across various industries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                    ∞
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Lines of Code</h3>
                    <p className="text-muted-foreground text-sm">And counting...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
