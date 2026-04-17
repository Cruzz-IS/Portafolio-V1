import { GraduationCap, Code, Briefcase } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-950 animate-scroll-fade-up">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-400">
          Sobre Mí
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Soy un Ingeniero en Sistemas graduado de la Universidad Nacional Autónoma de Honduras (UNAH),
              apasionado por crear soluciones tecnológicas innovadoras y escalables.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Mi experiencia abarca desde el desarrollo de plataformas educativas hasta sistemas de gestión empresarial,
              utilizando tecnologías modernas como Rust, Python, TypeScript, C# y frameworks de última generación.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Me especializo en arquitecturas backend robustas y frontends dinámicos, siempre buscando
              las mejores prácticas y patrones de diseño para entregar productos de alta calidad.
            </p>
          </div>

          <div className="space-y-6">
            <div className="group p-6 rounded-xl bg-linear-to-r from-slate-900 to-slate-800 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Educación</h3>
                  <p className="text-slate-400">Ingeniería en Sistemas</p>
                  <p className="text-slate-500 text-sm">Universidad Nacional Autónoma de Honduras (UNAH)</p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-xl bg-linear-to-r from-slate-900 to-slate-800 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                  <Code className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Especialización</h3>
                  <p className="text-slate-400">Desarrollo Full Stack</p>
                  <p className="text-slate-500 text-sm">Backend, Frontend & Arquitectura de Software</p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-xl bg-linear-to-r from-slate-900 to-slate-800 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                  <Briefcase className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Experiencia</h3>
                  <p className="text-slate-400">Proyectos Enterprise</p>
                  <p className="text-slate-500 text-sm">Plataformas educativas, gestión empresarial y e-commerce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
