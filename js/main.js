/* ==========================================================================
   main.js — LÓGICA DE LA WEB
   ==========================================================================
   NO NECESITAS EDITAR ESTE ARCHIVO para cambiar textos, imágenes, colores
   o datos de contacto. Todo eso se edita en js/data.js.

   Este archivo simplemente:
   1. Lee la información de "siteData" (definida en data.js).
   2. Rellena el HTML de cada sección con esa información.
   3. Gestiona el menú móvil, el acordeón y el scroll suave.
   4. Registra en Google Analytics un evento "whatsapp_click" cada vez que
      se pulsa alguno de los botones/enlaces de WhatsApp de la web.
   5. Genera los datos estructurados Schema.org (LocalBusiness y FAQPage)
      a partir de la misma información de data.js, para no duplicar textos.
   ========================================================================== */

// URL PÚBLICA DEL SITIO — se usa para los datos estructurados (Schema.org).
// Si cambias de dominio, actualiza esta constante Y las etiquetas
// "canonical" / "og:url" / "twitter:url" de index.html (mismo valor en las 4).
const URL_SITIO = "https://jhiginio-opos-fyq.es";

document.addEventListener("DOMContentLoaded", () => {
  aplicarColores(siteData.colores);
  renderizarHero(siteData.hero, siteData.contacto);
  renderizarSobreMi(siteData.personal, siteData.sobreMi);
  renderizarPreparacion(siteData.preparacion);
  renderizarComoSonLasClases(siteData.comoSonLasClases);
  renderizarModalidades(siteData.modalidades);
  renderizarVentajas(siteData.ventajas, siteData.logroDestacado);
  renderizarFaq(siteData.faq);
  renderizarContacto(siteData.contacto);
  renderizarFooter(siteData.personal, siteData.contacto);
  inyectarDatosEstructurados(siteData);

  document.title = siteData.seo.tituloPestana;

  configurarMenuMovil();
});

/* ==========================================================================
   DATOS ESTRUCTURADOS (Schema.org / JSON-LD)
   ==========================================================================
   Se generan en JavaScript a partir de "siteData" para no duplicar textos
   que ya existen en data.js (nombre, dirección, teléfono, horario, FAQ...).
   Google admite perfectamente JSON-LD insertado por JavaScript.

   MODELO ELEGIDO (importante para futuras ediciones):
   Esta web es tu web personal como preparador, NO la web oficial de la
   academia. Por eso la entidad principal es un "Person" (tú), el servicio
   que ofreces se modela como "Service", y la Academia Premir aparece como
   una organización asociada ("EducationalOrganization"/"LocalBusiness")
   ligada a ti mediante "worksFor" y al servicio mediante "location" — pero
   nunca como sujeto principal del schema. Si en el futuro cambias de
   academia o trabajas de forma independiente, basta con editar/quitar el
   nodo "academia" de aquí abajo: tu "Person" y tu "Service" no dependen de él.
   ========================================================================== */
