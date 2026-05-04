
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="themeOne border-t border-slate-300 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="textOne text-center md:text-left">
            © {currentYear} Edwar Cruz. Todos los derechos reservados.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-300 dark:border-slate-800">
          <div className="flex flex-wrap justify-center gap-6 text-sm textOne">
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
