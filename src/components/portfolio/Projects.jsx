import { ExternalLink, GitBranch } from "lucide-react";
import { useReveal } from "./useReveal";

const projects = [
  {
    name: "Finance Business Tracker",
    desc: "A full-stack MERN finance tracking app to manage income, expenses, and category-based transactions with real-time dashboards and secure JWT authentication.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    demo: "https://ai-finance-tracker-khaki.vercel.app/",
    github: "https://github.com/sachin2k23/AI-finance-tracker",
    highlights: ["JWT Auth", "Real-time Charts", "Responsive", "CRUD"],
  },
  {
    name: "Best Team Prediction for Indian Cricket Team",
    desc: "A machine learning-based prediction system to evaluate and select optimal cricket team compositions using batting and bowling datasets (ODI, T20, Test).",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Flask", "Joblib"],
    github: "https://github.com/sachin2k23/Best-Cricket-Team-Prediction",
    highlights: ["Machine Learning", "Data Analysis", "Flask", "Predictive Model"],
  },
];

export default function Projects() {
  const ref = useReveal();
  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="reveal text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-muted-foreground mt-3">Selected work that showcases full-stack and ML chops.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.name} className="reveal glass rounded-2xl p-6 md:p-7 card-hover flex flex-col">
              <div className="h-36 rounded-xl bg-gradient-primary/20 dark:border dark:border-primary/10 light:border light:border-primary/5 mb-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-30" />
                <div className="absolute inset-0 grid place-items-center font-display font-bold text-2xl text-foreground/80">
                  {p.name.split(" ").slice(0, 2).join(" ")}
                </div>
              </div>
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.highlights.map((h) => (
                  <span key={h} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{h}</span>
                ))}
              </div>
              <div className="flex gap-3 mt-5 pt-5 border-t border-white/10">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium card-hover">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm card-hover">
                  <GitBranch size={14} /> GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}