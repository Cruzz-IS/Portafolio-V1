import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "../i18n/utils";

interface Props {
  lang?: "es" | "en";
}

const CODE_LINES = [
  { text: "const developer = {", color: "#cbd5e1" },
  { text: '  name: "Edwar Cruz",', color: "#86efac" },
  { text: '  role: "Full Stack Dev",', color: "#86efac" },
  { text: "  stack: [", color: "#cbd5e1" },
  { text: '    "React", "C#",', color: "#fbbf24" },
  { text: '    "FastAPI", "Next.js",', color: "#fbbf24" },
  { text: '    "PostgreSQL", "Docker",', color: "#fbbf24" },
  { text: "  ],", color: "#cbd5e1" },
  { text: "  passion: () => Infinity,", color: "#f9a8d4" },
  { text: "};", color: "#cbd5e1" },
];

function useTypewriter() {
  const [lines, setLines] = useState<
    { text: string; color: string; done: boolean }[]
  >([]);
  const [curLine, setCurLine] = useState(0);
  const [curChar, setCurChar] = useState(0);

  useEffect(() => {
    if (curLine >= CODE_LINES.length) return;
    const src = CODE_LINES[curLine];
    if (curChar < src.text.length) {
      const t = setTimeout(
        () => {
          setLines((prev) => {
            const next = [...prev];
            next[curLine] = {
              text: src.text.slice(0, curChar + 1),
              color: src.color,
              done: false,
            };
            return next;
          });
          setCurChar((c) => c + 1);
        },
        24 + Math.random() * 22,
      );
      return () => clearTimeout(t);
    } else {
      setLines((prev) => {
        const n = [...prev];
        if (n[curLine]) n[curLine].done = true;
        return n;
      });
      const t = setTimeout(() => {
        setCurLine((l) => l + 1);
        setCurChar(0);
      }, 70);
      return () => clearTimeout(t);
    }
  }, [curLine, curChar]);

  return lines;
}

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const cols = Math.floor(canvas.width / 20);
    const drops: number[] = Array(cols).fill(1);
    const chars =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノ{}[]<>/=>;".split(
        "",
      );

    const draw = () => {
      ctx.fillStyle = "rgba(2,8,20,0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "13px monospace";

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const alpha = Math.random() > 0.5 ? 0.55 : 0.25;
        ctx.fillStyle =
          i % 5 === 0
            ? `rgba(34,211,238,${alpha})`
            : `rgba(59,130,246,${alpha})`;
        ctx.fillText(char, i * 20, y * 20);
        if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    const id = setInterval(draw, 50);
    return () => {
      clearInterval(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-[0.18] dark:opacity-[0.22]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

const METEORS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 60}%`,
  left: `${10 + Math.random() * 80}%`,
  delay: `${Math.random() * 8}s`,
  dur: `${1.5 + Math.random() * 2}s`,
  width: `${60 + Math.random() * 140}px`,
}));

function MeteorShower() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {METEORS.map((m) => (
        <div
          key={m.id}
          className="absolute h-px animate-meteor"
          style={{
            top: m.top,
            left: m.left,
            width: m.width,
            animationDelay: m.delay,
            animationDuration: m.dur,
            background:
              "linear-gradient(90deg, rgba(99,179,237,0) 0%, rgba(99,179,237,0.9) 50%, rgba(255,255,255,0.6) 100%)",
            boxShadow: "0 0 6px rgba(99,179,237,0.8)",
          }}
        />
      ))}
    </div>
  );
}

function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-[700px] h-[700px] rounded-full opacity-[0.12] dark:opacity-[0.18]"
        style={{
          top: "-15%",
          left: "-10%",
          background:
            "radial-gradient(circle, #3b82f6 0%, #06b6d4 50%, transparent 75%)",
          animation: "auroraBlob1 14s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.10] dark:opacity-[0.15]"
        style={{
          bottom: "-10%",
          right: "-5%",
          background:
            "radial-gradient(circle, #06b6d4 0%, #8b5cf6 50%, transparent 75%)",
          animation: "auroraBlob2 18s ease-in-out infinite",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.07] dark:opacity-[0.12]"
        style={{
          top: "30%",
          left: "40%",
          background:
            "radial-gradient(circle, #8b5cf6 0%, #3b82f6 60%, transparent 80%)",
          animation: "auroraBlob3 22s ease-in-out infinite",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,179,237,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,179,237,1) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          animation: "gridScroll 30s linear infinite",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(99,179,237,0.8) 4px)",
          backgroundSize: "100% 8px",
          animation: "scanDown 8s linear infinite",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.10]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(34,211,238,0.8) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
          animation: "dotPulse 4s ease-in-out infinite",
        }}
      />
    </div>
  );
}

const SYMBOLS = [
  "</",
  "/>",
  "{ }",
  "=>",
  "()",
  "[]",
  "&&",
  "||",
  "!=",
  "++",
  "::",
  "fn",
  "async",
  "await",
  "pub",
  "impl",
  "struct",
  "enum",
  "type",
  "const",
];

function FloatingSymbols() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      {SYMBOLS.map((sym, i) => {
        const size = 10 + (i % 4) * 3;
        const left = `${4 + ((i * 4.8) % 92)}%`;
        const top = `${5 + ((i * 7.3) % 88)}%`;
        const dur = 5 + (i % 5);
        const delay = i * 0.35;
        const bright = i % 3 === 0 ? 0.35 : i % 3 === 1 ? 0.2 : 0.12;
        return (
          <span
            key={i}
            className="absolute font-mono font-bold"
            style={{
              left,
              top,
              fontSize: `${size}px`,
              color:
                i % 2 === 0
                  ? `rgba(34,211,238,${bright})`
                  : `rgba(99,179,237,${bright})`,
              animation: `floatSym ${dur}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
              textShadow: `0 0 12px currentColor`,
            }}
          >
            {sym}
          </span>
        );
      })}
    </div>
  );
}

