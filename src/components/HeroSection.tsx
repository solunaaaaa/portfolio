import { ArrowRight } from "lucide-react";
import profileImg from "@/assets/profile-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-28">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6 animate-slide-in-left">
          <p className="text-primary font-medium tracking-widest uppercase text-sm">
            Tech-Driven · Business-Minded · Future-Focused
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">SURYA S</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Computer Science Engineering graduate & MBA candidate blending technical execution with strategic business insight to create impactful solutions.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/30 to-transparent rounded-2xl blur-2xl" />
            <img
              src={profileImg}
              alt="SURYA S – Professional portrait"
              className="relative w-72 md:w-80 lg:w-96 rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
