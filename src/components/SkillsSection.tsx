import { useEffect, useState } from 'react';

const skills = [
  { name: 'FastAPI', level: 95, category: 'Backend', color: 'from-teal-500 to-teal-600' },
  { name: 'Actix Web (Rust)', level: 90, category: 'Backend', color: 'from-orange-500 to-orange-600' },
  { name: 'NestJS', level: 92, category: 'Backend', color: 'from-red-500 to-red-600' },
  { name: 'Next.js', level: 93, category: 'Frontend', color: 'from-slate-700 to-slate-800' },
  { name: 'React', level: 95, category: 'Frontend', color: 'from-blue-500 to-blue-600' },
  { name: 'TypeScript', level: 94, category: 'Languages', color: 'from-blue-600 to-blue-700' },
  { name: 'Python', level: 96, category: 'Languages', color: 'from-yellow-500 to-yellow-600' },
  { name: 'Rust', level: 88, category: 'Languages', color: 'from-orange-600 to-orange-700' },
  { name: 'PostgreSQL', level: 91, category: 'Database', color: 'from-blue-400 to-blue-500' },
  { name: 'MongoDB', level: 89, category: 'Database', color: 'from-green-500 to-green-600' },
  { name: 'MySQL', level: 90, category: 'Database', color: 'from-blue-500 to-cyan-500' },
  { name: 'Docker', level: 87, category: 'DevOps', color: 'from-blue-600 to-cyan-600' },
];

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Habilidades Técnicas
        </h2>
        <p className="text-center text-slate-400 mb-16 text-lg">
          Tecnologías y herramientas que domino
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              style={{
                animation: isVisible ? `slideIn 0.5s ease-out ${index * 0.05}s both` : 'none',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{skill.name}</h3>
                  <span className="text-sm text-slate-400">{skill.category}</span>
                </div>
                <span className="text-2xl font-bold text-slate-500 group-hover:text-blue-400 transition-colors">
                  {skill.level}%
                </span>
              </div>

              <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
