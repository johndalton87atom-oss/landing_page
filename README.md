# Landing Page — Profesor Particular

Landing page estática (HTML, CSS y JavaScript puro, sin frameworks ni backend) para promocionar servicios de clases particulares. Pensada para poder editar **todo el contenido desde un único archivo**, y desplegarse gratis en Vercel.

## Estructura del proyecto

```
├── index.html                  → Estructura de la página (no hace falta tocarlo para cambiar textos)
├── css/
│   └── styles.css              → Estilos visuales (colores, tipografías, layout)
├── js/
│   ├── data.js                 → ⭐ AQUÍ EDITAS TODO EL CONTENIDO Y LOS COLORES ⭐
│   └── main.js                 → Lógica que pinta el contenido, el menú y los acordeones
├── assets/
│   └── images/
│       ├── favicon.svg               → Icono de la pestaña del navegador (placeholder)
│       ├── foto-perfil-placeholder.svg → Foto de perfil (placeholder)
│       └── og-image.svg              → Imagen para compartir en redes sociales (placeholder)
└── README.md
```

---

## 1. Cómo instalar dependencias

**No hay ninguna dependencia que instalar.** Este proyecto es HTML, CSS y JavaScript "vanilla" (sin frameworks, sin `npm install`, sin `package.json`). Puedes editarlo con cualquier editor de texto (recomendado: [Visual Studio Code](https://code.visualstudio.com/)).

---

## 2. Cómo ejecutar el proyecto en local

Tienes dos opciones:

**Opción A — La más simple:** haz doble clic en `index.html` para abrirlo directamente en tu navegador.

**Opción B — Recomendada** (evita algunos problemas menores de navegador con rutas locales):
- Si usas VS Code, instala la extensión **"Live Server"** y pulsa "Go Live" abajo a la derecha.
- O, si tienes Node.js instalado, ejecuta esto en la terminal, dentro de la carpeta del proyecto:
  ```
  npx serve .
  ```
  y abre la URL que te indique (normalmente `http://localhost:3000`).

---

## 3. Cómo modificar todos los textos

Abre el archivo **`js/data.js`**. Es el único archivo que necesitas tocar para cambiar el contenido de la web. Está dividido en 11 bloques numerados y cada línea tiene un comentario explicando qué escribir:

| Bloque en `data.js` | Qué controla |
|---|---|
| `personal` | Nombre y foto de perfil |
| `hero` | Título, subtítulo, descripción, credenciales y textos de los 2 botones del Hero |
| `sobreMi` | Párrafos de la sección "Sobre mí" (añade/quita líneas de la lista) |
| `preparacion` | Las 7 tarjetas desplegables de "¿Qué encontrarás en la preparación?" |
| `comoSonLasClases` | Título y párrafos de "¿Cómo son las clases?" |
| `modalidades` | Tarjetas de Presencial / Online / En diferido y la nota final |
| `ventajas` + `logroDestacado` | Checklist de "¿Por qué elegirme?" y la frase destacada |
| `faq` | Preguntas frecuentes (acordeón) |
| `contacto` | Academia, dirección, email, teléfono, WhatsApp, horario, LinkedIn, GitHub |
| `colores` | Paleta de colores de toda la web |
| `seo` | Título de la pestaña del navegador |

Para añadir o quitar elementos de una lista (por ejemplo, una tarjeta de "Preparación" o una pregunta de la FAQ), copia un bloque `{ ... }` completo (incluida la coma final) y pégalo antes o después de otro, o bórralo si no lo necesitas.

> La web no tiene formulario de contacto: en su lugar, la sección "Contacto" muestra los datos de la academia y dos botones que abren directamente el email y WhatsApp.

> Las etiquetas `<meta>` de SEO y Open Graph (título en Google, descripción, imagen al compartir en redes) se editan directamente en `index.html`, al principio del archivo, dentro de comentarios muy visibles — porque estas etiquetas las leen buscadores y redes sociales antes de que se ejecute ningún JavaScript.

---

## 4. Cómo cambiar las imágenes

Todas las imágenes están en `assets/images/`. Sustituye estos 3 archivos por los tuyos (puedes mantener el mismo nombre o cambiar la ruta en `data.js`/`index.html`):

1. **Foto de perfil** (`foto-perfil-placeholder.svg`)
   - Sube tu foto (formato JPG o PNG, cuadrada, mínimo 500x500 px) a `assets/images/`.
   - En `js/data.js`, busca `fotoPerfil` dentro del bloque `personal` y cambia la ruta, por ejemplo:
     ```js
     fotoPerfil: "assets/images/foto-perfil.jpg",
     ```

2. **Favicon** (`favicon.svg`) — icono de la pestaña del navegador.
   - Sustituye el archivo `assets/images/favicon.svg` por tu propio icono (puedes exportarlo en formato SVG o PNG desde Canva/Figma).
   - Si usas otro nombre de archivo o formato, actualiza la línea `<link rel="icon" ...>` en `index.html`.

3. **Imagen para redes sociales / Open Graph** (`og-image.svg`) — es la imagen que se ve al compartir el enlace de tu web en WhatsApp, LinkedIn, etc.
   - Crea una imagen de **1200x630 px** (JPG o PNG) y súbela a `assets/images/`.
   - En `index.html`, busca la línea `<meta property="og:image" ...>` y cambia la ruta a tu nuevo archivo.

---

## 5. Cómo cambiar los colores

Abre `js/data.js` y busca el bloque `colores` (bloque nº10). Cambia los códigos hexadecimales:

```js
colores: {
  primario: "#2563eb",        // Color principal (botones, enlaces, detalles)
  primarioOscuro: "#1d4ed8",  // Tono más oscuro (efecto hover de botones)
  secundario: "#f59e0b",      // Color de acento (estrellas, precios)
  texto: "#1f2937",           // Color del texto principal
  textoSecundario: "#4b5563", // Color del texto secundario
  fondo: "#ffffff",           // Fondo general
  fondoAlterno: "#f8fafc",    // Fondo alterno entre secciones
},
```

Puedes generar una paleta de colores bonita y coherente en [coolors.co](https://coolors.co). Solo necesitas pegar aquí los códigos hexadecimales (empiezan por `#`).

---

## 6. Cómo desplegar gratis en Vercel

1. Sube este proyecto a un repositorio de **GitHub** (crea uno nuevo y sube todos estos archivos).
2. Entra en **https://vercel.com** y crea una cuenta gratuita (puedes registrarte con tu cuenta de GitHub).
3. Pulsa **"Add New… → Project"** y selecciona el repositorio que acabas de subir.
4. En la configuración del proyecto, en **"Framework Preset"** elige **"Other"** (no necesitas ningún comando de build ni carpeta de salida especial, ya que es una web estática).
5. Pulsa **"Deploy"**. En menos de un minuto tendrás tu web publicada en una URL del tipo `https://tu-proyecto.vercel.app`.
6. (Opcional) Actualiza en `index.html` la etiqueta `<meta property="og:url" ...>` con tu URL final, y vuelve a desplegar.

Cada vez que hagas `git push` a tu repositorio, Vercel volverá a desplegar la web automáticamente con los cambios.

---

## 7. Cómo actualizar la web cuando quieras cambiar información

1. Edita lo que necesites en `js/data.js` (textos, colores, contacto) y/o sustituye imágenes en `assets/images/`.
2. Guarda los cambios.
3. Si quieres comprobarlo antes en tu ordenador, abre `index.html` en el navegador (ver sección 2).
4. Cuando estés conforme, sube los cambios a tu repositorio de GitHub:
   ```
   git add .
   git commit -m "Actualizo contenido de la web"
   git push
   ```
5. Vercel detectará el cambio y volverá a publicar la web automáticamente en un par de minutos. No necesitas hacer nada más en Vercel.

---

## Notas técnicas

- La web es 100% responsive (se adapta a móvil, tablet y escritorio).
- Incluye etiquetas SEO (`title`, `description`) y Open Graph para compartir en redes sociales.
- El menú de navegación incluye versión móvil con botón hamburguesa.
- Los colores se aplican mediante variables CSS controladas desde `data.js`, por lo que no hay que tocar el CSS para cambiar la paleta.
- Las tarjetas desplegables de "Preparación" y la sección de FAQ usan el elemento nativo `<details>/<summary>` del navegador: no requieren JavaScript adicional para abrirse/cerrarse y son accesibles por teclado.
- No hay formulario de contacto ni ningún servicio externo de envío de emails: los botones de "Contacto" abren directamente el email (`mailto:`) y WhatsApp (`wa.me`) del visitante.