function inyectarDatosEstructurados(siteData) {
  const { personal, contacto, hero, sobreMi, faq } = siteData;
  const idPersona = `${URL_SITIO}/#persona`;
  const idAcademia = `${URL_SITIO}/#academia`;
  const idServicio = `${URL_SITIO}/#servicio`;

  const urlFoto = personal.fotoPerfil ? `${URL_SITIO}/${personal.fotoPerfil}` : undefined;
  const urlLogo = contacto.logo ? `${URL_SITIO}/${contacto.logo}` : undefined;

  // Separa "Rúa do Conde 46, 27003 Lugo" en calle / código postal / ciudad.
  // Si el formato de "contacto.direccion" cambiara y no encajase con el
  // patrón "calle, CP ciudad", se usa la dirección completa como fallback.
  const coincidenciaDireccion = contacto.direccion.match(/^(.*),\s*(\d{5})\s+(.*)$/);
  const direccionPostal = coincidenciaDireccion
    ? {
        streetAddress: coincidenciaDireccion[1].trim(),
        postalCode: coincidenciaDireccion[2],
        addressLocality: coincidenciaDireccion[3].trim(),
      }
    : { streetAddress: contacto.direccion };

  // Enlaces a perfiles externos (LinkedIn/GitHub), solo si están rellenos.
  const sameAs = [contacto.linkedin, contacto.github].filter(Boolean);

  // "email" y "telephone" NO van aquí a propósito: son datos de contacto de
  // la Academia Premir, no de la persona, y ya están en el nodo "academia"
  // de más abajo (evita duplicar/atribuir mal el mismo contacto a los dos).
  const persona = {
    "@type": "Person",
    "@id": idPersona,
    name: personal.nombre,
    jobTitle: "Preparador de oposiciones de Física y Química",
    description: sobreMi.parrafos.join(" "),
    url: `${URL_SITIO}/`,
    ...(urlFoto ? { image: urlFoto } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    worksFor: { "@id": idAcademia },
  };

  // Academia: organización asociada (dónde/con quién impartes las clases
  // presenciales), NO la entidad principal de la página.
  const academia = {
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": idAcademia,
    name: contacto.academia,
    url: `${URL_SITIO}/`,
    ...(urlLogo ? { image: urlLogo, logo: urlLogo } : {}),
    telephone: contacto.telefono,
    email: contacto.email,
    address: {
      "@type": "PostalAddress",
      ...direccionPostal,
      addressRegion: "Galicia",
      addressCountry: "ES",
    },
    ...(contacto.mapaLat && contacto.mapaLng
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: contacto.mapaLat,
            longitude: contacto.mapaLng,
          },
        }
      : {}),
    ...(contacto.googleMapsUrl ? { hasMap: contacto.googleMapsUrl } : {}),
    // Horario actual: lunes a viernes, 11:00-13:00 y 16:00-20:00.
    // Si cambias "contacto.horario" en data.js, actualiza también estos
    // horarios estructurados para que coincidan (Schema.org necesita el
    // horario en un formato de días/horas concreto, no como texto libre).
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "11:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "16:00",
        closes: "20:00",
      },
    ],
  };

  // El servicio que ofreces: lo prestas tú ("provider"), en la ubicación
  // de la academia ("location"), en el área geográfica de Galicia.
  const servicio = {
    "@type": "Service",
    "@id": idServicio,
    name: hero.titulo,
    description: hero.descripcion,
    serviceType: "Preparación de oposiciones",
    areaServed: "Galicia",
    provider: { "@id": idPersona },
    location: { "@id": idAcademia },
  };

  const preguntasFrecuentes = {
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.respuesta,
      },
    })),
  };

  const datosEstructurados = {
    "@context": "https://schema.org",
    "@graph": [persona, academia, servicio, preguntasFrecuentes],
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(datosEstructurados);
  document.head.appendChild(script);
}

/* ==========================================================================
   GOOGLE ANALYTICS — evento "whatsapp_click"
   ==========================================================================
   Registra un evento cada vez que se pulsa un botón/enlace de WhatsApp.
   "origen" identifica desde qué punto de la web se ha pulsado (Hero,
   ContactoInfo, ContactoBoton, etc.) y se envía como "event_label".
   ========================================================================== */
function registrarClicWhatsapp(origen) {
  if (typeof gtag === "function") {
    gtag("event", "whatsapp_click", { event_label: origen });
  }
}

/* ==========================================================================
   GOOGLE ANALYTICS — evento "map_click"
   ==========================================================================
   Registra un evento cada vez que se pulsa el enlace de la dirección o el
   mapa embebido de la sección de contacto (ambos abren Google Maps).
   ========================================================================== */
function registrarClicMapa() {
  if (typeof gtag === "function") {
    gtag("event", "map_click", { event_label: "Academia Premir Lugo" });
  }
}

/* ============================== COLORES ============================== */
function aplicarColores(colores) {
  const raiz = document.documentElement;
  raiz.style.setProperty("--color-primario", colores.primario);
  raiz.style.setProperty("--color-primario-oscuro", colores.primarioOscuro);
  raiz.style.setProperty("--color-secundario", colores.secundario);
  raiz.style.setProperty("--color-texto", colores.texto);
  raiz.style.setProperty("--color-texto-secundario", colores.textoSecundario);
  raiz.style.setProperty("--color-fondo", colores.fondo);
  raiz.style.setProperty("--color-fondo-alterno", colores.fondoAlterno);
}

