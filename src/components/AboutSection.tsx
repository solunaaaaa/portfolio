import { GraduationCap, Briefcase } from "lucide-react";

const education = [
  {
    degree: "B.E. in Computer Science Engineering",
    year: "Graduated 2024",
    icon: GraduationCap,
  },
  {
    degree: "MBA (Regular)",
    year: "Expected 2027",
    icon: Briefcase,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">About Me</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
          Technology meets <span className="gradient-text">Strategy</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Computer Science Engineering graduate with a strong foundation in programming, software development, data analysis, and problem-solving. Currently pursuing my MBA, I'm building deeper expertise in business strategy, operations, marketing, and project management.
            </p>
            <p>
              This dual foundation gives me a unique edge — combining technical execution with strategic thinking to bridge the gap between technology and business.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            {education.map((item) => (
              <div key={item.degree} className="glass-card p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">{item.degree}</h3>
                  <p className="text-muted-foreground text-sm">{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
