import { Timeline } from "./ui/timeline";

export default function ExperienceSection() {
  const data = [
    {
      title: "Febrero 2025 - Julio 2025",
      content: (
        <div>
          <h1 className="mb-8 sm:text-md md:text-2xl lg:text-3xl font-bold textTwo">
            Sercom de Honduras
          </h1>
          <div className="grid grid-cols-1 gap-4 textParTwo">
            <div>
              <p>
                ● Desarrollé e implementé procesos ETL utilizando Talend Open
                Studio para la extracción, transformación y carga de datos desde
                múltiples fuentes hacia distintas bases de datos.
              </p>
            </div>
            <div>
              <p>
                ● Gestioné bases de datos Oracle Database y MySQL, asegurando la
                integridad y disponibilidad de la información.
              </p>
            </div>
            <div>
              <p>
                ● Generé reportes analíticos y de configuración de redes de
                datos para el área de Ingeniería de Clientes Corporativos
                utilizando Excel y consultas SQL avanzadas.
              </p>
            </div>
          </div>
        </div>
        // <div className="grid grid-cols-2 gap-4 textParTwo">
        //   <img
        //     src="https://assets.aceternity.com/templates/startup-1.webp"
        //     alt="startup template"
        //     width={500}
        //     height={500}
        //     className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //   />
        //   <img
        //     src="https://assets.aceternity.com/templates/startup-2.webp"
        //     alt="startup template"
        //     width={500}
        //     height={500}
        //     className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //   />
        //   <img
        //     src="https://assets.aceternity.com/templates/startup-3.webp"
        //     alt="startup template"
        //     width={500}
        //     height={500}
        //     className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //   />
        //   <img
        //     src="https://assets.aceternity.com/templates/startup-4.webp"
        //     alt="startup template"
        //     width={500}
        //     height={500}
        //     className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //   />
        // </div>
      ),
    },
    {
      title: "Enero 2021 - Diciembre 2024",
      content: (
        <div>
          <h1 className="mb-8 sm:text-md md:text-2xl lg:text-3xl font-bold textTwo">
            APROTEC
          </h1>
          <div className="grid grid-cols-1 gap-4 textParTwo">
            <div>
              <p>
                ● Instalé y operé equipos de audio, iluminación DMX (MyDmx y
                Onyx) y pantallas led (Resolume Arena) para más de 100 eventos
                corporativos, conciertos, bodas y celebraciones.
              </p>
            </div>
            <div>
              <p>
                ● Brindé soporte técnico especializado en tiempo real,
                manteniendo una tasa de éxito del 95% en la ejecución de eventos
                sin interrupciones técnicas.
              </p>
            </div>
          </div>
        </div>
        // <div>
        //   <h1 className="mb-8 sm:text-md md:text-2xl lg:text-3xl font-bold textTwo">
        //     Aprotec
        //   </h1>
        //   <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        //     Lorem ipsum is for people who are too lazy to write copy. But we are
        //     not. Here are some more example of beautiful designs I built.
        //   </p>
        //   <div className="grid grid-cols-2 gap-4 textParTwo">
        //     <img
        //       src="https://assets.aceternity.com/pro/hero-sections.png"
        //       alt="hero template"
        //       width={500}
        //       height={500}
        //       className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //     />
        //     <img
        //       src="https://assets.aceternity.com/features-section.png"
        //       alt="feature template"
        //       width={500}
        //       height={500}
        //       className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //     />
        //     <img
        //       src="https://assets.aceternity.com/pro/bento-grids.png"
        //       alt="bento template"
        //       width={500}
        //       height={500}
        //       className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //     />
        //     <img
        //       src="https://assets.aceternity.com/cards.png"
        //       alt="cards template"
        //       width={500}
        //       height={500}
        //       className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //     />
        //   </div>
        // </div>
      ),
    },
    {
      title: "Julio 2019 - Mayo 2020",
      content: (
        <div>
          <h1 className="mb-8 sm:text-md md:text-2xl lg:text-3xl font-bold textTwo">
            OPS Contact Center
          </h1>
          <div className="grid grid-cols-1 gap-4 textParTwo">
            <div>
              <p>
                ● Gestioné cobros de más de 30 cuentas mensuales de planes
                móviles y residenciales vía Call Center. Contribuí al
                cumplimiento de la meta mensual de recuperación de cartera
                mediante seguimiento y negociación efectiva con clientes.
              </p>
            </div>
            <div>
              <p>
                ● Brindé atención al cliente manteniendo un índice de
                satisfacción superior al 90%.
              </p>
            </div>
          </div>
        </div>
        // <div>
        //   <h1 className="mb-8 sm:text-md md:text-2xl lg:text-3xl font-bold textTwo">
        //     OPS Contact Center
        //   </h1>
        //   <div className="mb-8">
        //     <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //       ✅ Card grid component
        //     </div>
        //     <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //       ✅ Startup template Aceternity
        //     </div>
        //     <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //       ✅ Random file upload lol
        //     </div>
        //     <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //       ✅ Himesh Reshammiya Music CD
        //     </div>
        //     <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //       ✅ Salman Bhai Fan Club registrations open
        //     </div>
        //   </div>
        //   <div className="grid grid-cols-2 gap-4 textParTwo">
        //     <img
        //       src="https://assets.aceternity.com/pro/hero-sections.png"
        //       alt="hero template"
        //       width={500}
        //       height={500}
        //       className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //     />
        //     <img
        //       src="https://assets.aceternity.com/features-section.png"
        //       alt="feature template"
        //       width={500}
        //       height={500}
        //       className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //     />
        //     <img
        //       src="https://assets.aceternity.com/pro/bento-grids.png"
        //       alt="bento template"
        //       width={500}
        //       height={500}
        //       className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //     />
        //     <img
        //       src="https://assets.aceternity.com/cards.png"
        //       alt="cards template"
        //       width={500}
        //       height={500}
        //       className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //     />
        //   </div>
        // </div>
      ),
    },
  ];
  return (
    <section id="experience" className="relative w-full overflow-clip">
      <Timeline data={data} />
    </section>
  );
}
