import { useState } from "react";
import { Mail, ExternalLink, GitBranch, Send } from "lucide-react";
import { useReveal } from "./useReveal";

const cards = [
  { Icon: Mail, label: "Email", value: "hksachin08@gmail.com", href: "mailto:hksachin08@gmail.com" },
  { Icon: ExternalLink, label: "LinkedIn", value: "linkedin.com/in/sachin-hk", href: "https://linkedin.com/in/sachin-hk" },
  { Icon: GitBranch, label: "GitHub", value: "github.com/sachin2k23", href: "https://github.com/sachin2k23" },
];

export default function Contact() {
  const ref = useReveal();
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    e.target.reset();
  };
  return (
    <section id="contact" className="py-20 px-4" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="reveal text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Get In <span className="text-gradient">Touch</span></h2>
          <p className="text-muted-foreground mt-3">Let's build something great together.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {cards.map(({ Icon, label, value, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="reveal glass rounded-2xl p-6 card-hover text-center block">
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground mb-3">
                <Icon size={20} />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
              <div className="text-sm mt-1 break-all">{value}</div>
            </a>
          ))}
        </div>
        <form onSubmit={onSubmit} className="reveal glass rounded-2xl p-6 md:p-8 mt-8 max-w-2xl mx-auto space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground">Name</label>
              <input required type="text" className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-input dark:border-white/10 light:border-black/5 focus:border-primary focus:outline-none transition" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Email</label>
              <input required type="email" className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-input dark:border-white/10 light:border-black/5 focus:border-primary focus:outline-none transition" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Message</label>
            <textarea required rows={5} className="mt-1 w-full px-4 py-3 rounded-xl bg-secondary/50 border border-input dark:border-white/10 light:border-black/5 focus:border-primary focus:outline-none transition resize-none" placeholder="Tell me about your project…" />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow card-hover">
            <Send size={16} /> {sent ? "Message Sent ✓" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}