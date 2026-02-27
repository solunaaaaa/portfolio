const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Experience</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
          Professional <span className="gradient-text">Journey</span>
        </h2>

        <div className="relative pl-8 border-l-2 border-border">
          {/* Timeline dot */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />

          <div className="glass-card p-8 ml-4">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h3 className="font-heading font-semibold text-xl">Freelance Web Designer</h3>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                2024 – Present
              </span>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed">
              <li>• Designing modern, responsive websites for small businesses and portfolio clients</li>
              <li>• Creating clean UI layouts using Figma</li>
              <li>• Developing websites using HTML & CSS</li>
              <li>• Writing structured content for websites</li>
              <li>• Learning digital marketing and social media management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
