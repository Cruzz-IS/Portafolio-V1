import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-center md:text-left">
            © {currentYear} Tu Nombre. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>usando Astro + React</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              Sobre Mí
            </a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Proyectos
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Habilidades
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
