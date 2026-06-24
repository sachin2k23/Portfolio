import { useEffect, useState } from "react";

export default function Loading({ onDone }) {
  const [fading, setFading] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 2200);
    const t2 = setTimeout(() => onDone && onDone(), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center loading-bg transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-primary/30 blur-sm animate-float"
            style={{
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      <div className="relative text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gradient animate-fade-up">
          Hello 👋 Welcome to Sachin's Portfolio
        </h1>
        <div className="mt-8 mx-auto h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/3 bg-gradient-primary animate-[fade-in_0.3s_ease,float_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
