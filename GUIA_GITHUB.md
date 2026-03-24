# 🚀 Guía para Subir AL VOLANTE a GitHub

## ✅ Requisitos Previos

Antes de empezar, asegúrate de tener:
- ✅ Cuenta de GitHub (si no tienes, créala en [github.com](https://github.com))
- ✅ Git instalado en tu PC

### **Verificar si tienes Git instalado:**
```powershell
git --version
```

Si no lo tienes, descárgalo de: [git-scm.com](https://git-scm.com/download/win)

---

## 📋 Método 1: Usando Git (Línea de Comandos)

### **Paso 1: Inicializar Git en tu proyecto**

Abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
cd "C:\Users\Jose\Desktop\landing 0.1"
git init
```

### **Paso 2: Configurar tu identidad (solo la primera vez)**

```powershell
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

### **Paso 3: Agregar todos los archivos**

```powershell
git add .
```

### **Paso 4: Hacer el primer commit**

```powershell
git commit -m "Initial commit - AL VOLANTE Landing Page"
```

### **Paso 5: Crear repositorio en GitHub**

1. Ve a [github.com](https://github.com)
2. Clic en el botón **"+"** (arriba derecha) → **"New repository"**
3. Nombre del repositorio: `alvolante-landing` (o el que prefieras)
4. Descripción: "Landing page para AL VOLANTE - Escuela de Manejo en Bernal"
5. **NO** marques "Initialize with README" (ya tienes archivos)
6. Clic en **"Create repository"**

### **Paso 6: Conectar tu proyecto local con GitHub**

GitHub te mostrará comandos. Usa estos (reemplaza con tu usuario):

```powershell
git remote add origin https://github.com/TU-USUARIO/alvolante-landing.git
git branch -M main
git push -u origin main
```

**Ejemplo:**
```powershell
git remote add origin https://github.com/jose123/alvolante-landing.git
git branch -M main
git push -u origin main
```

### **Paso 7: Ingresar credenciales**

Te pedirá usuario y contraseña de GitHub. 

⚠️ **Importante:** GitHub ya no acepta contraseñas normales. Necesitas un **Personal Access Token**:

1. Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token (classic)"
3. Nombre: "Landing AL VOLANTE"
4. Permisos: Marca **"repo"**
5. Copia el token (solo se muestra una vez)
6. Úsalo como contraseña cuando Git te lo pida

---

## 📋 Método 2: Usando GitHub Desktop (Más Fácil)

### **Paso 1: Descargar GitHub Desktop**

Descarga de: [desktop.github.com](https://desktop.github.com/)

### **Paso 2: Instalar y abrir GitHub Desktop**

1. Instala GitHub Desktop
2. Inicia sesión con tu cuenta de GitHub

### **Paso 3: Agregar tu proyecto**

1. Clic en **"File"** → **"Add local repository"**
2. Selecciona la carpeta: `C:\Users\Jose\Desktop\landing 0.1`
3. Si dice "no es un repositorio Git", clic en **"create a repository"**

### **Paso 4: Hacer el primer commit**

1. En la parte inferior izquierda verás todos los archivos
2. En "Summary" escribe: `Initial commit - AL VOLANTE Landing`
3. Clic en **"Commit to main"**

### **Paso 5: Publicar en GitHub**

1. Clic en **"Publish repository"** (arriba)
2. Nombre: `alvolante-landing`
3. Descripción: "Landing page para AL VOLANTE"
4. Desmarca "Keep this code private" si quieres que sea público
5. Clic en **"Publish repository"**

¡Listo! Tu proyecto ya está en GitHub.

---

## 🔒 Archivos a Ignorar (.gitignore)

Tu proyecto ya tiene un `.gitignore` que excluye:
- ✅ `node_modules/` (dependencias)
- ✅ `dist/` (archivos compilados)
- ✅ Archivos de sistema

**Contenido actual de `.gitignore`:**
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

---

## 📝 Comandos Git Útiles para el Futuro

### **Ver estado de cambios:**
```powershell
git status
```

### **Agregar cambios:**
```powershell
git add .
```

### **Hacer commit:**
```powershell
git commit -m "Descripción de los cambios"
```

### **Subir cambios a GitHub:**
```powershell
git push
```

### **Ver historial:**
```powershell
git log --oneline
```

### **Crear una rama nueva:**
```powershell
git checkout -b nombre-rama
```

---

## 🌐 Desplegar en GitHub Pages (GRATIS)

Una vez que tu proyecto esté en GitHub, puedes desplegarlo GRATIS:

### **Opción A: Usando Vite + GitHub Pages**

1. Instala el plugin:
```powershell
npm install --save-dev gh-pages
```

2. Edita `package.json`, agrega:
```json
{
  "scripts": {
    "build": "vite build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://TU-USUARIO.github.io/alvolante-landing"
}
```

3. Construye y despliega:
```powershell
npm run build
npm run deploy
```

4. En GitHub:
   - Ve a Settings → Pages
   - Source: "gh-pages branch"
   - Save

Tu sitio estará en: `https://TU-USUARIO.github.io/alvolante-landing`

### **Opción B: Usando Vercel (Más Fácil)**

1. Ve a [vercel.com](https://vercel.com)
2. "Sign up" con GitHub
3. "Import Project"
4. Selecciona tu repositorio `alvolante-landing`
5. Framework: "Vite"
6. Deploy

¡Listo! Tendrás una URL como: `alvolante-landing.vercel.app`

### **Opción C: Usando Netlify**

1. Ve a [netlify.com](https://netlify.com)
2. "Sign up" con GitHub
3. "New site from Git"
4. Selecciona tu repositorio
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy

URL: `alvolante-landing.netlify.app`

---

## 🎯 Estructura Recomendada del Repositorio

```
alvolante-landing/
├── public/
│   └── images/
├── src/
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── .gitignore
├── README.md (crear)
├── MEJORAS.md
├── ACTUALIZACION_PRECIOS.md
├── CORRECCIONES.md
└── GUIA_FAVICON.md
```

---

## 📄 Crear un README.md

Te recomiendo crear un `README.md` para tu repositorio:

```markdown
# 🚗 AL VOLANTE - Landing Page

Landing page profesional para AL VOLANTE, escuela de manejo en Bernal, Buenos Aires.

## 🎯 Características

- ✅ Diseño moderno y responsive
- ✅ 5 packs de clases con precios diferenciados
- ✅ Integración con WhatsApp
- ✅ Google Tag Manager para analytics
- ✅ Modo oscuro/claro
- ✅ Optimizado para SEO
- ✅ Tabla comparativa de packs
- ✅ Sección de testimonios
- ✅ FAQ completo

## 🛠️ Tecnologías

- **Vite** - Build tool
- **Vanilla JavaScript** - Sin frameworks
- **CSS3** - Diseño responsive
- **Boxicons** - Iconografía
- **Google Fonts** - Tipografía Poppins

## 🚀 Instalación

```bash
npm install
npm run dev
```

## 📦 Build para Producción

```bash
npm run build
```

## 📞 Contacto

- **Teléfono:** 11 3882-3750
- **Ubicación:** Belgrano 483, Bernal, Quilmes
- **Google Reviews:** 4.9 ⭐ (517 reseñas)

## 📄 Licencia

© 2025 AL VOLANTE. Todos los derechos reservados.
```

---

## ⚠️ Consideraciones de Seguridad

### **NO subas a GitHub:**
- ❌ Contraseñas
- ❌ API keys privadas
- ❌ Tokens de acceso
- ❌ Información sensible de clientes

### **Está OK subir:**
- ✅ Código HTML/CSS/JS
- ✅ Imágenes públicas
- ✅ Documentación
- ✅ Configuración de Vite
- ✅ Google Tag Manager ID (es público)

---

## 🎉 Ventajas de Usar GitHub

1. **Backup automático** de tu código
2. **Control de versiones** - Puedes volver atrás si algo sale mal
3. **Colaboración** - Otros pueden ayudarte
4. **Portfolio** - Muestra tu trabajo
5. **Deploy gratis** - GitHub Pages, Vercel, Netlify
6. **CI/CD** - Automatización de despliegues

---

## 📚 Recursos Útiles

- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub Docs](https://docs.github.com)
- [Vite Docs](https://vitejs.dev)
- [Markdown Guide](https://www.markdownguide.org)

---

## 🆘 Problemas Comunes

### **"Git no se reconoce como comando"**
→ Instala Git desde [git-scm.com](https://git-scm.com)

### **"Permission denied (publickey)"**
→ Usa HTTPS en lugar de SSH, o configura SSH keys

### **"Failed to push"**
→ Verifica que tengas permisos en el repositorio

### **"Merge conflict"**
→ Resuelve conflictos manualmente o usa GitHub Desktop

---

## ✅ Checklist Final

Antes de subir a GitHub:

- [ ] Verificar que `.gitignore` esté correcto
- [ ] Eliminar archivos sensibles
- [ ] Crear `README.md`
- [ ] Probar que el build funcione (`npm run build`)
- [ ] Revisar que todas las imágenes estén en `/public`
- [ ] Actualizar URLs si es necesario
- [ ] Hacer commit de todos los cambios

---

**¡Listo para subir tu proyecto a GitHub!** 🚀

Si tienes dudas, pregúntame y te ayudo paso a paso.
