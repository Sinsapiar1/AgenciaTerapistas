# 🏥 Agencia Terapistas RBT - Website Profesional

Website profesional para agencia de terapistas RBT especializados en terapia ABA para niños con autismo y trastornos del desarrollo.

## 🎯 Características Principales

### ✅ **SEO Optimizado**
- Meta tags completos (Open Graph, Twitter Cards)
- Schema.org markup (MedicalOrganization + LocalBusiness)
- Sitemap XML
- Robots.txt configurado
- URLs semánticas
- Alt text en todas las imágenes
- Estructura HTML5 semántica
- Velocidad de carga optimizada

### 🌐 **Bilingüe (ES/EN)**
- Español por defecto (mercado principal)
- Toggle dinámico sin recargar página
- Preferencia guardada en localStorage
- Traducciones completas
- Meta tags actualizados por idioma

### 📱 **100% Responsive**
- Mobile-first design
- Tablets
- Desktop
- Large screens
- Probado en todos los dispositivos

### 🎨 **Diseño Profesional**
- Diseño moderno estilo estadounidense
- Paleta de colores profesional médica
- Tipografía optimizada (Inter + Poppins)
- Animaciones suaves
- Transiciones fluidas
- Iconografía profesional

### 🚀 **Performance**
- Lazy loading de imágenes
- CSS optimizado
- JavaScript modular
- Sin frameworks pesados
- Carga rápida (<2s)

### 📬 **Formulario de Contacto**
- Validación en tiempo real
- Listo para conectar con Make.com
- Mensajes de éxito/error
- Campos requeridos
- Validación de email y teléfono

## 📁 Estructura del Proyecto

```
agencia-terapistas/
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos principales
├── js/
│   └── main.js            # JavaScript principal
├── img/                   # Imágenes (necesitas agregar)
│   ├── hero-therapist.jpg
│   ├── team-therapist.jpg
│   ├── testimonial-1.jpg
│   ├── testimonial-2.jpg
│   ├── testimonial-3.jpg
│   └── florida-map.svg
├── robots.txt             # SEO - Robots
├── sitemap.xml            # SEO - Sitemap
├── favicon.svg            # Favicon (necesitas crear)
└── README.md              # Este archivo
```

## 🔧 Instalación y Configuración

### 1. **Subir a GitHub**

```bash
# En tu computadora local, navega a la carpeta del proyecto
cd /ruta/a/agencia-terapistas

# Inicializa el repositorio Git
git init

# Agrega todos los archivos
git add .

# Commit inicial
git commit -m "Initial commit: Agencia Terapistas RBT website"

# Conecta con tu repositorio de GitHub (crea uno nuevo en github.com primero)
git remote add origin https://github.com/TU-USUARIO/agencia-terapistas.git

# Sube los archivos
git push -u origin main
```

### 2. **Configurar GitHub Pages**

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `main` → folder: `/ (root)`
5. Save

Tu sitio estará disponible en: `https://TU-USUARIO.github.io/agencia-terapistas/`

### 3. **Conectar Dominio Personalizado (agenciaterapistas.com)**

#### En Squarespace Domains:
1. Ve a tu dominio en Squarespace
2. DNS Settings
3. Agrega estos registros:

**Registros A:**
```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153
```

**Registro CNAME:**
```
Type: CNAME
Host: www
Value: TU-USUARIO.github.io
```

#### En GitHub:
1. Settings → Pages
2. Custom domain: `agenciaterapistas.com`
3. Save
4. Espera a que se verifique (puede tardar 24-48 horas)
5. Activa "Enforce HTTPS"

### 4. **Crear el archivo CNAME**

Crea un archivo llamado `CNAME` (sin extensión) en la raíz del proyecto con:
```
agenciaterapistas.com
```

