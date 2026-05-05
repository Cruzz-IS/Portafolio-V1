import { useState, useEffect } from "react";
import CircularGallery from "./CircularGallery";

export default function HobbiesSection() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const textColor = isDark ? "#ffffff" : "#000000";
  const bgColor = isDark ? "#020618" : "#ffffff";

  return (
    <section
      id="hobbies"
      className="pt-14 animate-scroll-fade-up"
      style={{ backgroundColor: bgColor }}
    >
      <div className="mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-400">
          Hobbies
        </h2>
        <p className="text-center text-slate-400 text-lg">
          Mis pasatiempos favoritos
        </p>

        <div
          style={{
            height: "600px",
            position: "relative",
            backgroundColor: bgColor,
          }}
        >
          <CircularGallery
            bend={3}
            borderRadius={0.05}
            scrollEase={0.02}
            scrollSpeed={2}
            textColor={textColor}
          />
        </div>
      </div>
    </section>
  );
}
