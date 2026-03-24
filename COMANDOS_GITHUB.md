# ⚡ Comandos Rápidos para Subir a GitHub

## 🎯 Opción Más Rápida (5 minutos)

### **1. Abre PowerShell en la carpeta del proyecto**

```powershell
cd "C:\Users\Jose\Desktop\landing 0.1"
```

### **2. Inicializa Git**

```powershell
git init
```

### **3. Configura tu identidad (solo primera vez)**

```powershell
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@gmail.com"
```

### **4. Agrega todos los archivos**

```powershell
git add .
```

### **5. Haz el primer commit**

```powershell
git commit -m "Initial commit - AL VOLANTE Landing Page"
```

### **6. Crea el repositorio en GitHub**

1. Ve a: https://github.com/new
2. Nombre: `alvolante-landing`
3. Descripción: "Landing page para AL VOLANTE - Escuela de Manejo"
4. **NO** marques "Initialize with README"
5. Clic en "Create repository"

### **7. Conecta y sube**

Reemplaza `TU-USUARIO` con tu usuario de GitHub:

```powershell
git remote add origin https://github.com/TU-USUARIO/alvolante-landing.git
git branch -M main
git push -u origin main
```

### **8. Ingresa credenciales**

- **Usuario:** Tu usuario de GitHub
- **Contraseña:** Personal Access Token (no tu contraseña normal)

#### **Cómo obtener el token:**
1. GitHub → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token (classic)
4. Nombre: "Landing AL VOLANTE"
5. Marca: **repo**
6. Generate token
7. **Copia el token** (solo se muestra una vez)
8. Úsalo como contraseña

---

## ✅ ¡Listo!

Tu proyecto ya está en GitHub: `https://github.com/TU-USUARIO/alvolante-landing`

---

## 🔄 Para Futuros Cambios

Cuando hagas cambios en el proyecto:

```powershell
git add .
git commit -m "Descripción de los cambios"
git push
```

---

## 🌐 Deploy Gratis (Opcional)

### **Vercel (Recomendado):**
1. Ve a: https://vercel.com
2. Sign up con GitHub
3. Import Project → Selecciona tu repo
4. Deploy

**URL:** `alvolante-landing.vercel.app`

### **Netlify:**
1. Ve a: https://netlify.com
2. Sign up con GitHub
3. New site from Git → Selecciona tu repo
4. Build: `npm run build`
5. Publish: `dist`
6. Deploy

**URL:** `alvolante-landing.netlify.app`

---

## 📁 Archivos Creados

Ya tienes todo listo para GitHub:

- ✅ `README.md` - Documentación del proyecto
- ✅ `GUIA_GITHUB.md` - Guía completa
- ✅ `.gitignore` - Archivos a ignorar
- ✅ Documentación de mejoras

---

## ❓ Problemas Comunes

### **"git no se reconoce"**
→ Instala Git: https://git-scm.com/download/win

### **"Permission denied"**
→ Verifica tu token de acceso

### **"Repository not found"**
→ Verifica que el nombre del repo sea correcto

---

**¿Necesitas ayuda?** Pregúntame y te guío paso a paso 😊
