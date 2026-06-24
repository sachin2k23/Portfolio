import { Code2, Library, Database, Wrench, GitBranch, Sparkles } from "lucide-react";
import { useReveal } from "./useReveal";

const skillCards = [
  { Icon: Code2, title: "Programming Languages", items: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3", "Java"] },
  { Icon: Library, title: "Frameworks & Libraries", items: ["React.js", "Node.js", "Express.js", "TailwindCSS", "Bootstrap", "Flask"] },
  { Icon: Database, title: "Databases", items: ["MongoDB", "MySQL", "SQLite"] },
  { Icon: Wrench, title: "Tools & Technologies", items: ["Git", "GitHub", "Postman", "VS Code", "Docker", "Figma"] },
  { Icon: GitBranch, title: "Development Practices", items: ["REST APIs", "JWT Auth", "Agile/Scrum", "CRUD", "Version Control"] },
  { Icon: Sparkles, title: "Soft Skills", items: ["Problem Solving", "Team Collaboration", "Communication", "Fast Learner"] },
];

const specializations = [
  "Data Structures & Algorithms", "Frontend Development", "Backend Development",
  "API Integration", "Performance Optimization", "UI/UX Design",
  "Responsive Design", "Full-Stack Applications",
];

export default function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="reveal text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Skills & <span className="text-gradient">Expertise</span></h2>
          <p className="text-muted-foreground mt-3">A curated toolkit honed across internships and projects.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCards.map(({ Icon, title, items }) => (
            <article key={title} className="reveal glass rounded-2xl p-6 card-hover">
              <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold mb-3">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((it) => (
                  <span key={it} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{it}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16">
          <div className="reveal text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold">Core <span className="text-gradient">Specializations</span></h3>
          </div>
          <div className="reveal flex flex-wrap gap-3 justify-center">
            {specializations.map((s) => (
              <span key={s} className="glass px-4 py-2 rounded-full text-sm card-hover dark:border dark:border-primary/10 light:border light:border-primary/5">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}