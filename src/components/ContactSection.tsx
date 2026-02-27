import { useState, FormEvent } from "react";
import { Mail, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder – wire to backend later
    alert("Message sent! (placeholder)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Contact</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="text-primary" size={18} />
                </div>
                <span className="text-sm text-muted-foreground">surya@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone className="text-primary" size={18} />
                </div>
                <span className="text-sm text-muted-foreground">+91 XXXXX XXXXX</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 pt-4">
              {["LinkedIn", "GitHub", "Instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs border border-border px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
            <div>
              <label className="text-sm font-medium mb-1 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
