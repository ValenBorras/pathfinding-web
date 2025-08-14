"use client";

import Link from "next/link";
import { FaCubes, FaShieldAlt, FaPlug, FaCheckCircle, FaBug, FaClock, FaQuoteLeft, FaHandshake } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

// Custom hook for counting animation
function useCountUp(target: number) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000; // 2 seconds
          const steps = 60;
          let current = 0;

          const timer = setInterval(() => {
            current += 1;
            if (current >= steps) {
              setCount(target);
              clearInterval(timer);
            } else {
              // Easing function: starts fast, slows down (ease-out)
              const progress = current / steps;
              const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
              const currentValue = Math.floor(target * easedProgress);
              setCount(currentValue);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return { count, ref };
}

// MetricCard component for animated counters
function MetricCard({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(target);
  return (
    <div className="rounded-lg border border-[#303030] p-5" ref={ref}>
      <div className="text-3xl font-semibold">{count}{suffix}</div>
      <div className="mt-1 text-sm text-[#a2a1a1]">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero con formas y CTA */}
      <section className="container py-16 sm:py-24">
        <div className="relative">
          {/* decoraciones */}
          <div className="pointer-events-none absolute bottom-0 -right-10 h-56 w-56 rounded-full bg-[#4b4b4b]/30 blur-3xl" />

          {/* texto */}
          <div className="relative max-w-3xl">
            <h1 className="text-[52px] leading-[56px] sm:text-6xl font-medium tracking-tight">
              Tu software. Tu control.
              <br />
              Sin ataduras.
            </h1>
            <p className="mt-5 text-[22px] leading-[32px] text-[#9a9a9a]">
              Si tu proveedor actual te dejara mañana… ¿podrías seguir operando?
              Con <span className="font-medium text-[#dcdcdc]">NoLock AI</span>, la respuesta siempre es SÍ.
            </p>
            <p className="mt-6 text-[#9a9a9a]">
              En Pathfinding S.A. diseñamos, integramos y operamos soluciones que evitan el lock‑in. Arquitecturas abiertas,
              datos portables y ownership real para que tu negocio crezca con libertad.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/tools" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition bg-[#e30414] text-white">Ver productos</Link>
              <Link href="/assistance-request" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition border border-[#303030]">Contacto</Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-[#a2a1a1]">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#303030] px-3 py-1">Sin vendor lock-in</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#303030] px-3 py-1">Integraciones abiertas</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#303030] px-3 py-1">Equipo senior</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#303030] px-3 py-1">Transparencia total</span> 
            </div>
          </div>

          {/* imagen debajo del hero */}
          <div className="mt-30 relative h-72 sm:h-96 rounded-lg border border-[#303030] bg-[#1a1a1a] overflow-hidden">
            <img src="/oficinaPF.png" alt="Hero Image" className="w-full h-full object-cover rounded-lg grayscale" />
            
            {/* Quote overlay */}
            <div className="absolute inset-0 bg-black/70 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-[#dcdcdc] max-w-2xl mx-4">
                  <div className="text-xl sm:text-2xl font-extrabold mb-3 border-l-4 border-[#e30414] pl-4">
                    Código rápido, código tuyo. Construimos soluciones a velocidad de startup, pero con la robustez de una empresa con 15 años de experiencia.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas y propuesta de valor */}
      <section className="container py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard target={15} suffix="+" label="Años construyendo software" />
          <MetricCard target={99.9} suffix="%" label="Disponibilidad en producción" />
          <MetricCard target={70} suffix="+" label="Integraciones y APIs" />
          <MetricCard target={24} suffix="/7" label="Monitoreo y soporte" />
        </div>
      </section>

      {/* Beneficios clave con iconos */}
      <section className="container py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="relative rounded-lg border border-[#303030] bg-[#1a1a1a] p-6 pt-10 text-center">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-[#141414] border border-[#303030] grid place-items-center text-[#dcdcdc]">
              <FaPlug aria-hidden />
            </div>
            <h3 className="text-lg font-semibold">Arquitecturas abiertas</h3>
            <p className="mt-2 text-sm text-[#a2a1a1]">Construimos con estándares y contratos claros. Tus datos son tuyos: exportables, auditables y portables.</p>
          </div>
          <div className="relative rounded-lg border border-[#303030] bg-[#1a1a1a] p-6 pt-10 text-center">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-[#141414] border border-[#303030] grid place-items-center text-[#dcdcdc]">
              <FaCubes aria-hidden />
            </div>
            <h3 className="text-lg font-semibold">Delivery predecible</h3>
            <p className="mt-2 text-sm text-[#a2a1a1]">Sprints con objetivos medibles, tableros visibles y comunicación directa con el equipo.</p>
          </div>
          <div className="relative rounded-lg border border-[#303030] bg-[#1a1a1a] p-6 pt-10 text-center">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-[#141414] border border-[#303030] grid place-items-center text-[#dcdcdc]">
              <FaShieldAlt aria-hidden />
            </div>
            <h3 className="text-lg font-semibold">Seguridad por diseño</h3>
            <p className="mt-2 text-sm text-[#a2a1a1]">Hardening de infraestructura, CI/CD con controles y auditorías periódicas.</p>
          </div>
        </div>
      </section>

      {/* Garantías vistosas */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#e30414]/15 text-[#e30414]">
              <FaHandshake />
            </span>
            <h2 className="text-2xl font-semibold">Garantías</h2>
          </div>
          <p className="mt-2 text-sm text-[#a2a1a1]">Compromisos claros para que tomes decisiones con confianza.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-[#303030] p-5 bg-[#1a1a1a]">
              <div className="text-[#27c07d]"><FaCheckCircle /></div>
              <div className="mt-2 font-semibold">Precios claros</div>
              <p className="mt-1 text-sm text-[#a2a1a1]">Sin sorpresas: alcance y costos definidos desde el inicio.</p>
            </div>
            <div className="rounded-lg border border-[#303030] p-5 bg-[#1a1a1a]">
              <div className="text-[#ffb020]"><FaBug /></div>
              <div className="mt-2 font-semibold">Corrección de bugs</div>
              <p className="mt-1 text-sm text-[#a2a1a1]">Nos hacemos cargo de errores sin cargo y con prioridad.</p>
            </div>
            <div className="rounded-lg border border-[#303030] p-5 bg-[#1a1a1a]">
              <div className="text-[#66a3ff]"><FaClock /></div>
              <div className="mt-2 font-semibold">SLA comprometido</div>
              <p className="mt-1 text-sm text-[#a2a1a1]">Tiempos de respuesta definidos y monitoreo 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonio centrado y liviano */}
      <section className="container py-16">
        <figure className="max-w-3xl mx-auto text-center">
          <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-[#e30414] text-white grid place-items-center">
            <FaQuoteLeft />
          </div>
          <blockquote className="text-xl leading-relaxed font-medium">
            &ldquo;No seas la persona que ignora esta tecnología… quienes no logren comprender e integrar la IA… corren el riesgo de volverse obsoletos.&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-sm text-[#a2a1a1]">- Jensen Huang</figcaption>
        </figure>
      </section>

      {/* CTA final */}
      <section className="container py-16">
        <div className="rounded-lg border border-[#303030] p-6 bg-[#1a1a1a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">¿Listos para diseñar sin ataduras?</h3>
            <p className="mt-1 text-sm text-[#a2a1a1]">Hablemos sobre tu roadmap y cómo liberar el potencial de tu stack.</p>
          </div>
          <Link href="/assistance-request" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition bg-[#e30414] text-white">Agendar conversación</Link>
        </div>
      </section>
    </div>
  );
}

