import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Mail, MapPin } from "lucide-react";
import { LinkPreview } from "./ui/link-preview";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 themeTwo animate-scroll-fade-up">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-400 pb-12">
          Contacto
        </h2>
        <p className="text-center text-slate-400 mb-16 text-lg">
          Aqui veras mis proyectos más destacados, puedes hacer click en cada
          uno para ver mas detalles.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a
            href="mailto:edwarcruz2000@gmail.com"
            className="group w-72 md:w-full p-8 rounded-xl bg-linear-to-br cardBg hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <div className="flex items-center gap-4 text-sm md:text-md">
              <div className="p-3 md:p-4 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <Mail className="w-4 h-4 md:w-8 md:h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="textThree mb-1">Email</h3>
                <p className="text-slate-400">edwarcruz2000@gmail.com</p>
              </div>
            </div>
          </a>

          <div
            // url="https://linkedin.com/in/edwarrcruz"
            // target="_blank"
            // rel="noopener noreferrer"
            className="group p-8 rounded-xl  w-72 md:w-full bg-linear-to-br cardBg hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <div className="flex items-center gap-4 text-sm md:text-md">
              <div className="p-3 md:p-4 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <IconBrandLinkedin className="w-4 h-4 md:w-8 md:h-8 text-blue-400" />
              </div>
              <div>
                <LinkPreview
                  url="https://linkedin.com/in/edwarrcruz/"
                  imageSrc="/img/linkedin.webp"
                  isStatic
                  className="font-bold"
                >
                  <h3 className="textThree mb-1">Linkedin</h3>
                </LinkPreview>
                <p className="text-slate-400">Conecta conmigo</p>
              </div>
            </div>
          </div>

          {/* <a
            href="https://linkedin.com/in/edwarrcruz"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-xl bg-linear-to-br cardBg hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <div className="flex items-center gap-4 text-sm md:text-md">
              <div className="p-4 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <IconBrandLinkedin className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="textThree mb-1">
                  LinkedIn
                </h3>
                <p className="text-slate-400">Conecta conmigo</p>
              </div>
            </div>
          </a> */}

          <div
            // url="https://github.com/Cruzz-IS"
            // target="_blank"
            // rel="noopener noreferrer"
            className="group w-72 md:w-full p-8 rounded-xl bg-linear-to-br cardBg hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <div className="flex items-center gap-4 text-sm md:text-md">
              <div className="p-3 md:p-4 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <IconBrandGithub className="w-4 h-4 md:w-8 md:h-8 text-blue-400" />
              </div>
              <div>
                <LinkPreview url="https://github.com/Cruzz-IS">
                  <h3 className="textThree mb-1">GitHub</h3>
                </LinkPreview>
                <p className="text-slate-400">Ve mis proyectos</p>
              </div>
            </div>
          </div>

          <div className="group w-72 md:w-full p-8 rounded-xl bg-linear-to-br cardBg hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
            <div className="flex items-center gap-4 text-sm md:text-md">
              <div className="p-3 md:p-4 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <MapPin className="w-4 h-4 md:w-8 md:h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="textThree mb-1">Ubicación</h3>
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