/* ============================== HERO ============================== */
function renderizarHero(hero, contacto) {
  document.getElementById("logo-text").textContent = siteData.personal.nombre;
  document.getElementById("hero-titulo").textContent = hero.titulo;
  document.getElementById("hero-subtitulo").textContent = hero.subtitulo;
  document.getElementById("hero-descripcion").textContent = hero.descripcion;
  document.getElementById("hero-credenciales").textContent = hero.credenciales;
  document.getElementById("hero-boton-principal").textContent = hero.botonPrincipal;

  const botonWhatsapp = document.getElementById("hero-boton-whatsapp");
  botonWhatsapp.textContent = hero.botonSecundario;
  botonWhatsapp.href = `https://wa.me/${contacto.whatsapp}`;
  botonWhatsapp.addEventListener("click", () => registrarClicWhatsapp("Hero"));
}

/* ============================== SOBRE MÍ ============================== */
function renderizarSobreMi(personal, sobreMi) {
  const foto = document.getElementById("about-foto");
  foto.src = personal.fotoPerfil;
  foto.alt = `${personal.nombre}, profesor preparador de oposiciones de Física y Química`;

  document.getElementById("about-nombre").textContent = personal.nombre;

  document.getElementById("about-texto").innerHTML = sobreMi.parrafos
    .map((parrafo) => `<p>${parrafo}</p>`)
    .join("");
}

/* ============================== PREPARACIÓN (acordeón) ============================== */
function renderizarPreparacion(preparacion) {
  const contenedor = document.getElementById("preparation-list");

  contenedor.innerHTML = preparacion
    .map((bloque, indice) => {
      const parrafos = bloque.parrafos.map((p) => `<p>${p}</p>`).join("");
      const lista = bloque.lista.length
        ? `<ul class="preparation-card__lista">${bloque.lista.map((item) => `<li>${item}</li>`).join("")}</ul>`
        : "";
      const notaAdicional = bloque.notaAdicional ? `<p>${bloque.notaAdicional}</p>` : "";
      const cierre = bloque.cierre ? `<p class="preparation-card__cierre">${bloque.cierre}</p>` : "";

      return `
        <details class="preparation-card" ${indice === 0 ? "open" : ""}>
          <summary class="preparation-card__resumen">
            <span class="preparation-card__icono">${bloque.icono}</span>
            <span class="preparation-card__titulo">${bloque.titulo}</span>
          </summary>
          <div class="preparation-card__contenido">
            ${parrafos}
            ${lista}
            ${notaAdicional}
            ${cierre}
          </div>
        </details>`;
    })
    .join("");
}

/* ============================== CÓMO SON LAS CLASES ============================== */
function renderizarComoSonLasClases(comoSonLasClases) {
  document.getElementById("classes-info-titulo").textContent = comoSonLasClases.titulo;
  document.getElementById("classes-info-texto").innerHTML = comoSonLasClases.parrafos
    .map((parrafo) => `<p>${parrafo}</p>`)
    .join("");
}

/* ============================== MODALIDADES ============================== */
function renderizarModalidades(modalidades) {
  document.getElementById("modalities-titulo").textContent = modalidades.titulo;
  document.getElementById("modalities-intro").textContent = modalidades.introduccion;
  document.getElementById("modalities-nota").textContent = modalidades.nota;

  const contenedor = document.getElementById("modalities-list");
  contenedor.innerHTML = modalidades.lista
    .map(
      (modalidad) => `
      <div class="modality-card">
        <div class="modality-card__icono">${modalidad.icono}</div>
        <h3 class="modality-card__titulo">${modalidad.titulo}</h3>
        <p class="modality-card__desc">${modalidad.descripcion}</p>
      </div>`
    )
    .join("");
}

/* ============================== POR QUÉ ELEGIRME ============================== */
function renderizarVentajas(ventajas, logroDestacado) {
  const contenedor = document.getElementById("why-list");
  contenedor.innerHTML = ventajas
    .map(
      (ventaja) => `
      <li class="why-item">
        <span class="why-item__icono">${ventaja.icono}</span>
        <span class="why-item__texto">${ventaja.texto}</span>
      </li>`
    )
    .join("");

  document.getElementById("why-logro").textContent = logroDestacado;
}

/* ============================== FAQ (acordeón) ============================== */
function renderizarFaq(faq) {
  const contenedor = document.getElementById("faq-list");
  contenedor.innerHTML = faq
    .map(
      (item) => `
      <details class="faq-item">
        <summary class="faq-item__pregunta">${item.pregunta}</summary>
        <p class="faq-item__respuesta">${item.respuesta}</p>
      </details>`
    )
    .join("");
}

