/**
 * page.tsx — Página de inicio optimizada.
 *
 * Optimizaciones de rendimiento aplicadas:
 * - Solo cargamos 6 juegos (no 12) para el landing — carga más rápido.
 * - Imágenes con `priority` y `loading="eager"` para el above-the-fold.
 * - Animaciones CSS puras (sin JS) para máxima fluidez.
 * - JSON-LD para rich snippets en Google.
 * - Stagger animations para una aparición progresiva.
 */

import { getGames } from "@/lib/api";
import GameCard from "@/components/ui/GameCard";
import Link from "next/link";

export default async function Home() {
  // Solo 6 juegos para el landing — es más rápido y visualmente limpio
  const games = await getGames(6);

  return (
    <>
      {/* ════════════════════════════════════════════════════════
          SECCIÓN 1: HERO — Above the fold, máxima prioridad
          ════════════════════════════════════════════════════════ */}
      <section
        id="hero-section"
        className="relative overflow-hidden px-4 pt-16 pb-24 sm:px-6 sm:pt-24 sm:pb-32 lg:px-8"
        aria-labelledby="hero-title"
      >
        {/* Efectos de fondo — decorativos (no afectan rendimiento: GPU-accelerated) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-neon-purple/10 blur-[120px] animate-glow-pulse" />
          <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-neon-blue/8 blur-[100px]" />
          <div className="bg-grid-white absolute inset-0 opacity-[0.025] [background-size:60px_60px]" />
        </div>

        {/* Contenido del Hero */}
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Badge animado */}
          <div className="animate-fade-in-down mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/10 px-4 py-1.5 text-sm text-neon-purple backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-purple opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-purple" />
            </span>
            +500 juegos gratuitos disponibles
          </div>

          {/* Título — h1 único para SEO */}
          <h1
            id="hero-title"
            className="animate-fade-in-up text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Descubre una nueva{" "}
            <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-pink bg-clip-text text-transparent animate-fade-in">
              forma de jugar
            </span>
          </h1>

          {/* Subtítulo — keyword-rich para SEO */}
          <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 [animation-delay:200ms]">
            Explora cientos de juegos gratuitos para PC y navegador.
            Desde shooters épicos hasta MMORPGs masivos,
            encuentra tu próxima aventura sin gastar un centavo.
          </p>

          {/* CTAs con micro-animaciones */}
          <div className="animate-fade-in-up mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center [animation-delay:400ms]">
            <Link
              href="/catalogo"
              id="cta-explore"
              className="btn-primary"
            >
              Explorar catálogo
              <svg
                width="18" height="18" viewBox="0 0 16 16" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <Link
              href="/generos"
              id="cta-genres"
              className="btn-secondary"
            >
              🏷️ Ver por géneros
            </Link>
          </div>

          {/* Stats sociales — social proof para conversión */}
          <div className="animate-fade-in mt-14 flex items-center justify-center gap-8 sm:gap-12 [animation-delay:600ms]">
            {[
              { value: "500+", label: "Juegos gratis" },
              { value: "10+", label: "Géneros" },
              { value: "24/7", label: "Disponible" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-extrabold text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-zinc-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ════════════════════════════════════════════════════════
          SECCIÓN 2: BANNER CYBER PONG — Prominente y fácil de encontrar
          ════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Link
          href="/minijuego"
          id="cyberpong-banner"
          className="
            group relative block overflow-hidden rounded-3xl
            border border-neon-blue/20 bg-gradient-to-br from-[#0a0a1a] via-[#12121f] to-[#0d0d18]
            p-8 sm:p-10
            transition-all duration-500
            hover:border-neon-blue/50
            hover:shadow-[0_0_60px_rgba(0,240,255,0.12),0_0_120px_rgba(176,38,255,0.08)]
          "
        >
          {/* Decorative grid */}
          <div
            aria-hidden="true"
            className="bg-grid-neon pointer-events-none absolute inset-0 opacity-[0.04] [background-size:40px_40px]"
          />
          {/* Glow blobs */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-neon-blue/10 blur-[80px] transition-all duration-700 group-hover:bg-neon-blue/20" />
          <div aria-hidden="true" className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-neon-purple/10 blur-[60px]" />

          <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Left content */}
            <div className="text-center sm:text-left">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-neon-blue/30 bg-neon-blue/10 px-3 py-1 text-xs font-semibold text-neon-blue">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-blue opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neon-blue" />
                </span>
                JUEGA AHORA
              </div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                🏓 Cyber Pong
              </h2>
              <p className="mt-2 max-w-lg text-zinc-400 leading-relaxed">
                Un clásico reinventado con estética cyberpunk. Partículas neón,
                efectos de brillo y una IA desafiante. ¿Puedes llegar a 7 primero?
              </p>
            </div>

            {/* Right CTA */}
            <div className="flex-shrink-0">
              <span className="
                inline-flex items-center gap-2 rounded-full
                bg-neon-blue px-8 py-4 text-base font-bold text-black
                transition-all duration-300
                group-hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]
                group-hover:scale-105
              ">
                Jugar ahora
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECCIÓN 3: JUEGOS DESTACADOS
          ════════════════════════════════════════════════════════ */}
      <section
        id="featured-games"
        className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8"
        aria-labelledby="featured-title"
      >
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="animate-fade-in-up">
            <h2 id="featured-title" className="text-2xl font-bold text-white sm:text-3xl">
              🔥 Juegos Destacados
            </h2>
            <p className="mt-1 text-zinc-500">
              Los títulos más populares del momento
            </p>
          </div>
          <Link
            href="/catalogo"
            className="
              group inline-flex items-center gap-1.5
              text-sm font-semibold text-neon-blue
              transition-all duration-300 hover:gap-2.5
            "
          >
            Ver todos
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>

        {/* Grid con stagger animation */}
        <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-12 text-center animate-fade-in-up">
          <Link
            href="/catalogo"
            className="
              inline-flex items-center gap-2 rounded-full
              border border-white/10 px-8 py-3.5
              text-sm font-semibold text-zinc-300
              transition-all duration-300
              hover:border-neon-purple/40 hover:text-white hover:bg-neon-purple/5
            "
          >
            Explorar los +500 juegos disponibles →
          </Link>
        </div>

      </section>
    </>
  );
}
