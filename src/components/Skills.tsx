import { Code2, Palette, Database, Zap } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Next.js", "Vue.js", "HTML/CSS"],
    color: "from-primary to-accent"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    skills: ["Figma", "Adobe XD", "Prototyping", "Wireframing", "Design Systems"],
    color: "from-accent to-primary"
  },
  {
    icon: Database,
    title: "Backend & Database",
    skills: ["Node.js", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    color: "from-primary to-accent"
  },
  {
    icon: Zap,
    title: "Tools & Others",
    skills: ["Git", "Docker", "CI/CD", "Testing", "Agile"],
    color: "from-accent to-primary"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card rounded-2xl p-6 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-foreground text-sm border border-border hover:border-primary hover:scale-105 transition-all cursor-default animate-fade-in"
                    style={{ animationDelay: `${(index * 0.1) + (idx * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
