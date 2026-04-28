# 🕹️ Arkad Games — Plataforma de Juegos Retro & Modernos

**Arkad Games** es una plataforma web de alto rendimiento diseñada para entusiastas del gaming. Construida con **Next.js 15**, **Tailwind CSS v4** y **Supabase**, ofrece una experiencia inmersiva, rápida y profesional para descubrir y jugar títulos gratuitos y clásicos.

---

## 🚀 Características Principales

### 🔴 Integración de DOOM (1993)
Hemos integrado el legendario **DOOM** utilizando el motor **js-dos v8**. 
- **Rendimiento Local**: Todos los assets del juego y el motor se sirven localmente desde `/public`, eliminando problemas de CORS y garantizando latencia mínima.
- **Interfaz Inmersiva**: Pantalla de carga temática con barra de progreso real y estética "brutalista" inspirada en el juego original.

### 🎨 Arquitectura de Diseño (Tailwind v4)
- **Zero Inline Styles**: Eliminación total de estilos en línea en favor de un sistema de diseño basado en utilidades semánticas.
- **Tokens de Tema**: Uso de variables de diseño centralizadas (`neon-purple`, `neon-blue`, etc.) en `globals.css` para una consistencia visual absoluta.
- **Componentización**: Clases reutilizables como `.banner-card` y `.badge-neon` para mantener el código DRY.

### 🔍 SEO & Rendimiento Profesional
- **Metadatos Dinámicos**: Configuración avanzada de OpenGraph, Twitter Cards y JSON-LD.
- **Indexación Inteligente**: Implementación de `sitemap.ts` y `robots.ts` para una visibilidad óptima en buscadores.
- **Resiliencia**: Manejo de errores global mediante `error.tsx` y skeletons de carga (`loading.tsx`) para una experiencia de usuario sin fricciones.

### 🎮 Mini-juegos & Catálogo
- **Cyber Pong**: Un juego de Pong moderno con física personalizada y diseño cyberpunk.
- **Catálogo de Juegos**: Integración con APIs externas para ofrecer cientos de títulos gratuitos con filtros avanzados.

---

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript.
- **Estilos**: Tailwind CSS v4.
- **Backend/Auth**: Supabase.
- **Emulación**: js-dos v8 (WASM).
- **Despliegue**: Vercel.

---

## 📦 Instalación y Desarrollo

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/borosdemir/arkad-games.git
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env.local` con tus credenciales de Supabase.

4. **Ejecutar en desarrollo:**
   ```bash
   npm run dev
   ```

---

## 📜 Estándares de Código

Para mantener la calidad del proyecto, seguimos estos principios:
- **Modularidad**: Componentes pequeños y con una sola responsabilidad.
- **Tipado Estricto**: Uso riguroso de TypeScript para evitar errores en runtime.
- **Diseño Atómico**: Los estilos deben vivir en Tailwind o en el sistema de diseño centralizado.

---

Desarrollado con ❤️ para la comunidad gamer por **Arkad Team**.
