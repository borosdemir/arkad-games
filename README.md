# Arkad Games — Catálogo de Juegos Gratuitos

![Arkad Games Banner](./public/assets/img/banner.png)

Arkad Games es una plataforma moderna diseñada para explorar y descubrir juegos gratuitos para PC y navegador. El proyecto prioriza el rendimiento, la accesibilidad y un sistema de diseño consistente.

---

## Características Principales

- **Arquitectura de Servidor**: Implementación con Next.js 15 para optimizar el tiempo de carga y el SEO mediante Server Components.
- **Sistema de Diseño**: Estilizado con Tailwind CSS v4, utilizando variables nativas de CSS para una gestión de temas eficiente.
- **Interactividad**: Filtros en tiempo real y paginación optimizada para una navegación fluida.
- **Autenticación**: Integración con Supabase para la gestión segura de perfiles de usuario.

---

## Tecnologías Utilizadas

| Tecnología | Función | Justificación |
| :--- | :--- | :--- |
| **Next.js** | Framework Core | Renderizado eficiente y manejo de rutas escalable. |
| **Tailwind CSS v4** | Interfaz | Estilos declarativos sin código CSS redundante. |
| **TypeScript** | Lenguaje | Robustez en el desarrollo y prevención de errores en tiempo de compilación. |
| **Supabase** | Backend | Solución integral para bases de datos y autenticación. |

---

## Estructura del Proyecto

El código está organizado siguiendo principios de modularidad:

- `src/app`: Definición de rutas y lógica de componentes de servidor.
- `src/components/ui`: Componentes de interfaz reutilizables.
- `src/components/layout`: Componentes globales de estructura (Navbar, Footer).
- `src/context`: Manejo del estado global de la aplicación.
- `src/lib`: Lógica de integración con APIs y utilidades de terceros.

---

## Instalación y Desarrollo

### 1. Requisitos Previos
Clona el repositorio e instala las dependencias:
```bash
git clone https://github.com/borosdemir/arkad-games.git
cd arkad-games
npm install
```

### 2. Variables de Entorno
Configura un archivo `.env.local` con las credenciales de tu proyecto Supabase:
```env
NEXT_PUBLIC_SUPABASE_URL=tu_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_key
```

### 3. Ejecución
Inicia el servidor de desarrollo:
```bash
npm run dev
```

---

## Estándares de Código

Para asegurar la mantenibilidad del proyecto, seguimos estos criterios:
1. **Tokens de Diseño**: Se prohíbe el uso de estilos en línea o valores arbitrarios en el TSX; todo debe referenciar al tema central.
2. **Separación de Lógica**: Los componentes de cliente se mantienen ligeros, delegando la carga de datos al servidor siempre que sea posible.
3. **Documentación Técnica**: Cada módulo crítico incluye comentarios sobre su propósito y funcionamiento interno.
