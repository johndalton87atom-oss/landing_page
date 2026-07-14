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
   ========================================================================== */

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

  document.title = siteData.seo.tituloPestana;

  configurarMenuMovil();
});

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
  foto.alt = `Foto de perfil de ${personal.nombre}`;

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
    logo.alt = contacto.academia;
  } else {
    logo.style.display = "none";
  }

  document.getElementById("contact-academia").textContent = `La preparación se realiza desde la ${contacto.academia}.`;

  const items = [
    `<li>📍 ${contacto.direccion}</li>`,
    `<li>✉️ <a href="mailto:${contacto.email}">${contacto.email}</a></li>`,
    `<li>☎️ <a href="tel:${contacto.telefono.replace(/\s/g, "")}">${contacto.telefono}</a></li>`,
    `<li>💬 <a href="https://wa.me/${contacto.whatsapp}" target="_blank" rel="noopener" id="contact-whatsapp-link">WhatsApp</a></li>`,
  ];
  document.getElementById("contact-list").innerHTML = items.join("");
  document.getElementById("contact-whatsapp-link").addEventListener("click", () => registrarClicWhatsapp("ContactoInfo"));

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
    socialItems.push(`<li><a href="${contacto.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>`);
  }
  if (contacto.github) {
    socialItems.push(`<li><a href="${contacto.github}" target="_blank" rel="noopener">GitHub</a></li>`);
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
