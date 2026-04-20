import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-900 animate-scroll-fade-up">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-400 pb-12">
          Contacto
        </h2>
        {/* <p className="text-center text-slate-400 mb-16 text-lg">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p> */}

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a
            href="mailto:edwarcruz2000@gmail.com"
            className="group p-8 rounded-xl bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Email</h3>
                <p className="text-slate-400">edwarcruz2000@gmail.com</p>
              </div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/edwarrcruz"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-xl bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <IconBrandLinkedin className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  LinkedIn
                </h3>
                <p className="text-slate-400">Conecta conmigo</p>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/Cruzz-IS"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-xl bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <IconBrandGithub className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  GitHub
                </h3>
                <p className="text-slate-400">Ve mis proyectos</p>
              </div>
            </div>
          </a>

          <div className="group p-8 rounded-xl bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <MapPin className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Ubicación
                </h3>
                <p className="text-slate-400">Tegucigalpa, Honduras</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="text-center">
          <a
            href="mailto:tu-email@ejemplo.com"
            className="inline-block px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            Envíame un mensaje
          </a>
        </div> */}
      </div>
    </section>
  );
}
