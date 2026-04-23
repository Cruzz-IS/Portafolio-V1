import { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from '../i18n/utils';

interface Props {
  lang?: 'es' | 'en';
}

// Líneas de código que se van a "escribir" en la animación
const CODE_LINES = [
  { text: 'const developer = {',       color: '#e2e8f0', indent: 0 },
  { text: '  name: "Edwar Cruz",',      color: '#86efac', indent: 1 },
  { text: '  role: "Full Stack Dev",',  color: '#86efac', indent: 1 },
  { text: '  stack: [',                 color: '#e2e8f0', indent: 1 },
  { text: '    "React", "Rust",',       color: '#fbbf24', indent: 2 },
  { text: '    "FastAPI", "Next.js",',  color: '#fbbf24', indent: 2 },
  { text: '    "PostgreSQL",',          color: '#fbbf24', indent: 2 },
  { text: '  ],',                       color: '#e2e8f0', indent: 1 },
  { text: '  passion: "∞",',           color: '#f9a8d4', indent: 1 },
  { text: '};',                         color: '#e2e8f0', indent: 0 },
];

function useTypewriter(lines: typeof CODE_LINES) {
  const [displayed, setDisplayed] = useState<{ text: string; color: string; done: boolean }[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];
    if (currentChar < line.text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev];
          if (!next[currentLine]) {
            next[currentLine] = { text: '', color: line.color, done: false };
          }
          next[currentLine] = {
            text: line.text.slice(0, currentChar + 1),
            color: line.color,
            done: false,
          };
          return next;
        });
        setCurrentChar(c => c + 1);
      }, 28 + Math.random() * 20);
      return () => clearTimeout(timeout);
    } else {
      setDisplayed(prev => {
        const next = [...prev];
        if (next[currentLine]) next[currentLine].done = true;
        return next;
      });
      const timeout = setTimeout(() => {
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, lines]);

  return displayed;
}

// Partículas flotantes de fondo (símbolos de código)
const PARTICLES = ['</', '/>', '{  }', '=>', '()', '[]', '&&', '||', '!=', '++', '--', '::'];

