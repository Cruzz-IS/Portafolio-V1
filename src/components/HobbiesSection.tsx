import React from "react";
import CircularGallery from "./CircularGallery";

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-24 bg-slate-900 animate-scroll-fade-up">
      <div className="mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-400">
          Hobbies
        </h2>

        <div></div>
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
            scrollSpeed={2}
          />
        </div>
      </div>
    </section>
  );
}