/* ============================== CONTACTO ============================== */
function renderizarContacto(contacto) {
  const logo = document.getElementById("contact-logo");
  if (contacto.logo) {
    logo.src = contacto.logo;
    logo.alt = `Logotipo de ${contacto.academia}`;
  } else {
    logo.style.display = "none";
  }

  document.getElementById("contact-academia").textContent = `La preparación se realiza desde la ${contacto.academia}.`;

  const direccionHTML = contacto.googleMapsUrl
    ? `<a href="${contacto.googleMapsUrl}" target="_blank" rel="noopener noreferrer" id="contact-direccion-link">${contacto.direccion}</a>`
    : contacto.direccion;

  // Mapa pequeño y responsive, embebido sin necesidad de clave de API de
  // Google. Todo el bloque es un único enlace que abre la ficha oficial de
  // Google Maps en una pestaña nueva al pulsarlo (el iframe es solo visual,
  // "pointer-events: none" en el CSS deja pasar el clic al enlace).
  const mapaHTML =
    contacto.googleMapsUrl && contacto.mapaLat && contacto.mapaLng
      ? `
      <a
        class="contact__map"
        id="contact-map-link"
        href="${contacto.googleMapsUrl}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir la ubicación de ${contacto.academia} en Google Maps"
      >
        <iframe
          src="https://www.google.com/maps?q=${contacto.mapaLat},${contacto.mapaLng}&z=16&output=embed"
          title="Mapa de ubicación de ${contacto.academia}"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          tabindex="-1"
          aria-hidden="true"
        ></iframe>
        <span class="contact__map-label">Abrir en Google Maps</span>
      </a>`
      : "";

  const items = [
    `<li class="contact__list-item--direccion">📍 ${direccionHTML}${mapaHTML}</li>`,
    `<li>✉️ <a href="mailto:${contacto.email}">${contacto.email}</a></li>`,
    `<li>☎️ <a href="tel:${contacto.telefono.replace(/\s/g, "")}">${contacto.telefono}</a></li>`,
    `<li>💬 <a href="https://wa.me/${contacto.whatsapp}" target="_blank" rel="noopener noreferrer" id="contact-whatsapp-link">WhatsApp</a></li>`,
  ];
  document.getElementById("contact-list").innerHTML = items.join("");
  document.getElementById("contact-whatsapp-link").addEventListener("click", () => registrarClicWhatsapp("ContactoInfo"));
  document.getElementById("contact-direccion-link")?.addEventListener("click", () => registrarClicMapa());
  document.getElementById("contact-map-link")?.addEventListener("click", () => registrarClicMapa());

  document.getElementById("contact-horario").innerHTML = contacto.horario
    .map((linea) => `<li>${linea}</li>`)
    .join("");

  const botonEmail = document.getElementById("contact-boton-email");
  botonEmail.textContent = "Escribir por email";
  botonEmail.href = `mailto:${contacto.email}`;

  const botonWhatsapp = document.getElementById("contact-boton-whatsapp");
  botonWhatsapp.textContent = "Escribir por WhatsApp";
  botonWhatsapp.href = `https://wa.me/${contacto.whatsapp}`;
  botonWhatsapp.addEventListener("click", () => registrarClicWhatsapp("ContactoBoton"));
}

/* ============================== FOOTER ============================== */
function renderizarFooter(personal, contacto) {
  document.getElementById("footer-nombre").textContent = personal.nombre;

  const socialItems = [];
  if (contacto.linkedin) {
    socialItems.push(`<li><a href="${contacto.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>`);
  }
  if (contacto.github) {
    socialItems.push(`<li><a href="${contacto.github}" target="_blank" rel="noopener noreferrer">GitHub</a></li>`);
  }
  document.getElementById("footer-social").innerHTML = socialItems.join("");

  const anioActual = new Date().getFullYear();
  document.getElementById("footer-copy").textContent = `© ${anioActual} ${personal.nombre}. Todos los derechos reservados.`;
}

/* ============================== MENÚ MÓVIL ============================== */
function configurarMenuMovil() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav");

  toggle.addEventListener("click", () => {
    const abierto = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", abierto);
    toggle.setAttribute("aria-expanded", String(abierto));
  });

  nav.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}
