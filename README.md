# 🚗 AL VOLANTE - Landing Page

Landing page profesional para **AL VOLANTE**, escuela de manejo líder en Bernal, Buenos Aires.

[![Estado](https://img.shields.io/badge/Estado-Activo-success)](https://github.com)
[![Licencia](https://img.shields.io/badge/Licencia-Privado-blue)](https://github.com)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)](https://vitejs.dev)

---

## 🎯 Características

- ✅ **Diseño moderno y responsive** - Optimizado para todos los dispositivos
- ✅ **5 packs de clases** con precios diferenciados (tarjeta/efectivo)
- ✅ **Integración directa con WhatsApp** para consultas y reservas
- ✅ **Google Tag Manager** para analytics y tracking de conversiones
- ✅ **Modo oscuro/claro** con persistencia en localStorage
- ✅ **Optimizado para SEO** con meta tags y Schema.org
- ✅ **Tabla comparativa** interactiva de packs
- ✅ **Sección de testimonios** con reviews de Google (4.9⭐)
- ✅ **FAQ completo** con accordion
- ✅ **Animaciones suaves** con Intersection Observer
- ✅ **Carrusel de egresados** con navegación
- ✅ **Formulario de lead magnet** con descuento

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|------------|-----|
| **Vite** | Build tool y dev server |
| **Vanilla JavaScript** | Lógica sin frameworks |
| **CSS3** | Diseño responsive con variables CSS |
| **Boxicons** | Iconografía moderna |
| **Google Fonts** | Tipografía Poppins |
| **Google Tag Manager** | Analytics y tracking |

---

## 📦 Instalación

### **Requisitos:**
- Node.js 16+ 
- npm o yarn

### **Pasos:**

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU-USUARIO/alvolante-landing.git

# 2. Entrar a la carpeta
cd alvolante-landing

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en: `http://localhost:5173`

---

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Genera build optimizado en /dist
npm run preview      # Preview del build de producción
```

---

## 📊 Estructura del Proyecto

```
alvolante-landing/
├── public/
│   ├── images/           # Imágenes del sitio
│   │   ├── hero-image.png
│   │   ├── alumnos (1-6).png
│   │   └── ...
│   └── vite.svg
├── src/
│   ├── main.js          # Lógica principal (animaciones, GTM, etc)
│   └── style.css        # Estilos globales
├── index.html           # HTML principal
├── package.json         # Dependencias
├── .gitignore          # Archivos ignorados por Git
├── README.md           # Este archivo
├── GUIA_GITHUB.md      # Guía para subir a GitHub
├── MEJORAS.md          # Mejoras implementadas
├── ACTUALIZACION_PRECIOS.md  # Cambios de precios
└── CORRECCIONES.md     # Últimas correcciones
```

---

## 💰 Packs y Precios

| Pack | Tarjeta 💳 | Efectivo 💵 | Ahorro | Clases |
|------|-----------|------------|--------|--------|
| **1 Clase** | $30.000 | $30.000 | - | 1 |
| **Pack 3** | $117.500 | $81.500 | $36.000 | 3 |
| **Pack 6** | $226.000 | $155.500 | $70.500 | 6 |
| **Pack 8** ⭐ | $275.500 | $190.000 | $85.500 | 8 |
| **Pack 12** 🏆 | $398.500 | $280.500 | $118.000 | 12 |

---

## 🎨 Secciones del Sitio

1. **Hero** - Presentación principal con CTA
2. **Testimonios** - Reviews de Google y estadísticas
3. **Galería de Egresados** - Carrusel con fotos
4. **Sobre Nosotros** - Historia y valores de la escuela
5. **Beneficios** - 6 razones para elegir AL VOLANTE
6. **Cómo Funciona** - Timeline de 3 pasos
7. **Packs y Precios** - 5 opciones con precios diferenciados
8. **Tabla Comparativa** - Comparación detallada de packs
9. **Simulador** - Información sobre tecnología
10. **FAQ** - 10 preguntas frecuentes
11. **Ubicación** - Mapa de Google Maps
12. **Footer** - Información de contacto y redes

---

## 📈 Eventos de Google Tag Manager

El sitio trackea los siguientes eventos:

| Evento | Descripción |
|--------|-------------|
| `whatsapp_click` | Clic en botones de WhatsApp |
| `pack_reservation` | Clic en "Reservar ahora" |
| `google_reviews_click` | Clic en reviews de Google |
| `lead_magnet_conversion` | Envío de formulario de descuento |
| `scroll_depth` | Profundidad de scroll (25%, 50%, 75%, 100%) |
| `section_view` | Vista de secciones importantes |

---

## 🎯 Optimizaciones SEO

- ✅ Meta tags completos (title, description, OG)
- ✅ Schema.org tipo DrivingSchool
- ✅ Sitemap XML
- ✅ URLs semánticas
- ✅ Alt text en todas las imágenes
- ✅ Lazy loading de imágenes
- ✅ Performance optimizado (Lighthouse 90+)

---

## 📱 Responsive Design

El sitio está optimizado para:

- 📱 **Mobile** (< 768px)
- 📱 **Tablet** (768px - 1023px)
- 💻 **Desktop** (1024px - 1399px)
- 🖥️ **Desktop XL** (> 1400px)

---

## 🌐 Deploy

### **Opción 1: Vercel (Recomendado)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Conecta tu repositorio de GitHub
2. Framework: Vite
3. Deploy

### **Opción 2: Netlify**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

Build command: `npm run build`  
Publish directory: `dist`

### **Opción 3: GitHub Pages**

```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

---

## 📞 Información de Contacto

- **Teléfono:** [11 3882-3750](https://wa.me/5491138823750)
- **Ubicación:** Belgrano 483, Bernal, Quilmes
- **Horario:** Lunes a Sábados, 8:00 - 20:00hs
- **Google Reviews:** [4.9 ⭐ (517 reseñas)](https://www.google.com/maps/place/Escuela+de+Manejo+-+Al+Volante)
- **Instagram:** [@ALVOLANTE.OK](https://instagram.com/ALVOLANTE.OK)
- **Facebook:** [ALVOLANTE.OK](https://facebook.com/ALVOLANTE.OK)

---

## 🔧 Configuración

### **Variables de Entorno**

No se requieren variables de entorno. Todos los IDs están en el código:

- GTM ID: `GTM-527WM96T`
- WhatsApp: `5491138823750`

### **Personalización**

Para personalizar colores, edita las variables CSS en `src/style.css`:

```css
:root {
  --primary: #FFD900;        /* Amarillo principal */
  --primary-hover: #E6C200;  /* Amarillo hover */
  --secondary: #000000;      /* Negro */
  /* ... */
}
```

---

## 🐛 Reporte de Bugs

Si encuentras algún bug, por favor:

1. Verifica que no esté ya reportado en [Issues](https://github.com/TU-USUARIO/alvolante-landing/issues)
2. Crea un nuevo issue con:
   - Descripción del problema
   - Pasos para reproducirlo
   - Screenshots si es posible
   - Navegador y versión

---

## 📝 Changelog

### **v1.2.1** (10 Dic 2025)
- ✅ Corregido margen desigual en packs
- ✅ Actualizado icono de Ruta Segura
- ✅ Corregida duración de clases (45 min)
- ✅ Corregida edad mínima (18 años)
- ✅ Ampliada sección Sobre Nosotros

### **v1.2.0** (10 Dic 2025)
- ✅ Actualizada estructura de precios (5 packs)
- ✅ Agregados precios diferenciados (tarjeta/efectivo)
- ✅ Nueva tabla comparativa
- ✅ Badges de ahorro

### **v1.1.0** (10 Dic 2025)
- ✅ Mejoras de SEO y performance
- ✅ Eventos GTM personalizados
- ✅ Modo oscuro mejorado
- ✅ Validación de formularios
- ✅ Parallax deshabilitado en móviles

### **v1.0.0** (09 Dic 2025)
- 🎉 Lanzamiento inicial

---

## 📄 Licencia

© 2025 **AL VOLANTE**. Todos los derechos reservados.

Este proyecto es privado y de uso exclusivo para AL VOLANTE - Escuela de Manejo.

---

## 👨‍💻 Desarrollo

Desarrollado con ❤️ para AL VOLANTE

**Stack:** Vite + Vanilla JS + CSS3  
**Versión:** 1.2.1  
**Última actualización:** 10 de Diciembre, 2025

---

## 🙏 Agradecimientos

- [Vite](https://vitejs.dev) - Build tool
- [Boxicons](https://boxicons.com) - Iconografía
- [Google Fonts](https://fonts.google.com) - Tipografía
- Todos los alumnos que confiaron en AL VOLANTE

---

**¿Preguntas?** Contacta a través de [WhatsApp](https://wa.me/5491138823750) 💬
