import { useEffect, useRef, useState } from "react";
import { useTranslations } from "../i18n/utils";

interface Props {
  lang?: "es" | "en";
}

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const dev = (
  name: string,
  variant:
    | "original"
    | "plain"
    | "original-wordmark"
    | "plain-wordmark" = "original",
) => `${CDN}/${name}/${name}-${variant}.svg`;

type Skill = { name: string; icon: string };
type Category = {
  title: string;
  accent: string;
  headerGradient: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: "Lenguajes de Programación",
    accent: "#3b82f6",
    headerGradient: "from-blue-500/20 to-blue-600/5",
    skills: [
      { name: "JavaScript", icon: dev("javascript") },
      { name: "TypeScript", icon: dev("typescript") },
      { name: "Python", icon: dev("python") },
      { name: "Rust", icon: dev("rust") },
      { name: "C++", icon: dev("cplusplus") },
      { name: "Java", icon: dev("java") },
    ],
  },
  {
    title: "Frameworks",
    accent: "#8b5cf6",
    headerGradient: "from-violet-500/20 to-violet-600/5",
    skills: [
      { name: "FastAPI", icon: dev("fastapi") },
      { name: "Django", icon: dev("django", "plain") },
      { name: "Node.js", icon: dev("nodejs") },
      { name: "Express", icon: dev("express", "original") },
      { name: "Next.js", icon: dev("nextjs", "original") },
      { name: "React", icon: dev("react") },
      { name: "ASP.NET", icon: dev("dot-net", "original") },
      { name: "Actix", icon: dev("rust") },
      { name: "Nest.js", icon: dev("nestjs") },
    ],
  },
  {
    title: "Bases de Datos",
    accent: "#10b981",
    headerGradient: "from-emerald-500/20 to-emerald-600/5",
    skills: [
      { name: "SQL Server", icon: dev("microsoftsqlserver") },
      { name: "Oracle SQL", icon: dev("oracle") },
      { name: "MySQL", icon: dev("mysql") },
      { name: "PostgreSQL", icon: dev("postgresql") },
      { name: "MongoDB Atlas", icon: dev("mongodb") },
      { name: "Supabase", icon: dev("supabase") },
    ],
  },
  {
    title: "ETL & Data Engineering",
    accent: "#f97316",
    headerGradient: "from-orange-500/20 to-orange-600/5",
    skills: [
      {
        name: "Talend",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/97/Talend_logo.svg",
      },
      {
        name: "Power BI",
        icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
      },
      { name: "SSIS", icon: dev("microsoftsqlserver") },
      { name: "SSAS", icon: dev("microsoftsqlserver") },
    ],
  },
  {
    title: "Cloud & DevOps",
    accent: "#06b6d4",
    headerGradient: "from-cyan-500/20 to-cyan-600/5",
    skills: [
      { name: "Docker", icon: dev("docker") },
      { name: "AWS RDS", icon: dev("amazonwebservices", "original-wordmark") },
      { name: "Vercel", icon: dev("vercel") },
    ],
  },
  {
    title: "Desarrollo & Testing",
    accent: "#14b8a6",
    headerGradient: "from-teal-500/20 to-teal-600/5",
    skills: [
      { name: "HTML5", icon: dev("html5") },
      { name: "CSS3", icon: dev("css3") },
      { name: "Tailwind", icon: dev("tailwindcss") },
      {
        name: "K6",
        icon: "https://avatars.githubusercontent.com/u/54012786?s=200&v=4",
      },
      { name: "Jest", icon: dev("jest", "plain") },
      // { name: "Playwright", icon: dev("playwright") },
      { name: "pytest", icon: dev("pytest") },
    ],
  },
  {
    title: "Redes",
    accent: "#f43f5e",
    headerGradient: "from-rose-500/20 to-rose-600/5",
    skills: [
      { name: "Cisco / CCNA", icon: "/cisco-svgrepo-com.svg" },
      { name: "Huawei", icon: "/huawei-svgrepo-com.svg" },
      { name: "GNS3", icon: "/gns3_94911.svg" },
      { name: "Packet Tracer", icon: "/icons8-cisco-packet-tracer.svg" },
    ],
  },
  {
    title: "CI/CD & Gestión",
    accent: "#f59e0b",
    headerGradient: "from-amber-500/20 to-amber-600/5",
    skills: [
      { name: "GitHub", icon: dev("github") },
      { name: "GitHub Actions", icon: dev("githubactions") },
      { name: "Jira", icon: dev("jira") },
      { name: "Trello", icon: dev("trello") },
    ],
  },
  {
    title: "Microsoft 365",
    accent: "#0ea5e9",
    headerGradient: "from-sky-500/20 to-sky-600/5",
    skills: [
      { name: "Excel", icon: "/microsoft-excel-2013-logo-svgrepo-com.svg" },
      {
        name: "PowerPoint",
        icon: "/microsoft-powerpoint-2013-logo-svgrepo-com.svg",
      },
      { name: "Word", icon: "/microsoft-word-2013-logo-logo-svgrepo-com.svg" },
      { name: "Teams", icon: "/microsoft-teams-logo-svgrepo-com.svg" },
    ],
  },
];

function SkillPill({ skill }: { skill: Skill }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

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
        className="w-9 h-9 flex items-center justify-center transition-transform duration-200"
        style={{ transform: hovered ? "scale(1.18)" : "scale(1)" }}
      >
        {!imgError ? (
          <img
            src={skill.icon}
            alt={skill.name}
            width={34}
            height={34}
            loading="lazy"
            className="w-full h-full object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          // Fallback si la imagen falla
          <div className="w-8 h-8 rounded-lg dark:bg-white/10 bg-black/10 flex items-center justify-center">
            <span className="text-xs font-bold textParTwo">
              {skill.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>
      <span className="text-[11px] font-medium text-center leading-tight textParTwo w-full">
        {skill.name}
      </span>
    </div>
  );
}

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
        <div
          className={`px-5 py-3 bg-linear-to-r ${category.headerGradient} border-b dark:border-white/10 border-black/10 flex items-center gap-2`}
        >
          <div
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: category.accent }}
          />
          <h3 className="text-sm font-semibold textTwo tracking-wide">
            {category.title}
          </h3>
        </div>

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

export default function SkillsSection({ lang = "es" }: Props) {
  const t = useTranslations(lang);
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
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-400">
            Habilidades Técnicas
          </h2>
          <p className="textParTwo text-lg max-w-xl mx-auto">
            Tecnologías y herramientas con las que trabajo
          </p>
        </div>

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
