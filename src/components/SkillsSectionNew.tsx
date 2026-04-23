import { useEffect, useRef, useState } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiRust,
  SiCplusplus,
  SiFastapi,
  SiDjango,
  SiExpress,
  SiNextdotjs,
  SiReact,
  SiDotnet,
  SiNestjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiTalend,
  SiDocker,
  SiVercel,
  SiHtml5,
  SiTailwindcss,
  SiK6,
  SiJest,
  SiGithub,
  SiGithubactions,
  SiJira,
  SiTrello,
  SiNodedotjs,
  SiCisco,
} from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type Category = {
  title: string;
  accent: string;
  headerGradient: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: "Lenguajes",
    accent: "#3b82f6",
    headerGradient: "from-blue-500/20 to-blue-600/5",
    skills: [
      { name: "JavaScript", icon: <SiJavascript size={32} color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript size={32} color="#3178C6" /> },
      { name: "Python", icon: <SiPython size={32} color="#3776AB" /> },
      { name: "Rust", icon: <SiRust size={32} color="#CE422B" /> },
      { name: "C++", icon: <SiCplusplus size={32} color="#00599C" /> },
      { name: "Java", icon: <SiJava size={32} color="#ED8B00" /> },
    ],
  },
  {
    title: "Frameworks",
    accent: "#8b5cf6",
    headerGradient: "from-violet-500/20 to-violet-600/5",
    skills: [
      { name: "FastAPI", icon: <SiFastapi size={32} color="#009688" /> },
      { name: "Django", icon: <SiDjango size={32} color="#44B78B" /> },
      { name: "Node.js", icon: <SiNodedotjs size={32} color="#339933" /> },
      { name: "Express", icon: <SiExpress size={32} color="#888888" /> },
      { name: "Next.js", icon: <SiNextdotjs size={32} color="#888888" /> },
      { name: "React", icon: <SiReact size={32} color="#61DAFB" /> },
      { name: "ASP.NET", icon: <SiDotnet size={32} color="#512BD4" /> },
      { name: "Actix", icon: <SiRust size={32} color="#CE422B" /> },
      { name: "Nest.js", icon: <SiNestjs size={32} color="#E0234E" /> },
    ],
  },
  {
    title: "Bases de Datos",
    accent: "#10b981",
    headerGradient: "from-emerald-500/20 to-emerald-600/5",
    skills: [
      {
        name: "SQL Server",
        icon: <SiMicrosoftSqlserver size={32} color="#CC2927" />,
      },
      { name: "Oracle SQL", icon: <SiOracle size={32} color="#F80000" /> },
      { name: "MySQL", icon: <SiMysql size={32} color="#4479A1" /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={32} color="#4169E1" /> },
      { name: "MongoDB Atlas", icon: <SiMongodb size={32} color="#47A248" /> },
      { name: "Supabase", icon: <SiSupabase size={32} color="#3ECF8E" /> },
    ],
  },
  {
    title: "ETL & Data",
    accent: "#f97316",
    headerGradient: "from-orange-500/20 to-orange-600/5",
    skills: [
      { name: "Talend", icon: <SiTalend size={32} color="#FF6D70" /> },
      {
        name: "SSIS",
        icon: <SiMicrosoftSqlserver size={32} color="#CC2927" />,
      },
      {
        name: "SSAS",
        icon: <SiMicrosoftSqlserver size={32} color="#8A2BE2" />,
      },
      { name: "Power BI", icon: <SiPowerbi size={32} color="#F2C811" /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    accent: "#06b6d4",
    headerGradient: "from-cyan-500/20 to-cyan-600/5",
    skills: [
      { name: "Docker", icon: <SiDocker size={32} color="#2496ED" /> },
      {
        name: "AWS RDS",
        icon: <SiAmazonwebservices size={32} color="#FF9900" />,
      },
      { name: "Vercel", icon: <SiVercel size={32} color="#888888" /> },
    ],
  },
  {
    title: "Dev & Testing",
    accent: "#14b8a6",
    headerGradient: "from-teal-500/20 to-teal-600/5",
    skills: [
      { name: "HTML5", icon: <SiHtml5 size={32} color="#E34F26" /> },
      { name: "CSS3", icon: <SiCss3 size={32} color="#1572B6" /> },
      { name: "Tailwind", icon: <SiTailwindcss size={32} color="#06B6D4" /> },
      { name: "K6", icon: <SiK6 size={32} color="#7D64FF" /> },
      { name: "Jest", icon: <SiJest size={32} color="#C21325" /> },
    ],
  },
  {
    title: "Redes",
    accent: "#f43f5e",
    headerGradient: "from-rose-500/20 to-rose-600/5",
    skills: [
      { name: "GNS3", icon: <FaNetworkWired size={32} color="#00A8E0" /> },
      { name: "Packet Tracer", icon: <SiCisco size={32} color="#1BA0D7" /> },
      { name: "Cisco CCNA", icon: <SiCisco size={32} color="#1BA0D7" /> },
      { name: "Huawei", icon: <FaNetworkWired size={32} color="#CF0A2C" /> },
    ],
  },
  {
    title: "CI/CD & Gestión",
    accent: "#f59e0b",
    headerGradient: "from-amber-500/20 to-amber-600/5",
    skills: [
      { name: "GitHub", icon: <SiGithub size={32} color="#888888" /> },
      {
        name: "GitHub Actions",
        icon: <SiGithubactions size={32} color="#2088FF" />,
      },
      { name: "Jira", icon: <SiJira size={32} color="#0052CC" /> },
      { name: "Trello", icon: <SiTrello size={32} color="#0079BF" /> },
    ],
  },
  {
    title: "Office 365",
    accent: "#0ea5e9",
    headerGradient: "from-sky-500/20 to-sky-600/5",
    skills: [
      { name: "Excel", icon: <SiMicrosoftexcel size={32} color="#217346" /> },
      {
        name: "PowerPoint",
        icon: <SiMicrosoftpowerpoint size={32} color="#D24726" />,
      },
      { name: "Word", icon: <SiMicrosoftword size={32} color="#2B579A" /> },
      { name: "Teams", icon: <SiMicrosoftteams size={32} color="#6264A7" /> },
    ],
  },
];

/* ── Tarjeta individual de skill ── */
function SkillPill({ skill }: { skill: Skill }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        flex flex-col items-center justify-start gap-2 p-3 rounded-xl
        border transition-all duration-200 cursor-default select-none
        dark:border-white/10 border-black/10
        dark:bg-white/5 bg-black/5
        ${hovered ? "dark:bg-white/10 bg-black/10 -translate-y-1 shadow-md dark:shadow-black/40 shadow-black/10" : ""}
      `}
    >
      <div
        className="transition-transform duration-200"
        style={{ transform: hovered ? "scale(1.18)" : "scale(1)" }}
      >
        {skill.icon}
      </div>
      <span className="text-[11px] font-medium text-center leading-tight textParTwo w-full">
        {skill.name}
      </span>
    </div>
  );
}

/* ── Card de categoría ── */
function CategoryCard({
  category,
  cardIndex,
  isVisible,
}: {
  category: Category;
  cardIndex: number;
  isVisible: boolean;
}) {
  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.55s ease ${cardIndex * 0.08}s, transform 0.55s ease ${cardIndex * 0.08}s`,
      }}
    >
      <div className="rounded-2xl border overflow-hidden h-full dark:border-white/10 border-black/10 dark:bg-white/[0.03] bg-black/[0.03]">
        {/* Header */}
        <div
          className={`px-5 py-3 bg-gradient-to-r ${category.headerGradient} border-b dark:border-white/10 border-black/10 flex items-center gap-2`}
        >
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: category.accent }}
          />
          <h3 className="text-sm font-semibold textTwo tracking-wide">
            {category.title}
          </h3>
        </div>

        {/* Grid de icons */}
        <div className="p-4">
          <div
            className="grid gap-2"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(76px, 1fr))",
            }}
          >
            {category.skills.map((skill) => (
              <SkillPill key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Sección principal ── */
export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.06 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 themeOne">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Habilidades Técnicas
          </h2>
          <p className="textParTwo text-lg max-w-xl mx-auto">
            Tecnologías y herramientas con las que trabajo
          </p>
        </div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <CategoryCard
              key={cat.title}
              category={cat}
              cardIndex={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
