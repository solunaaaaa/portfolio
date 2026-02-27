import { Figma, Code, BarChart3, Users, Lightbulb, Target } from "lucide-react";

const technicalSkills = [
  { name: "Figma", icon: Figma, level: 85 },
  { name: "HTML", icon: Code, level: 90 },
  { name: "CSS", icon: Code, level: 85 },
  { name: "Power BI", icon: BarChart3, level: 75 },
];

const professionalSkills = [
  { name: "Leadership", icon: Users, level: 80 },
  { name: "Strategic Thinking", icon: Target, level: 85 },
  { name: "Problem Solving", icon: Lightbulb, level: 90 },
];

const SkillBar = ({ name, icon: Icon, level }: { name: string; icon: React.ElementType; level: number }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon size={16} className="text-primary" />
        <span className="font-medium text-sm">{name}</span>
      </div>
      <span className="text-muted-foreground text-xs">{level}%</span>
    </div>
    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
      <div
        className="h-full bg-primary rounded-full transition-all duration-1000"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Skills</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
          What I <span className="gradient-text">Bring</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card p-8 space-y-6">
            <h3 className="font-heading font-semibold text-lg mb-4">Technical Skills</h3>
            {technicalSkills.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>

          <div className="glass-card p-8 space-y-6">
            <h3 className="font-heading font-semibold text-lg mb-4">Professional Skills</h3>
            {professionalSkills.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
