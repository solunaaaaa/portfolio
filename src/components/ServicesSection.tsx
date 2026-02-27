import { Globe, Layout, Palette, FileText } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Modern, responsive website design tailored for small businesses and startups.",
  },
  {
    icon: Layout,
    title: "Portfolio Development",
    description: "Professional portfolio websites that showcase your work and personal brand.",
  },
  {
    icon: Palette,
    title: "UI Layout Design",
    description: "Clean, user-centered interface layouts crafted in Figma for optimal user experience.",
  },
  {
    icon: FileText,
    title: "Content Structuring",
    description: "Well-organized website content that communicates your message clearly and effectively.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Services</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
          What I <span className="gradient-text">Offer</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass-card p-8 group hover:border-primary/40 transition-colors duration-300"
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
