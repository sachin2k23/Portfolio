import { GitBranch, ExternalLink, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 px-4 border-t dark:border-white/10 light:border-black/8">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Built with <span className="text-red-400">❤</span> by Sachin H K · 2026
        </p>
        <div className="flex gap-3">
          {[
            { Icon: GitBranch, href: "https://github.com/sachin2k23" },
            { Icon: ExternalLink, href: "https://linkedin.com/in/sachin-hk" },
            { Icon: Mail, href: "mailto:hksachin08@gmail.com" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg glass card-hover text-muted-foreground hover:text-primary"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
