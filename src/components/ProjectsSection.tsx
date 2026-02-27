import { ArrowUpRight } from "lucide-react";

const placeholders = [
  { title: "Business Landing Page", tech: "HTML · CSS · Figma", desc: "Responsive landing page for a local business." },
  { title: "Portfolio Website", tech: "HTML · CSS", desc: "Clean portfolio showcasing creative work." },
  { title: "Dashboard UI", tech: "Figma · Power BI", desc: "Analytics dashboard layout concept." },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Projects</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Recent <span className="gradient-text">Work</span>
        </h2>
        <p className="text-muted-foreground mb-12 text-sm">Projects will be updated soon.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholders.map((p) => (
            <div key={p.title} className="glass-card overflow-hidden group">
              <div className="h-44 bg-secondary/50 flex items-center justify-center text-muted-foreground text-sm">
                Coming Soon
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-heading font-semibold text-lg flex items-center justify-between">
                  {p.title}
                  <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
                <p className="text-xs text-primary font-medium">{p.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