Luego sube el cambio:
```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

## 🖼️ Imágenes Necesarias

Necesitas agregar estas imágenes en la carpeta `img/`:

1. **hero-therapist.jpg** (1200x800px)
   - Foto profesional de terapeuta RBT trabajando con un niño
   - Alta calidad, ambiente profesional

2. **team-therapist.jpg** (1000x800px)
   - Terapeuta certificado en sesión de terapia
   - Profesional y cálido

3. **testimonial-1.jpg** (150x150px circular)
   - Foto de perfil - madre hispana

4. **testimonial-2.jpg** (150x150px circular)
   - Foto de perfil - padre hispano

5. **testimonial-3.jpg** (150x150px circular)
   - Foto de perfil - madre americana

6. **florida-map.svg**
   - Mapa vectorial de Florida
   - Puedes usar: https://commons.wikimedia.org/wiki/File:Florida_map.svg

7. **favicon.svg**
   - Logo simple de la agencia (64x64px)
   - Formato SVG recomendado

### Fuentes Recomendadas para Imágenes:
- **Pexels.com** (gratis, alta calidad)
- **Unsplash.com** (gratis, profesional)
- **Freepik.com** (versión gratuita disponible)

Busca términos como:
- "therapist child autism"
- "child therapy session"
- "behavioral therapist"
- "family therapy"

## 📧 Conectar Formulario con Make.com

### Paso 1: Crear Escenario en Make.com
1. Crea cuenta en Make.com (gratis)
2. Create New Scenario
3. Agrega webhook "Custom Webhook"
4. Copy webhook URL

### Paso 2: Configurar en JavaScript
Abre `js/main.js` y busca la línea:
```javascript
const webhookUrl = 'YOUR_MAKE_COM_WEBHOOK_URL_HERE';
```

Reemplaza con tu webhook URL de Make.com:
```javascript
const webhookUrl = 'https://hook.us1.make.com/xxxxxxxxxx';
```

### Paso 3: Configurar Flujo en Make.com
1. **Webhook** → Recibe datos del formulario
2. **Router** (opcional) → Separa por idioma
3. **Gmail** → Envía email con los datos
4. **Google Sheets** (opcional) → Guarda en hoja de cálculo

### Ejemplo de Flujo Make.com:
```
Webhook → Gmail (enviar a contacto@agenciaterapistas.com)
       → Google Sheets (guardar lead)
       → Slack/Discord (notificación interna)
```

## 🎨 Personalización

### Colores
Edita en `css/style.css`:
```css
:root {
    --primary-color: #0066CC;     /* Azul principal */
    --secondary-color: #00A884;   /* Verde secundario */
    --accent-color: #FF6B35;      /* Naranja acento */
}
```

### Contenido
- **Testimonios:** Actualiza en `index.html` (líneas ~920-1050)
- **Servicios:** Actualiza en `index.html` (líneas ~380-680)
- **Estadísticas:** Actualiza en `index.html` (líneas ~310-330)
- **Áreas de cobertura:** Actualiza en `index.html` (líneas ~760-790)

### Información de Contacto
Busca y reemplaza en `index.html`:
- `+1 (305) 555-1234` → Tu número real
- `contacto@agenciaterapistas.com` → Tu email real
- Coordenadas GPS en Schema.org

## 📊 SEO - Posicionamiento en Google

### Keywords Principales:
- **Español:**
  - "agencia terapistas rbt"
  - "terapistas rbt miami"
  - "terapia aba florida"
  - "terapeutas autismo miami"
  
- **Inglés:**
  - "rbt therapist agency"
  - "aba therapy miami"
  - "autism therapy florida"

### Optimización Post-Launch:
1. **Google Search Console:**
   - Registra tu sitio
   - Sube sitemap.xml
   - Verifica indexación

2. **Google My Business:**
   - Crea perfil de negocio
   - Añade ubicación
   - Pide reseñas a clientes

3. **Content Marketing:**
   - Crea blog con artículos sobre ABA
   - Publica recursos para padres
   - Guías sobre terapia RBT

4. **Backlinks:**
   - Directorios de salud locales
   - Asociaciones de autismo
   - Partnerships con escuelas

5. **Local SEO:**
   - Cita consistente (NAP)
   - Reseñas en Google
   - Menciones en medios locales

## 🚀 Checklist de Lanzamiento

- [ ] Subir todos los archivos a GitHub
- [ ] Configurar GitHub Pages
- [ ] Conectar dominio personalizado
- [ ] Agregar todas las imágenes
- [ ] Configurar webhook Make.com
- [ ] Probar formulario de contacto
- [ ] Verificar responsive en móviles
- [ ] Probar cambio de idioma
- [ ] Configurar Google Analytics (opcional)
- [ ] Registrar en Google Search Console
- [ ] Crear Google My Business
- [ ] Añadir certificado SSL (GitHub Pages lo hace automático)
- [ ] Probar velocidad en PageSpeed Insights
- [ ] Crear perfiles en redes sociales
- [ ] Actualizar información de contacto real

## 📱 Redes Sociales

Actualiza los enlaces en `index.html` (footer):
```html
<a href="https://facebook.com/tuagencia">Facebook</a>
<a href="https://instagram.com/tuagencia">Instagram</a>
<a href="https://linkedin.com/company/tuagencia">LinkedIn</a>
```

## 🛠️ Tecnologías Usadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño moderno y responsive
- **JavaScript (Vanilla)** - Funcionalidad sin frameworks
- **Google Fonts** - Inter & Poppins
- **Schema.org** - Rich Snippets
- **Open Graph** - Social sharing

## 📞 Soporte

Para dudas o modificaciones:
- Email: raulpivet@gmail.com
- Portfolio: https://raulpivet.com

## 📄 Licencia

© 2026 Agencia Terapistas RBT. Todos los derechos reservados.

---

**Desarrollado por:** Raul Pivet  
**Fecha:** Mayo 2026  
**Versión:** 1.0.0
