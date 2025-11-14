const experiences = [
  {
    year: "2022 - Present",
    role: "Senior Full Stack Developer",
    company: "Tech Company Inc.",
    description: "Leading development of scalable web applications using React, Node.js, and modern cloud technologies. Mentoring junior developers and implementing best practices."
  },
  {
    year: "2020 - 2022",
    role: "Frontend Developer",
    company: "Digital Agency Co.",
    description: "Developed responsive web applications and implemented pixel-perfect designs. Collaborated with designers and backend teams to deliver high-quality products."
  },
  {
    year: "2018 - 2020",
    role: "Junior Developer",
    company: "Startup Solutions",
    description: "Built user interfaces and integrated APIs for various client projects. Gained experience in agile development and modern frontend frameworks."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground">
            My professional journey and career highlights
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              
              <div className="glass-card rounded-xl p-6 hover-lift ml-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <span className="text-sm text-primary font-medium">{exp.year}</span>
                </div>
                <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
