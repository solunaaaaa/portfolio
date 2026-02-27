const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-heading font-bold text-lg">
            SURYA <span className="text-primary">S</span>
          </p>
          <p className="text-muted-foreground text-xs">
            Tech-Driven. Business-Minded. Future-Focused.
          </p>
        </div>

        <div className="flex gap-6">
          {["LinkedIn", "GitHub", "Instagram"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {s}
            </a>
          ))}
        </div>

        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} SURYA S. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
