import { Briefcase, GraduationCap, Languages, CircleCheck } from "lucide-react";
import { useReveal } from "./useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="reveal text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">About <span className="text-gradient">Me</span></h2>
          <p className="text-muted-foreground mt-3">A glimpse into who I am and what I do.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="reveal glass rounded-2xl p-6 md:p-8 card-hover">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary/15 text-primary grid place-items-center">★</span>
              My Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Passionate and detail-oriented full-stack developer with hands-on experience building dynamic
              and scalable web applications through internships and academic projects. I specialize in the
              MERN stack — React, Node.js, Express, and MongoDB — along with modern styling using
              TailwindCSS. My expertise spans frontend development, RESTful API integration, performance
              optimization, and responsive UI design. I'm a fast learner driven by solving real-world
              problems through clean, maintainable code.
            </p>
          </article>
          <article className="reveal glass rounded-2xl p-6 md:p-8 card-hover">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary/15 text-primary grid place-items-center">⚡</span>
              Current Status
            </h3>
            <ul className="space-y-4">
              {[
                { Icon: Briefcase, label: "Role", value: "Front-End Developer at HourlyRecruit Tech Labs" },
                { Icon: GraduationCap, label: "Education", value: "MCA — ATME College of Engineering, Mysuru" },
                { Icon: Languages, label: "Languages", value: "English (Proficient), Kannada (Native)" },
              ].map(({ Icon, label, value }) => (
                <li key={label} className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg glass grid place-items-center text-primary shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
                    <div className="text-sm">{value}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 rounded-full dark:bg-emerald-500/10 dark:border dark:border-emerald-500/30 dark:text-emerald-400 light:bg-emerald-500/15 light:border light:border-emerald-600/30 light:text-emerald-600 text-sm">
              <CircleCheck size={16} /> Open to Full-Time Roles 🟢
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}