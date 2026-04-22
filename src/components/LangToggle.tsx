import { languages } from "../i18n/ui";
import type { Lang } from "../i18n/utils";

interface Props {
  lang: Lang;
  currentPath: string;
}

export default function LangToggle({ lang, currentPath }: Props) {
  const otherLang = lang === "es" ? "en" : "es";
  const otherPath =
    lang === "es"
      ? `/en${currentPath}`
      : currentPath.replace(/^\/en/, "") || "/";

  return (
    <a
      href={otherPath}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium
                 border border-slate-200 dark:border-slate-700
                 hover:bg-slate-100 dark:hover:bg-slate-800
                 transition-colors"
    >
      <span>{otherLang === "en" ? "🇺🇸" : "🇭🇳"}</span>
      <span>{languages[otherLang]}</span>
    </a>
  );
}
