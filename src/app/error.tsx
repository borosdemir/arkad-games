"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Aquí podrías enviar el error a un servicio como Sentry
    console.error("Global Error Boundary caught:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center">
      <div className="mb-6 text-6xl">⚠️</div>
      <h2 className="mb-2 text-2xl font-black text-white uppercase tracking-tighter sm:text-3xl">
        Error de Protocolo Detectado
      </h2>
      <p className="mb-10 max-w-md text-zinc-500 text-sm leading-relaxed">
        El núcleo de Arkad Games ha experimentado una anomalía. No te preocupes,
        nuestros sistemas de respaldo están listos para reiniciar.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => reset()}
          className="btn-primary"
        >
          Reiniciar Sistema
        </button>
        <button
          onClick={() => window.location.href = "/"}
          className="btn-secondary"
        >
          Ir al Inicio
        </button>
      </div>

      <div className="mt-12 text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
        Error Digest: {error.digest || "N/A"}
      </div>
    </div>
  );
}
 
 
 
