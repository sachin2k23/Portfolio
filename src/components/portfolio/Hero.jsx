import { useEffect, useState } from "react";
import { GitBranch, ExternalLink, Mail, Download, ArrowRight } from "lucide-react";

const sachinImg = "/Sachin.jpeg";

const roles = ["Full-Stack Developer", "MERN Stack Developer", "Software Developer"];

function useTypewriter() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i % roles.length];
    const speed = del ? 50 : 110;
    const t = setTimeout(() => {
      const next = del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      setText(next);
      if (!del && next === current) setTimeout(() => setDel(true), 1400);
      else if (del && next === "") {
        setDel(false);
        setI((p) => p + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
}

export default function Hero() {
  const typed = useTypewriter();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 px-4">
      <div className="mx-auto max-w-6xl w-full">
        <div className="glass rounded-3xl p-6 md:p-12 shadow-glow">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div className="space-y-6 animate-fade-up">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs dark:bg-primary/10 dark:text-primary dark:border dark:border-primary/20 light:bg-primary/5 light:text-primary light:border light:border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Available for opportunities
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-gradient">Sachin H K</span>
              </h1>
              <div className="h-8 md:h-10 text-xl md:text-2xl text-muted-foreground font-display">
                <span className="cursor-blink">{typed}</span>
              </div>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                Full-stack developer crafting modern web experiences with clean code and real-world impact. From responsive UIs to robust APIs — I build end-to-end solutions that perform.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("projects")}
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow card-hover"
                >
                  View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="/Sachin_HK_Resume.pdf"
                  download="Sachin_HK_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass dark:text-foreground light:text-foreground font-medium card-hover"
                >
                  <Download size={16} /> Download Resume
                </a>
              </div>
              <div className="flex gap-3 pt-2">
                {[
                  { Icon: GitBranch, href: "https://github.com/sachin2k23", label: "GitHub" },
                  { Icon: ExternalLink, href: "https://linkedin.com/in/sachin-hk", label: "LinkedIn" },
                  { Icon: Mail, href: "mailto:hksachin08@gmail.com", label: "Email" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="p-3 rounded-xl glass card-hover text-muted-foreground hover:text-primary"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-end animate-fade-up">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-gradient-primary opacity-60 blur-2xl animate-pulse" />
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-1 bg-gradient-primary transition-transform duration-300 hover:scale-105">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                    <img
                      src={sachinImg}
                      alt="Sachin H K"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}