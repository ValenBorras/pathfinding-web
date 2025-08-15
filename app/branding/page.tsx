// --background: #161616; /* background */
// --foreground: #dcdcdc; /* titles (bone) */
// --muted: #a2a1a1 #a2a1a1;      /* subtitles & body text */
// --border: #303030;     /* general borders */
// --card: #1a1a1a;       /* card backgrounds */
// --accent: #e30414;     /* red highlights */
// --accent-foreground: #ffffff;

import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

export const metadata = {
  title: "Branding — Pathfinding S.A.",
  description:
    "Innovación, experiencia y excelencia premiada. Descubre cómo Pathfinding S.A. lidera el camino en soluciones de e-commerce y desarrollo de software.",
};

export default function BrandingPage() {
  return (
    <div className="container py-12 sm:py-16">

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-semibold text-[#dcdcdc] mb-6">
              Branding en Pathfinding S.A.
            </h2>
            <p className="text-lg text-[#a2a1a1] leading-relaxed">
              innovacion, experiencia y excelencia premiada que define nuestro camino.
            </p>
          </div>
      
      
      {/* Innovation First Section */}
      <section className="mt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#dcdcdc] mb-6">
              Innovación Primero
            </h2>
            <p className="text-lg text-[#a2a1a1] leading-relaxed">
              En Pathfinding, la innovación es más que un valor—es nuestro principio rector. 
              Trazamos nuevos caminos y descubrimos formas más inteligentes de trabajar y 
              entregar soluciones para nuestros clientes.
            </p>
          </div>
          <div className="bg-[#1a1a1a]/30 rounded-2xl p-8 border border-[#303030]">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e30414]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#e30414]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-[#dcdcdc] font-medium">Innovación Liderando el Camino</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solid Experience, Global Reach Section */}
      <section className="mt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-8 border border-green-500/30">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <p className="text-green-300 font-medium">Alcance Global</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-semibold text-[#dcdcdc] mb-6">
              Experiencia Sólida, Alcance Global
            </h2>
            <p className="text-lg text-[#a2a1a1] leading-relaxed">
              Nuestro equipo aporta una gran riqueza de experiencia—desde liderar proyectos 
              de diseño y desarrollo de ERP para clientes internacionales hasta optimizar 
              procesos en diferentes industrias. Esta experiencia nos permite entregar 
              soluciones confiables, eficientes y visionarias.
            </p>
          </div>
        </div>
      </section>

      {/* Award-Winning Excellence Section */}
      <section className="mt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#dcdcdc] mb-6">
              Excelencia Premiada
            </h2>
            <p className="text-lg text-[#a2a1a1] leading-relaxed">
              Los esfuerzos de Pathfinding en promover y entregar excelencia han sido 
              reconocidos con el premio Exportador del Año otorgado por el Gobierno de 
              Entre Ríos (2016). Este honor refleja nuestro compromiso con la calidad 
              y nuestro impacto en el mercado global.
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-600/20 to-amber-600/20 rounded-2xl p-8 border border-yellow-500/30">
            <div className="text-center">
              <div className="w-32 h-32 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <p className="text-yellow-300 font-medium text-sm">Premio Exportador del Año</p>
                  <p className="text-yellow-400 text-xs">Gobierno de Entre Ríos 2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section - Exporter Award & IRSE Expo */}
      <section className="mt-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-xl font-semibold text-[#dcdcdc] mb-4 text-center">
              Premio Exportador del Año
            </h3>
            <div className="aspect-video bg-gray-700/50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p>Imagen del Premio</p>
                <p className="text-sm">Gobierno de Entre Ríos 2016</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
              IRSE Expo
            </h3>
            <div className="aspect-video bg-gray-700/50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p>Imagen de IRSE Expo</p>
                <p className="text-sm">Participación y Presentación</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality and ISO 9001 Commitment */}
      <section className="mt-16">
        <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-2xl p-8 border border-blue-500/30">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#dcdcdc] mb-4">
              Compromiso con la Calidad e ISO 9001
            </h2>
            <p className="text-lg text-[#a2a1a1] max-w-3xl mx-auto leading-relaxed">
              Nos enorgullece operar bajo un Sistema de Gestión de Calidad basado en ISO 9001, 
              asegurando cumplimiento, mejora continua, respeto ambiental y desarrollo 
              profesional para nuestro equipo.
            </p>
          </div>
        </div>
      </section>

      {/* Creativity & Bold Thinking */}
      <section className="mt-16">
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/30">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <blockquote className="text-2xl font-medium text-[#dcdcdc] mb-4 italic">
              "Si no estás dispuesto a arriesgar lo usual, tendrás que conformarte con lo ordinario."
            </blockquote>
            <p className="text-lg text-[#a2a1a1] max-w-3xl mx-auto leading-relaxed">
              Esta filosofía destaca una cultura de innovación y valentía en la conceptualización 
              de soluciones de e-commerce, reflejando nuestro espíritu creativo y audaz.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Nuestros Valores Fundamentales
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#dcdcdc] mb-2">Innovación</h3>
            <p className="text-[#a2a1a1] text-sm">
              Lideramos el camino con soluciones creativas y tecnologías emergentes.
            </p>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#dcdcdc] mb-2">Excelencia</h3>
            <p className="text-[#a2a1a1] text-sm">
              Compromiso con la calidad y mejora continua en todo lo que hacemos.
            </p>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#dcdcdc] mb-2">Alcance Global</h3>
            <p className="text-[#a2a1a1] text-sm">
              Experiencia internacional y soluciones adaptadas a mercados globales.
        </p>
      </div>
        </div>
      </section>
    </div>
  );
}


