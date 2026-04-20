import CircularGallery from "./CircularGallery";

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-24 bg-white dark:bg-neutral-950 animate-scroll-fade-up">
      <div className="mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-400">
          Hobbies
        </h2>

        <div></div>
        <div style={{ height: "600px", position: "relative" }}
        className="bg-gray-900 dark:bg-gray-100">
          <CircularGallery
            bend={3}
            borderRadius={0.05}
            scrollEase={0.02}
            scrollSpeed={2}
            className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900"
          />
        </div>
      </div>
    </section>
  );
}
