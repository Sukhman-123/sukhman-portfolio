const experiences = [
  {
    year: "April 2025 - Present",
    role: "Software Developer",
    company: "OneHash Technologies",
    description: [
      "Deployed and maintained ERPNext on AWS and Azure. Configured multitenancy setups with multiple Frappe sites on single servers for cost-efficient operations.",
      "Integrated ERPNext with platforms like India Mart and Justdial (lead capture), AiSensy (WhatsApp/SMS), Tata Tele Smartflo (call automation), WooCommerce and Amazon (E-commerce).",
      "Worked across core ERP modules, including CRM, Sales, HR, and Inventory, offering tailored enhancements."
    ]
  },
  {
    year: "August 2024 - April 2025",
    role: "Software Developer Intern",
    company: "CapitalVia Research Global Limited",
    description: [
      "Integrated CRM systems with third-party platforms using REST APIs and automation tools like Make, streamlining lead capture and conversion workflows.",
      "Built and configured tailored workflows based on specific client requirements, optimizing operational processes and improving user efficiency."
    ]
  },
  {
    year: "Sept 2023 - April 2024",
    role: "Backend Developer Intern",
    company: "AI Unika Technologies",
    description: [
      "Developed and maintained backend features using Node.js, Express.js, and MongoDB.",
      "Debugged database queries, optimized APIs, and handled server configurations.",
      "Worked on live company projects such as rastaai.in and rasta360.com."
    ]
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
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background animate-pulse-slow hover:scale-150 transition-transform duration-300" />
              
              <div className="glass-card rounded-xl p-6 hover-lift hover-glow ml-4 card-shine group cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{exp.role}</h3>
                  <span className="text-sm text-primary font-medium group-hover:scale-110 transition-transform inline-block">{exp.year}</span>
                </div>
                <p className="text-muted-foreground font-medium mb-3 group-hover:text-foreground transition-colors">{exp.company}</p>
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