export default function HomeSection({ lang = "es" }: Props) {
  const t = useTranslations(lang);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const codeLines = useTypewriter();

  useEffect(() => {
    const t1 = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    const trigger = () => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 300);
    };
    const id = setInterval(trigger, 4500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const h = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden dark:bg-[#020818] bg-slate-50">
      <Aurora />
      <AnimatedGrid />
      <MatrixRain />
      <MeteorShower />
      <FloatingSymbols />

      <div
        className="absolute left-0 right-0 h-px opacity-30 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.8) 50%, transparent 100%)",
          boxShadow: "0 0 20px rgba(34,211,238,0.5)",
          animation: "scanLine 6s linear infinite",
        }}
      />

      <div
        className="pointer-events-none fixed inset-0 z-10 transition-all duration-200"
        style={{
          background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.12), transparent 55%)`,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(2,8,20,0.4) 100%)",
        }}
      />
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className="flex flex-col gap-6"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateX(0)" : "translateX(-50px)",
              transition:
                "opacity 1s ease 0.2s, transform 1s cubic-bezier(.16,1,.3,1) 0.2s",
            }}
          >
            {/* Badge disponible */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border dark:border-green-500/30 border-green-600/30 dark:bg-green-500/10 bg-green-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-mono tracking-widest uppercase dark:text-green-400 text-green-600">
                Available for work
              </span>
            </div>

            <div>
              <p className="font-mono textParTwo mb-2 tracking-widest uppercase text-xs">
                {t("hero.greeting")} &nbsp;
                <span className="dark:text-cyan-400 text-cyan-600">{">"}_</span>
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-[3.8rem] font-extrabold leading-[1.1] tracking-tight"
                style={{ position: "relative" }}
              >
                {/* Capa glitch roja */}
                {glitch && (
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(90deg,#f87171,#fb923c)",
                      transform: `translate(${Math.random() * 6 - 3}px, ${Math.random() * 4 - 2}px)`,
                      opacity: 0.7,
                      clipPath: `inset(${Math.random() * 40}% 0 ${Math.random() * 40}% 0)`,
                    }}
                  >
                    Edwar Rene Cruz
                  </span>
                )}
                {glitch && (
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(90deg,#22d3ee,#3b82f6)",
                      transform: `translate(${Math.random() * -6}px, ${Math.random() * 4}px)`,
                      opacity: 0.7,
                      clipPath: `inset(${Math.random() * 30 + 30}% 0 ${Math.random() * 20}% 0)`,
                    }}
                  >
                    Edwar Rene Cruz
                  </span>
                )}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-cyan-300 to-blue-500 animate-gradient-slow">
                  Edwar Rene Cruz
                </span>
                <br />
                {/* <span className="textOne">Cruz</span> */}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-linear-to-r from-blue-400 to-cyan-400" />
              <h2 className="text-lg md:text-xl font-semibold textTwo tracking-wide">
                {t("hero.role")}
              </h2>
              <div className="w-10 h-px bg-linear-to-r from-cyan-400 to-transparent" />
            </div>

            <p className="text-base md:text-lg textParTwo leading-relaxed max-w-lg">
              Analista de Datos y Desarrollador Full Stack especializado en
              arquitecturas escalables. Graduado de la{" "}
              <span className="dark:text-cyan-300 text-cyan-600 font-semibold">
                UNAH
              </span>{" "}
              con experiencia en Full Stack, Redes, Bases de Datos e
              Infraestructura.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Typescript",
                "C#",
                "Python",
                "React",
                "Next.js",
                "PostgreSQL",
                "Docker",
              ].map((tech, i) => (
                <span
                  key={tech}
                  className="relative px-3 py-1 text-xs font-mono font-semibold rounded-full border overflow-hidden
                             dark:border-blue-400/30 border-blue-500/30
                             dark:text-blue-300 text-blue-600
                             dark:bg-blue-400/10 bg-blue-500/10
                             hover:dark:bg-blue-400/20 hover:bg-blue-500/20
                             transition-colors duration-200 cursor-default"
                  style={{
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "translateY(0)" : "translateY(12px)",
                    transition: `opacity 0.5s ease ${0.9 + i * 0.09}s, transform 0.5s ease ${0.9 + i * 0.09}s`,
                  }}
                >
                  <span
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(99,179,237,0.15) 50%, transparent 100%)",
                      animation: `pillShimmer ${2 + i * 0.3}s ease-in-out infinite`,
                    }}
                  />
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="group relative px-7 py-3.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40"
                style={{
                  background: "linear-gradient(135deg, #2563eb, #0891b2)",
                }}
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
                    animation: "btnShimmer 1.2s ease infinite",
                  }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  {t("hero.cta")}
                  <span className="group-hover:translate-x-1.5 transition-transform inline-block">
                    →
                  </span>
                </span>
              </a>
              {/* <a
                href="#contact"
                className="group px-7 py-3.5 rounded-xl font-semibold border-2 dark:border-slate-600 border-slate-300 textOne hover:border-cyan-500 dark:hover:border-cyan-400 hover:dark:text-cyan-300 hover:text-cyan-600 transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(circle at center, rgba(34,211,238,0.08) 0%, transparent 70%)' }}
                />
                <span className="relative">{t('nav.contact')}</span>
              </a> */}
              <a
                href="/edwar_cruz_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  CV
                  <span className="group-hover:translate-x-1.5 transition-transform inline-block">
                    📄
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* ════ Foto + Terminal ════ */}
          <div
            className="flex flex-col gap-6 items-center lg:items-end"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateX(0)" : "translateX(50px)",
              transition:
                "opacity 1s ease 0.4s, transform 1s cubic-bezier(.16,1,.3,1) 0.4s",
            }}
          >
            <div className="relative">
              {/* Anillo exterior giratorio */}
              <div
                className="absolute rounded-full opacity-70"
                style={{
                  inset: "-10px",
                  background:
                    "conic-gradient(from 0deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)",
                  animation: "ringSpinCW 6s linear infinite",
                  filter: "blur(4px)",
                }}
              />
              {/* Anillo interior contra-giratorio */}
              <div
                className="absolute rounded-full opacity-50"
                style={{
                  inset: "-4px",
                  background:
                    "conic-gradient(from 180deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)",
                  animation: "ringSpinCCW 9s linear infinite",
                  filter: "blur(2px)",
                }}
              />
              {/* Foto */}
              <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 dark:border-[#020818] border-slate-50 shadow-2xl z-10">
                <img
                  src="/img/avatar1.svg"
                  alt="Edwar Cruz"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.style.display = "none";
                    const p = t.parentElement!;
                    p.innerHTML = `<div style="width:100%;height:100%;background:linear-gradient(135deg,#1e3a5f,#0e7490);display:flex;align-items:center;justify-content:center;"><span style="font-size:3.5rem;font-weight:800;color:#e2e8f0;font-family:monospace;letter-spacing:-2px;">EC</span></div>`;
                  }}
                />
                {/* Brillo al pasar el cursor */}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(6,182,212,0.15) 100%)",
                  }}
                />
              </div>

              {/* Badge flotante */}
              <div
                className="absolute -bottom-4 -right-4 z-20 dark:bg-slate-800/90 bg-white/90 backdrop-blur-sm border dark:border-slate-700 border-slate-200 rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-1.5"
                style={{ animation: "floatBadge 3s ease-in-out infinite" }}
              >
                <span className="text-base">⚡</span>
                <span className="text-xs font-mono font-bold dark:text-cyan-300 text-cyan-600 whitespace-nowrap">
                  Full Stack
                </span>
              </div>

              {/* Badge superior izquierdo */}
              <div
                className="absolute -top-3 -left-4 z-20 dark:bg-slate-800/90 bg-white/90 backdrop-blur-sm border dark:border-slate-700 border-slate-200 rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-1.5"
                style={{ animation: "floatBadge2 4s ease-in-out infinite" }}
              >
                <span className="text-base">🦀</span>
                <span className="text-xs font-mono font-bold dark:text-orange-300 text-orange-600">
                  JS Dev
                </span>
              </div>
            </div>

            <div
              className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl dark:shadow-black/70 shadow-slate-300/50"
              style={{
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.8s ease 1.4s",
                border: "1px solid rgba(99,179,237,0.15)",
              }}
            >
              <div className="flex items-center gap-1.5 px-4 py-3 dark:bg-slate-900 bg-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80 hover:bg-yellow-400 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
                <span className="ml-3 text-xs font-mono dark:text-slate-400 text-slate-300 tracking-wide">
                  developer.ts
                </span>
                {/* Indicador activo */}
                <span className="ml-auto flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-green-400">
                    running
                  </span>
                </span>
              </div>

              <div className="px-4 py-4 dark:bg-[#0a0f1e] bg-slate-800 font-mono text-sm leading-7 min-h-[248px]">
                {CODE_LINES.map((line, i) => (
                  <div key={i} className="flex gap-3 group">
                    <span className="select-none dark:text-slate-600 text-slate-500 text-xs w-4 text-right shrink-0 mt-0.5 group-hover:dark:text-slate-400 group-hover:text-slate-400 transition-colors">
                      {i + 1}
                    </span>
                    <span
                      style={{ color: codeLines[i]?.color ?? "transparent" }}
                    >
                      {codeLines[i]?.text ?? ""}
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-[10px] font-mono textParTwo tracking-[0.2em] uppercase">
          Ver más
        </span>
        <ChevronDown className="w-5 h-5 text-slate-400" />
      </div>

      <style>{`
        /* Aurora */
        @keyframes auroraBlob1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(80px,60px) scale(1.15); }
          66%      { transform: translate(-40px,100px) scale(0.9); }
        }
        @keyframes auroraBlob2 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%     { transform: translate(-100px,-60px) scale(1.2); }
          70%     { transform: translate(60px,-30px) scale(0.85); }
        }
        @keyframes auroraBlob3 {
          0%,100% { transform: translate(0,0) scale(1) rotate(0deg); }
          50%      { transform: translate(-80px,40px) scale(1.3) rotate(90deg); }
        }

        /* Grid */
        @keyframes gridScroll {
          from { backgroundPosition: 0 0; }
          to   { backgroundPosition: 56px 56px; }
        }
        @keyframes scanDown {
          from { backgroundPosition: 0 0; }
          to   { backgroundPosition: 0 100px; }
        }
        @keyframes dotPulse {
          0%,100% { opacity: 0.06; }
          50%      { opacity: 0.13; }
        }

        /* Meteor */
        @keyframes meteor {
          0%   { transform: translateX(0) translateY(0) rotate(-35deg); opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: translateX(-300px) translateY(300px) rotate(-35deg); opacity: 0; }
        }
        .animate-meteor {
          animation: meteor linear infinite;
          transform-origin: right center;
        }

        /* Scan line */
        @keyframes scanLine {
          0%   { top: -2px; opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        /* Partículas */
        @keyframes floatSym {
          0%,100% { transform: translateY(0) rotate(0deg);   opacity: var(--op, 0.2); }
          33%      { transform: translateY(-20px) rotate(4deg); opacity: calc(var(--op,0.2) * 1.8); }
          66%      { transform: translateY(-10px) rotate(-3deg); }
        }

        /* Foto rings */
        @keyframes ringSpinCW  { from{transform:rotate(0deg)}   to{transform:rotate(360deg)} }
        @keyframes ringSpinCCW { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }

        /* Badges */
        @keyframes floatBadge  {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes floatBadge2 {
          0%,100% { transform: translateY(0) rotate(-2deg); }
          50%      { transform: translateY(-6px) rotate(2deg); }
        }

        /* Pills shimmer */
        @keyframes pillShimmer {
          0%   { transform: translateX(-100%); opacity:0; }
          50%  { opacity:1; }
          100% { transform: translateX(200%); opacity:0; }
        }

        /* Button shimmer */
        @keyframes btnShimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        /* Gradient nombre */
        @keyframes gradient-slow {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .animate-gradient-slow {
          background-size: 200% auto;
          animation: gradient-slow 5s ease infinite;
        }

        /* Cursor terminal */
        @keyframes blink {
          0%,100% { opacity:1; }
          50%      { opacity:0; }
        }
        .animate-blink { animation: blink 0.75s step-end infinite; }
      `}</style>
    </section>
  );
}
