import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from '../i18n/utils';

interface Props {
  lang?: 'es' | 'en';
}

export default function HeroSection({ lang = 'es' }: Props) {
  const t = useTranslations(lang);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br themeThree">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 animate-gradient">
            {t('hero.greeting')} Edwar Rene Cruz
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl textOne mb-8 font-light">
            {t('hero.role')}
          </h2>
          {/* <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"> */}
          <p className="text-lg md:text-xl textTwo max-w-3xl mx-auto mb-12 leading-relaxed">
            Analista de Datos, Desarrollador Full Stack especializado en arquitecturas escalables y modernas.
            Graduado de la UNAH con experiencia en Desarrollo Full Stack, Redes de datos, Bases de Datos, Infraestructura y DevOps.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="group px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Ver Proyectos
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-slate-600 textOne rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              Contacto
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-500" />
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
