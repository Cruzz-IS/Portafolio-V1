import { useRef, useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"; // Ajusta la ruta según tu proyecto
import Autoplay from "embla-carousel-autoplay";
import { IconBrandGithub } from "@tabler/icons-react";

const projects = [
  {
    title: "Campus Virtual UNAH",
    description: "Plataforma educativa completa para la gestión de cursos, estudiantes y contenido académico de la Universidad Nacional Autónoma de Honduras.",
    technologies: ["FastAPI", "Actix (Rust)", "Next.js", "PostgreSQL", "Docker"],
    linear: "from-blue-600 to-cyan-600",
    category: "Educación",
  },
  {
    title: "CityTours",
    description: "Sistema integral de gestión de viajes para taxistas, incluyendo seguimiento en tiempo real, gestión de rutas y facturación.",
    technologies: ["Node.js", "React", "MongoDB", "Socket.io", "Google Maps API"],
    linear: "from-green-600 to-emerald-600",
    category: "Transporte",
  },
  {
    title: "Junker",
    description: "Marketplace de autopartes y accesorios vehiculares nuevos y usados con sistema de inventario, pagos y gestión de vendedores.",
    technologies: ["NestJS", "Next.js", "MySQL", "MongoDB", "Stripe", "AWS S3"],
    linear: "from-orange-600 to-red-600",
    category: "E-commerce",
  },
  {
    title: "Sistema de RRHH",
    description: "Backend robusto para gestión de recursos humanos con módulos de nómina, asistencia, evaluaciones y reportes avanzados.",
    technologies: ["Actix Web (Rust)", "PostgreSQL", "Redis", "JWT", "REST API"],
    linear: "from-purple-600 to-pink-600",
    category: "Empresarial",
  },
];

export default function ProjectsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  // Escuchar el cambio de slide para actualizar los puntos (dots)
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="projects" className="py-24 themeOne animate-scroll-fade-up bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-400">
          Proyectos Destacados
        </h2>
        <p className="text-center text-slate-400 mb-16 text-lg">
          Algunos de mis trabajos más recientes y destacados
        </p>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full relative group"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-full lg:basis-full">
                <div className="group/card relative rounded-2xl overflow-hidden bg-linear-to-r from-slate-800 to-slate-900 border border-slate-700 hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div
                    className={`absolute inset-0 bg-linear-to-r ${project.linear} opacity-0 group-hover/card:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="p-8 md:p-12">
                    <div className="flex items-start justify-between mb-6">
                      <span className="px-4 py-2 rounded-full bg-slate-700/50 text-slate-300 text-sm font-medium">
                        {project.category}
                      </span>
                      <div className="flex gap-3">
                        <button className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 transition-colors">
                          <IconBrandGithub className="w-5 h-5 text-slate-300" />
                        </button>
                        <button className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 transition-colors">
                          <ExternalLink className="w-5 h-5 text-slate-300" />
                        </button>
                      </div>
                    </div>

                    <h3 className={`text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r ${project.linear}`}>
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 rounded-lg bg-slate-700/30 border border-slate-600 text-slate-300 text-sm font-medium hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="h-1 bg-linear-to-r from-transparent via-slate-600 to-transparent group-hover/card:via-blue-500 transition-all duration-500" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="">
        <CarouselPrevious className="absolute left-0  bg-transparent hover:bg-black/20 hover:text-custom-beige rounded-lg w-12 hidden md:flex" variant={"ghost"} />
        <CarouselNext className="absolute right-0  bg-transparent hover:bg-black/20 hover:text-custom-beige rounded-lg w-12 hidden md:flex" variant={"ghost"} />
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-blue-500"
                    : "w-2 bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}