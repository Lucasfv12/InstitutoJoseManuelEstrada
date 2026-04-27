# Instituto José Manuel Estrada — Sitio Web

Sitio web institucional del Instituto José Manuel Estrada, Rafael Calzada, Buenos Aires.

## Estructura

```
estrada-site/
├── index.html              ← Página principal (home)
├── style.css               ← Estilos compartidos de todo el sitio
├── components.js           ← Navbar y footer reutilizables
├── images/                 ← Todas las imágenes
│   ├── imagen1conescudo.webp
│   ├── Jardin.webp
│   ├── Graduacion.jpg
│   └── ...
└── pages/
    ├── institucional.html  ← Equipo Directivo
    ├── mision.html         ← Misión, Visión y Valores
    ├── historia.html       ← De Steyl a Calzada
    ├── mision-compartida.html
    ├── nivel-inicial.html
    ├── nivel-primario.html
    ├── nivel-secundario.html
    ├── pastoral.html
    └── campus.html         ← Campus Cultural
```

## Cómo subir a GitHub Pages

1. Creá un repositorio nuevo en GitHub (ej: `EstradaSitio`)
2. Subí todos los archivos de esta carpeta al repositorio
3. Andá a **Settings → Pages**
4. En "Source", seleccioná **main branch / root**
5. Guardá — en unos minutos el sitio va a estar en:
   `https://TU_USUARIO.github.io/EstradaSitio/`

## Para editar contenido

- **Novedades y Agenda (home):** editá `index.html`, buscá la sección `<!-- NOVEDADES + AGENDA -->`
- **Datos de contacto:** están en `components.js` dentro de la función `renderFooter()`
- **Links de inscripción:** buscá `href="#"` en la sección del banner de inscripción y reemplazá con el link real del formulario
- **Imágenes del carousel:** en `index.html`, buscá las líneas con `background-image:url('images/...')`

## Sin dependencias

No requiere npm, Node.js ni ninguna instalación. Es HTML/CSS/JS puro.
Funciona abriendo `index.html` directamente en el navegador para previsualizar.
