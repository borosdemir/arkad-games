/**
 * /doom/page.tsx — Página del clásico DOOM.
 *
 * Integración mediante emulación DOS en el navegador.
 */

import DoomPlayer from "@/components/game/DoomPlayer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DOOM (1993) | Arkad Games",
  description: "Juega al clásico Doom original directamente en tu navegador. Experiencia retro completa en Arkad Games.",
};

export default function DoomPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Encabezado */}
      <div className="mb-8 text-center animate-fade-in">
        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/10 px-4 py-1.5 text-sm text-neon-purple">
          🕰️ Un clásico entre clásicos
        </div>
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl tracking-tighter">
          DOOM <span className="text-neon-pink">1993</span>
        </h1>
        <p className="mt-3 text-zinc-500 max-w-2xl mx-auto">
          Experimenta el juego que definió el género de disparos en primera persona. 
          Ejecutando la versión shareware original mediante emulación de alto rendimiento.
        </p>
      </div>

      {/* Juego */}
      <DoomPlayer />

      {/* Link al catálogo y disclaimer */}
      <div className="mt-12 text-center space-y-6">
        <div className="max-w-md mx-auto p-4 rounded-xl border border-white/5 bg-white/[0.02] text-[11px] text-zinc-600 leading-relaxed">
          <p>
            <strong>Aviso Legal:</strong> Esta versión utiliza el archivo DOOM1.WAD (Shareware), 
            distribuido legalmente para fines de demostración. El motor js-dos se distribuye 
            bajo licencia GPL. No se alojan archivos con copyright restrictivo.
          </p>
        </div>

        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 text-sm font-medium text-neon-blue transition-colors hover:text-white"
        >
          ← Volver al catálogo principal
        </Link>
      </div>
    </section>
  );
}
 
 
