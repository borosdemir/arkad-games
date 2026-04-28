"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Dos: any;
  }
}

export default function DoomPlayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Dos) {
      setIsScriptLoaded(true);
    }
  }, []);

  const startDoom = () => {
    if (!window.Dos || !canvasRef.current) return;

    setHasStarted(true);
    
    // En v8 la inicialización es directa
    try {
      window.Dos(canvasRef.current, {
        // AHORA USAMOS EL ARCHIVO LOCAL: Sin errores de CORS y mucho más rápido
        url: "/games/doom.jsdos",
      });
      
      // Simulación de progreso
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2; // Más rápido ahora que es local
        });
      }, 50);

    } catch (err) {
      console.error("Doom v8 error:", err);
      setError("Error al iniciar el motor local.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* CSS LOCAL */}
      <link rel="stylesheet" href="/lib/js-dos/js-dos.css" />
      
      {/* SCRIPT LOCAL */}
      <Script
        src="/lib/js-dos/js-dos.js"
        onLoad={() => setIsScriptLoaded(true)}
      />

      <div className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(176,38,255,0.15)] bg-black">
        
        {/* Pantalla de inicio 100% Inmersiva (Estilo Doom 1993) */}
        {!hasStarted && !error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-black">
             {/* Keyart Original de Doom */}
             <div 
               className="absolute inset-0 opacity-60 bg-cover bg-center" 
               style={{ backgroundImage: "url('https://images.alphacoders.com/267/267073.jpg')" }}
             />
             
             {/* Gradiente de sangre en los bordes */}
             <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-black/60" />

             <div className="relative z-10 flex flex-col items-center text-center">
               {/* Logo de Doom (Imagen externa estable) */}
               <img 
                 src="https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg" 
                 alt="DOOM" 
                 className="w-64 mb-10 drop-shadow-[0_0_20px_rgba(255,0,0,0.5)] animate-pulse"
               />

               <button
                 onClick={startDoom}
                 disabled={!isScriptLoaded}
                 className={`
                   group relative px-16 py-5 overflow-hidden transition-all duration-300
                   border-2 border-red-600 bg-red-950/20 backdrop-blur-sm
                   ${isScriptLoaded ? "hover:bg-red-600 hover:scale-105 active:scale-95" : "cursor-wait opacity-50"}
                 `}
               >
                 {/* Efecto de brillo interior */}
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                 
                 <span className="relative z-10 text-2xl font-black italic tracking-[0.2em] text-white uppercase [text-shadow:2px_2px_0px_#991b1b]">
                   {isScriptLoaded ? "New Game" : "Syncing..."}
                 </span>
               </button>

               <p className="mt-6 text-red-500/60 text-[10px] font-mono uppercase tracking-[0.5em] animate-pulse">
                 Ultraviolence Protocol Active
               </p>
             </div>
          </div>
        )}

        {/* Loader v8 */}
        {hasStarted && progress < 100 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-[60]">
             <div className="w-48 h-1 bg-zinc-900 rounded-full overflow-hidden mb-3">
               <div 
                 className="h-full bg-red-600 transition-all duration-300" 
                 style={{ width: `${progress}%` }} 
               />
             </div>
             <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest animate-pulse">
               Downloading Mars Base Data... {progress}%
             </p>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#09090b] z-40 p-6 text-center">
            <p className="text-red-500 font-bold mb-2">ERROR DE TRANSMISIÓN</p>
            <button onClick={() => window.location.reload()} className="mt-4 text-xs text-neon-blue underline">Reiniciar Protocolo</button>
          </div>
        )}

        {/* El canvas para js-dos v8 */}
        <div ref={canvasRef} className="w-full h-full" id="dos" />

        {/* Controles Info */}
        {hasStarted && progress === 100 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity pointer-events-none">
            <div className="px-3 py-1.5 rounded-lg border border-white/10 bg-black/80 text-[10px] text-zinc-400">
               <span className="text-white">MOVIMIENTO:</span> Flechas / WASD
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-2">
        <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-xs text-zinc-400">
           <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
           Motor: js-dos v8 (Latest)
        </div>
      </div>
    </div>
  );
}
