# 🕹️ Arkad Games — El Portal de Juegos Definitivo

![Arkad Games Banner](./public/assets/img/banner.png)

> **"Donde el gaming gratuito se encuentra con el diseño de vanguardia."**

Bienvenido a **Arkad Games**, una plataforma ultra-rápida y visualmente impactante construida con las tecnologías más modernas de la web. Aquí no solo jugamos; creamos una experiencia inmersiva neón.

---

## ✨ Características Premium

- **🚀 Rendimiento Extremo**: Construido sobre **Next.js 15+** con **React 19**, aprovechando *Server Components* para una carga instantánea.
- **🎨 Diseño Cyberpunk**: Interfaz inmersiva usando **Tailwind CSS v4** con un sistema de diseño basado en tokens neón.
- **📱 Experiencia Fluida**: Animaciones optimizadas por GPU y transiciones suaves para una navegación de lujo.
- **🎮 Catálogo Inteligente**: Filtrado y búsqueda en tiempo real de más de 500 títulos gratuitos.
- **🔐 Auth Segura**: Integración con **Supabase Auth** para perfiles de usuario y persistencia.

---

## 🛠️ Stack Tecnológico (Nivel Experto)

Este proyecto no es solo un sitio web; es una demostración de ingeniería moderna:

| Tecnología | Propósito | ¿Por qué? |
| :--- | :--- | :--- |
| **Next.js (App Router)** | Framework | Renderizado híbrido (SSR/ISR) para SEO y velocidad. |
| **Tailwind CSS v4** | Estilado | Sistema de diseño basado en CSS-variables, evitando clases "sucias". |
| **TypeScript** | Lenguaje | Seguridad de tipos y autocompletado profesional. |
| **Supabase** | Backend-as-a-Service | Autenticación y base de datos en tiempo real sin fricción. |
| **Lucide React** | Iconografía | Iconos vectoriales limpios y consistentes. |

---

## 🏗️ Arquitectura del Proyecto

Para mantener el orden y la escalabilidad, seguimos un patrón de **Separación de Responsabilidades**:

- `/src/app`: Rutas y lógica de servidor (SEO-ready).
- `/src/components/ui`: Componentes visuales atómicos y reutilizables.
- `/src/components/layout`: Estructura global (Navbar, Footer).
- `/src/context`: Gestión de estado global (Autenticación).
- `/src/lib`: Utilidades y llamadas a APIs externas.

---

## 🚀 Guía de Inicio Rápido

### 1. Clonar y Preparar
```bash
git clone https://github.com/tu-usuario/arkad-games.git
cd arkad-games
npm install
```

### 2. Configurar el Entorno
Crea un archivo `.env.local` con tus credenciales de Supabase:
```env
NEXT_PUBLIC_SUPABASE_URL=tu_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_key
```

### 3. ¡A Jugar!
```bash
npm run dev
```

---

## 📜 Filosofía de Código

Nos esforzamos por un código **"Pulido y Profesional"**:
1. **No hay estilos en línea**: Todo se gestiona vía Tailwind tokens.
2. **Componentes Puros**: Separamos la lógica de cliente de los componentes de servidor.
3. **Documentación Viva**: Comentamos el *porqué* de las decisiones, no solo el *qué*.

---

Desarrollado con ❤️ por el equipo de **Arkad Games**.
