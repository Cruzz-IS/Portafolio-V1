import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Campus Virtual UNAH',
    description: 'Plataforma educativa completa para la gestión de cursos, estudiantes y contenido académico de la Universidad Nacional Autónoma de Honduras.',
    technologies: ['FastAPI', 'Actix (Rust)', 'Next.js', 'PostgreSQL', 'Docker'],
    gradient: 'from-blue-600 to-cyan-600',
    category: 'Educación',
  },
  {
    title: 'CityTours',
    description: 'Sistema integral de gestión de viajes para taxistas, incluyendo seguimiento en tiempo real, gestión de rutas y facturación.',
    technologies: ['Node.js', 'React', 'MongoDB', 'Socket.io', 'Google Maps API'],
    gradient: 'from-green-600 to-emerald-600',
    category: 'Transporte',
  },
  {
    title: 'Junker',
    description: 'Marketplace de autopartes y accesorios vehiculares nuevos y usados con sistema de inventario, pagos y gestión de vendedores.',
    technologies: ['NestJS', 'Next.js', 'MySQL', 'MongoDB', 'Stripe', 'AWS S3'],
    gradient: 'from-orange-600 to-red-600',
    category: 'E-commerce',
  },
  {
    title: 'Sistema de RRHH',
    description: 'Backend robusto para gestión de recursos humanos con módulos de nómina, asistencia, evaluaciones y reportes avanzados.',
    technologies: ['Actix Web (Rust)', 'PostgreSQL', 'Redis', 'JWT', 'REST API'],
    gradient: 'from-purple-600 to-pink-600',
    category: 'Empresarial',
  },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 bg-slate-900 animate-scroll-fade-up">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-400">
          Proyectos Destacados
        </h2>
        <p className="text-center text-slate-400 mb-16 text-lg">
          Algunos de mis trabajos más recientes y destacados
        </p>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out cursor-pointer"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <div className="group relative rounded-2xl overflow-hidden bg-linear-to-r from-slate-800 to-slate-900 border border-slate-700 hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                    <div className={`absolute inset-0 bg-linear-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    <div className="p-8 md:p-12">
                      <div className="flex items-start justify-between mb-6">
                        <span className="px-4 py-2 rounded-full bg-slate-700/50 text-slate-300 text-sm font-medium">
                          {project.category}
                        </span>
                        <div className="flex gap-3">
                          <button className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 transition-colors">
                            {/* <Github className="w-5 h-5 text-slate-300" /> */}
                          </button>
                          <button className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 transition-colors">
                            <ExternalLink className="w-5 h-5 text-slate-300" />
                          </button>
                        </div>
                      </div>

                      <h3 className={`text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r ${project.gradient}`}>
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

                    <div className="h-1 bg-linear-to-r from-transparent via-slate-600 to-transparent group-hover:via-blue-500 transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevProject}
            className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full bg-slate-800 border border-slate-700 hover:border-blue-500 hover:bg-slate-700 transition-all duration-300 shadow-xl"
          >
            <ChevronLeft className="w-6 h-6 text-slate-300" />
          </button>

          <button
            onClick={nextProject}
            className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full bg-slate-800 border border-slate-700 hover:border-blue-500 hover:bg-slate-700 transition-all duration-300 shadow-xl"
          >
            <ChevronRight className="w-6 h-6 text-slate-300" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-blue-500'
                    : 'w-2 bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
