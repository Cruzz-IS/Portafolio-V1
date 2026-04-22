"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { WorkflowIcon } from "lucide-react";
import { useTranslations } from "@/i18n/utils";
import type { Lang } from "@/i18n/utils";

interface Props {
  lang?: Lang;
  currentPath?: string;
}

export default function FloatingNavbar({
  lang = "es",
  currentPath = "/",
}: Props) {
  const t = useTranslations(lang);

  const navItems = [
    {
      name: t("nav.home"),
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: t("nav.about"),
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: t("nav.contact"),
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: t("nav.experience"),
      link: "#experience",
      icon: (
        <WorkflowIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <FloatingNav navItems={navItems} lang={lang} currentPath={currentPath} />
    // <div className="relative w-full translate-z-0">
    //   <FloatingNav navItems={navItems} />
    //   <DummyContent />
    // </div>
  );
}
// const DummyContent = () => {
//   return (
//     <div className="relative grid h-[1000px] w-full grid-cols-1 rounded-md border border-neutral-200 bg-white dark:border-white/20 dark:bg-black">
//       <p className="mt-40 text-center text-4xl font-bold text-neutral-600 dark:text-white">
//         Scroll back up to reveal Navbar
//       </p>
//       <div className="bg-grid-black/[0.1] dark:bg-grid-white/[0.2] absolute inset-0" />
//     </div>
//   );
// };
