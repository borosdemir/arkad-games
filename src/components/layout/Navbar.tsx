/**
 * Navbar.tsx — Barra de navegación principal.
 *
 * Ahora es un Client Component porque necesita acceder al
 * estado de autenticación (useAuth) para mostrar el nombre
 * del usuario cuando está logueado, o el botón de login si no.
 */

"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Inicio", href: "/", icon: "" },
  { label: "Catálogo", href: "/catalogo", icon: "" },
  { label: "Géneros", href: "/generos", icon: "" },
  { label: "Cyber Pong", href: "/minijuego", icon: "🏓", special: true },
  { label: "Doom", href: "/doom", icon: "🔫", special: true },
  { label: "Torneos", href: "/torneos", icon: "" },
];

export default function Navbar() {
  const { user, loading, signOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Extraemos el nombre del usuario de los metadatos de Supabase.
  const displayName =
    user?.user_metadata?.display_name ||
    user?.email?.split("@")[0] ||
    "Jugador";

  return (
    <header id="main-navbar" className="glass sticky top-0 z-50 w-full">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ── Logo ── */}
        <Link href="/" className="group flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="transition-transform duration-300 group-hover:rotate-12"
          >
            <rect x="4" y="10" width="24" height="14" rx="7" className="fill-neon-purple" />
            <rect x="10" y="15" width="6" height="2" rx="1" fill="white" />
            <rect x="12" y="13" width="2" height="6" rx="1" fill="white" />
            <circle cx="22" cy="15" r="1.5" className="fill-neon-blue" />
            <circle cx="25" cy="17" r="1.5" className="fill-neon-pink" />
          </svg>
          <span className="text-xl font-bold tracking-tight">
            <span className="text-white">ARKAD</span>
            <span className="text-neon-purple"> GAMES</span>
          </span>
        </Link>

        {/* ── Enlaces de navegación (desktop) ── */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`
                  rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300
                  ${
                    "special" in link && link.special
                      ? "text-neon-blue hover:bg-neon-blue/10 hover:text-white hover:shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                {link.icon && <span className="mr-1">{link.icon}</span>}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Zona de usuario (desktop) ── */}
        <div className="hidden items-center gap-3 sm:flex">
          {loading ? (
            <div className="h-9 w-24 animate-pulse rounded-full bg-white/10" />
          ) : user ? (
            <div className="relative">
              <button
                id="user-menu-btn"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neon-purple text-xs font-bold text-white">
                  {displayName.charAt(0).toUpperCase()}
                </span>
                {displayName}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform ${userMenuOpen ? "rotate-180" : ""}`}
                >
                  <path d="M3 5l3 3 3-3" />
                </svg>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl border border-white/10 bg-dark-card py-1 shadow-xl">
                  <Link
                    href="/minijuego"
                    onClick={() => setUserMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-400 hover:bg-white/5 hover:text-white"
                  >
                    🎮 Mini-juego
                  </Link>
                  <hr className="my-1 border-white/5" />
                  <button
                    onClick={() => {
                      signOut();
                      setUserMenuOpen(false);
                    }}
                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-white/5 hover:text-red-300"
                  >
                    🚪 Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                Entrar
              </Link>
              <Link
                href="/registro"
                className="rounded-full bg-neon-purple px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-neon-purple/80 hover:shadow-[0_0_20px_rgba(176,38,255,0.4)]"
              >
                Registrarse
              </Link>
            </div>
          )}
        </div>


        {/* ── Botón hamburguesa (móvil) ── */}
        <button
          id="mobile-menu-btn"
          className="flex items-center justify-center rounded-lg p-2 text-zinc-400 hover:text-white hover:bg-white/5 md:hidden"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* ── Menú móvil ── */}
      {menuOpen && (
        <div className="border-t border-white/5 px-4 py-4 md:hidden">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white hover:bg-white/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            {user ? (
              <button
                onClick={() => { signOut(); setMenuOpen(false); }}
                className="rounded-full border border-red-500/30 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10"
              >
                Cerrar sesión
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border border-white/10 px-4 py-2 text-center text-sm text-zinc-300 hover:bg-white/5"
                >
                  Entrar
                </Link>
                <Link
                  href="/registro"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full bg-neon-purple px-4 py-2 text-center text-sm font-semibold text-white"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