export default function HomeSection({ lang = 'es' }: Props) {
  const t = useTranslations(lang);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const codeLines = useTypewriter(CODE_LINES);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handle = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden themeThree bg-gradient-to-br"
    >
      {/* ── Cursor glow ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-all duration-300"
        style={{
          background: `radial-gradient(520px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.10), transparent 50%)`,
        }}
      />

      {/* ── Grid de fondo estilo terminal ── */}
      <div className="absolute inset-0 z-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,179,237,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,179,237,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* ── Orbes de luz ── */}
      <div className="absolute top-16 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-violet-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />

      {/* ── Partículas flotantes ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {PARTICLES.map((sym, i) => (
          <span
            key={i}
            className="absolute font-mono text-blue-400/20 dark:text-blue-300/15 text-sm font-bold"
            style={{
              left: `${5 + (i * 8.3) % 90}%`,
              top: `${10 + (i * 13.7) % 80}%`,
              animation: `floatParticle ${6 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            {sym}
          </span>
        ))}
      </div>

      {/* ── Layout principal: izquierda texto / derecha foto+código ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ══ COLUMNA IZQUIERDA — Texto ══ */}
          <div
            className="flex flex-col gap-6"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-xs font-mono tracking-widest uppercase textParTwo">
                Available for work
              </span>
            </div>

            {/* Nombre */}
            <div>
              <p className="text-base md:text-lg textParTwo font-mono mb-2 tracking-wide">
                {t('hero.greeting')} 👋
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-gradient-x">
                  Edwar Rene
                </span>
                <br />
                <span className="textOne">Cruz</span>
              </h1>
            </div>

            {/* Role con barra animada */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-cyan-400" />
              <h2 className="text-lg md:text-xl font-semibold textTwo tracking-wide">
                {t('hero.role')}
              </h2>
            </div>

            {/* Descripción */}
            <p className="text-base md:text-lg textParTwo leading-relaxed max-w-lg">
              Analista de Datos y Desarrollador Full Stack especializado en arquitecturas
              escalables. Graduado de la <span className="textTwo font-semibold">UNAH</span>{' '}
              con experiencia en Full Stack, Redes, Bases de Datos e Infraestructura.
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2">
              {['Rust', 'FastAPI', 'React', 'Next.js', 'PostgreSQL', 'Docker'].map((tech, i) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-semibold rounded-full border dark:border-blue-400/30 border-blue-500/30 dark:text-blue-300 text-blue-600 dark:bg-blue-400/10 bg-blue-500/10"
                  style={{
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? 'translateY(0)' : 'translateY(10px)',
                    transition: `opacity 0.5s ease ${0.8 + i * 0.08}s, transform 0.5s ease ${0.8 + i * 0.08}s`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="group relative px-7 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('hero.cta')}
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl font-semibold border-2 dark:border-slate-600 border-slate-300 textOne hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
              >
                {t('nav.contact')}
              </a>
            </div>
          </div>

          {/* ══ COLUMNA DERECHA — Foto + Terminal ══ */}
          <div
            className="flex flex-col gap-6 items-center lg:items-end"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateX(0)' : 'translateX(40px)',
              transition: 'opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s',
            }}
          >
            {/* Foto */}
            <div className="relative">
              {/* Anillo animado */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 animate-spin-slow opacity-80 blur-sm" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 opacity-60" />

              {/* Contenedor foto */}
              <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 dark:border-slate-900 border-white shadow-2xl">
                {/* ← Reemplaza este src con tu foto real */}
                <img
                  src="/avatar-placeholder.jpg"
                  alt="Edwar Cruz"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback si no hay foto: muestra iniciales
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement!;
                    parent.innerHTML = `
                      <div style="width:100%;height:100%;background:linear-gradient(135deg,#1e3a5f,#0e7490);display:flex;align-items:center;justify-content:center;">
                        <span style="font-size:3.5rem;font-weight:800;color:#e2e8f0;font-family:monospace;letter-spacing:-2px;">EC</span>
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Badge flotante */}
              <div
                className="absolute -bottom-3 -right-3 dark:bg-slate-800 bg-white border dark:border-slate-700 border-slate-200 rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-1.5"
                style={{ animation: 'floatBadge 3s ease-in-out infinite' }}
              >
                <span className="text-lg">⚡</span>
                <span className="text-xs font-mono font-bold dark:text-cyan-300 text-cyan-600 whitespace-nowrap">Full Stack</span>
              </div>
            </div>

            {/* Terminal de código */}
            <div
              className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl dark:shadow-black/60 shadow-slate-400/30"
              style={{
                opacity: loaded ? 1 : 0,
                transition: 'opacity 0.8s ease 1.2s',
              }}
            >
              {/* Barra superior del editor */}
              <div className="flex items-center gap-1.5 px-4 py-3 dark:bg-slate-900 bg-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs font-mono dark:text-slate-400 text-slate-300 tracking-wide">
                  developer.ts
                </span>
              </div>

              {/* Cuerpo del editor */}
              <div className="px-4 py-4 dark:bg-slate-950 bg-slate-800 font-mono text-sm leading-7 min-h-[240px]">
                {/* Números de línea + código */}
                {CODE_LINES.map((line, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="select-none text-slate-600 text-xs w-4 text-right flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span style={{ color: codeLines[i]?.color ?? 'transparent' }}>
                      {codeLines[i]?.text ?? ''}
                      {/* Cursor parpadeante solo en la línea activa */}
                      {codeLines[i] && !codeLines[i].done && (
                        <span className="animate-blink ml-px inline-block w-0.5 h-4 bg-blue-400 align-middle" />
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-xs font-mono textParTwo tracking-widest uppercase">scroll</span>
        <ChevronDown className="w-5 h-5 text-slate-400" />
      </div>

      <style>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.5; }
          50%       { transform: translateY(-18px) rotate(5deg); opacity: 1; }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .animate-spin-slow   { animation: spin-slow 6s linear infinite; }
        .animate-gradient-x  { background-size: 200% auto; animation: gradient-x 4s ease infinite; }
        .animate-blink       { animation: blink 0.8s step-end infinite; }
      `}</style>
    </section>
  );
}