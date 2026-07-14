/* ==========================================================================
   ARCHIVO DE CONTENIDO — data.js
   ==========================================================================
   ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR PARA CAMBIAR LOS TEXTOS,
   DATOS DE CONTACTO Y COLORES DE TU WEB.

   No necesitas tocar los archivos HTML, CSS ni el otro archivo JS (main.js)
   para actualizar tu información. Simplemente cambia los valores entre
   comillas "..." que encuentres en este archivo y guarda.

   Consejos:
   - Respeta las comillas "..." y las comas , al final de cada línea.
   - Si un texto contiene comillas dobles, escríbelas así: \" (con barra
     invertida delante) para no romper el archivo.
   - Puedes añadir o quitar elementos de las listas (los bloques que
     empiezan por "{" y terminan por "}", o los que están entre "[ ]")
     copiando y pegando un bloque completo o una línea completa.
   ========================================================================== */

const siteData = {

  // ==========================================================================
  // 1. DATOS PERSONALES
  // ==========================================================================
  personal: {
    // ESCRIBE AQUÍ TU NOMBRE (se usa en el menú, en "Sobre mí" y en el footer)
    nombre: "J. Higinio",

    // RUTA DE TU FOTO DE PERFIL (sección "Sobre mí")
    // Sustituye el archivo por tu propia foto (formato JPG o PNG, cuadrada,
    // mínimo 500x500 px) y cambia aquí la ruta, por ejemplo:
    // fotoPerfil: "assets/images/foto-perfil.jpg",
    fotoPerfil: "assets/images/foto-perfil4.png",
  },

  // ==========================================================================
  // 2. HERO (primera pantalla de la web)
  // ==========================================================================
  hero: {
    // ESCRIBE AQUÍ EL TÍTULO PRINCIPAL
    titulo: "Preparación de Oposiciones de Física y Química en Galicia",

    // ESCRIBE AQUÍ EL SUBTÍTULO
    subtitulo: "Clases presenciales, online y en diferido desde la Academia Premir",

    // ESCRIBE AQUÍ LA DESCRIPCIÓN BREVE
    descripcion: "Preparación completa de problemas, temas, unidades didácticas y programación con un seguimiento totalmente personalizado.",

    // ESCRIBE AQUÍ TU LÍNEA DE CREDENCIALES/TRAYECTORIA (se separa con · automáticamente si usas ese carácter)
    credenciales: "Profesor de Secundaria de Física y Química desde 2018 · Preparador de oposiciones desde 2020 · Preparador de la Academia Premir desde 2024",

    // ESCRIBE AQUÍ EL TEXTO DEL BOTÓN PRINCIPAL (lleva al formulario de contacto)
    botonPrincipal: "Solicitar información",

    // ESCRIBE AQUÍ EL TEXTO DEL BOTÓN SECUNDARIO (abre WhatsApp directamente)
    botonSecundario: "Contactar por WhatsApp",
  },

  // ==========================================================================
  // 3. SOBRE MÍ
  // ==========================================================================
  // ESCRIBE AQUÍ TU PRESENTACIÓN. Cada línea de la lista es un párrafo.
  // Añade, edita o elimina líneas según necesites.
  sobreMi: {
    parrafos: [
      "Soy profesor de Física y Química en la enseñanza pública desde 2018.",
      "Durante estos años he impartido clase en todos los niveles de ESO y Bachillerato, lo que me proporciona una visión global del currículo y de las dificultades reales que presentan los distintos contenidos.",
      "Desde 2020 preparo opositores de Física y Química y actualmente desarrollo esta labor como preparador en la Academia Premir de Lugo.",
      "Mi objetivo es que cada alumno llegue al examen con una preparación sólida, práctica y enfocada exactamente al tipo de ejercicios y pruebas que encontrará en la oposición.",
    ],
  },

  // ==========================================================================
  // 4. ¿QUÉ ENCONTRARÁS EN LA PREPARACIÓN? (tarjetas desplegables)
  // ==========================================================================
  // Cada bloque { ... } es una tarjeta desplegable (acordeón). Campos:
  //   icono       -> un emoji o símbolo (ej. ✔)
  //   titulo      -> título de la tarjeta
  //   parrafos    -> lista de párrafos que aparecen ANTES de la lista con viñetas
  //   lista       -> lista con viñetas (déjala como [] si no quieres ninguna)
  //   notaAdicional -> párrafo extra después de la lista (déjalo como "" si no lo usas)
  //   cierre      -> párrafo final de cierre (déjalo como "" si no lo usas)
  preparacion: [
    {
      icono: "✔",
      titulo: "Preparación completa de problemas",
      parrafos: ["Trabajamos todos los bloques del temario:"],
      lista: [
        "Mecánica Clásica",
        "Termodinámica",
        "Electromagnetismo",
        "Fluidos",
        "Óptica",
        "Oscilaciones y Ondas",
        "Física Cuántica y Nuclear",
	"Relatividad Especial",
	"Disoluciones",
	"Cinética Química",
        "Química Cuantitativa",
        "Equilibrio Químico",
        "Ácido-Base",
        "Precipitación",
        "Química Orgánica",
        "Electroquímica",
      ],
      notaAdicional: "",
      cierre: "Cada bloque comienza con una explicación clara de la teoría imprescindible y un formulario con las ecuaciones necesarias para resolver los problemas más habituales de oposición.",
    },
    {
      icono: "✔",
      titulo: "Resolución de problemas de oposición",
      parrafos: [
        "La preparación está completamente orientada al examen.",
        "Trabajamos ejercicios:",
      ],
      lista: [
        "De convocatorias recientes de Galicia",
        "De otras comunidades autónomas",
        "Problemas tipo oposición",
        "Variantes similares a las que suelen aparecer en examen",
      ],
      notaAdicional: "",
      cierre: "El objetivo no es únicamente saber resolverlos, sino aprender la metodología para enfrentarse a cualquier problema.",
    },
    {
      icono: "✔",
      titulo: "Preparación de los temas",
      parrafos: ["En todas las sesiones dedicamos parte del tiempo a la preparación de los temas:"],
      lista: [
        "Organización",
        "Estructura",
        "Técnicas de estudio",
        "Resolución de dudas",
        "Planificación",
      ],
      notaAdicional: "",
      cierre: "Buscando optimizar el tiempo de estudio y mejorar la calidad de la exposición.",
    },
    {
      icono: "✔",
      titulo: "Unidades Didácticas",
      parrafos: ["Mi experiencia impartiendo todos los cursos de ESO y Bachillerato me permite aportar una gran cantidad de:"],
      lista: [
        "Actividades",
        "Situaciones de aprendizaje",
        "Prácticas de laboratorio",
        "Enfoques metodológicos",
        "Propuestas originales",
      ],
      notaAdicional: "Además, se realizan defensas de Unidades en las sesiones por parte de los alumnos, con correcciones y comentarios simulando las posibles intervenciones de un tribunal de oposiciones.",
      cierre: "Todo ello pensado para elaborar unidades didácticas diferenciadoras y realistas.",
    },
    {
      icono: "✔",
      titulo: "Programación Didáctica",
      parrafos: ["La preparación se complementa con sesiones específicas dedicadas a la Programación Didáctica, impartidas por un especialista."],
      lista: [],
      notaAdicional: "",
      cierre: "",
    },
    {
      icono: "✔",
      titulo: "Simulacros reales",
      parrafos: ["Durante el curso realizamos simulacros con un nivel y formato muy similares al examen oficial para llegar a la oposición con experiencia real."],
      lista: [],
      notaAdicional: "",
      cierre: "",
    },
    {
      icono: "✔",
      titulo: "Seguimiento personalizado",
      parrafos: [
        "Cada alumno dispone de atención individual para resolver dudas entre clases.",
        "Respondo consultas por correo electrónico y realizo un seguimiento continuo del progreso para que ninguna duda quede sin resolver.",
      ],
      lista: [],
      notaAdicional: "",
      cierre: "",
    },
  ],

  // ==========================================================================
  // 5. ¿CÓMO SON LAS CLASES?
  // ==========================================================================
  comoSonLasClases: {
    // ESCRIBE AQUÍ EL TÍTULO DE LA SECCIÓN
    titulo: "¿Cómo son las clases?",
    // ESCRIBE AQUÍ LOS PÁRRAFOS EXPLICATIVOS (uno por línea)
    parrafos: [
      "Las sesiones se organizan de forma muy práctica. En cada clase dedicamos una parte del tiempo a la preparación de los temas (planificación, organización, resolución de dudas y técnicas de estudio) y el resto se centra en la resolución guiada de ejercicios de oposición.",
      "Además, durante el curso también trabajaremos la preparación de las Unidades Didácticas y realizaremos simulacros para familiarizarnos con el examen real.",
    ],
  },

  // ==========================================================================
  // 6. MODALIDADES
  // ==========================================================================
  modalidades: {
    // ESCRIBE AQUÍ EL TÍTULO DE LA SECCIÓN
    titulo: "Modalidades",
    // ESCRIBE AQUÍ LA FRASE INTRODUCTORIA
    introduccion: "Tú eliges cómo asistir",
    // Añade, edita o elimina bloques { ... }, uno por modalidad
    lista: [
      {
        icono: "🏫",
        titulo: "Presencial",
        descripcion: "Clases en la Academia Premir Lugo.",
      },
      {
        icono: "💻",
        titulo: "Online en directo",
        descripcion: "Participa desde cualquier lugar.",
      },
      {
        icono: "🎥",
        titulo: "En diferido",
        descripcion: "Las sesiones se graban para que puedas verlas en diferido si lo prefieres o no puedes asistir en directo.",
      },
    ],
    // ESCRIBE AQUÍ LA NOTA FINAL DE LA SECCIÓN
    nota: "También es posible combinar varias modalidades según tus necesidades.",
  },

  // ==========================================================================
  // 7. ¿POR QUÉ ELEGIRME? (lista de ventajas cortas)
  // ==========================================================================
  // Añade, edita o elimina líneas { ... }. El icono admite cualquier emoji.
  ventajas: [
    { icono: "✅", texto: "Profesor en activo de la enseñanza pública." },
    { icono: "✅", texto: "Experiencia impartiendo todos los cursos de ESO y Bachillerato." },
    { icono: "✅", texto: "Preparación enfocada exclusivamente al examen." },
    { icono: "✅", texto: "Dominio de todos los bloques de Física y Química." },
    { icono: "✅", texto: "Seguimiento individual del alumnado." },
    { icono: "✅", texto: "Simulacros durante el curso." },
    { icono: "✅", texto: "Clases presenciales, online y grabadas." },
    { icono: "✅", texto: "Preparación integral: problemas, temas y unidades" },
  ],

  // ESCRIBE AQUÍ TU FRASE DE LOGRO DESTACADO (aparece resaltada bajo la lista anterior)
  logroDestacado: "A lo largo de estos años he acompañado a numerosos opositores, algunos de los cuales ya forman parte de la enseñanza pública.",

  // ==========================================================================
  // 8. PREGUNTAS FRECUENTES (FAQ)
  // ==========================================================================
  // Añade, edita o elimina bloques { pregunta, respuesta }
  faq: [
    {
      pregunta: "¿Puedo seguir las clases si trabajo?",
      respuesta: "Sí. Todas las sesiones quedan grabadas.",
    },
    {
      pregunta: "¿Es necesario asistir presencialmente?",
      respuesta: "No. Puedes seguir toda la preparación online.",
    },
    {
      pregunta: "¿Se corrigen dudas fuera del horario de clase?",
      respuesta: "Sí, existe seguimiento personalizado mediante correo electrónico.",
    },
    {
      pregunta: "¿Se preparan también las unidades didácticas?",
      respuesta: "Sí, además de problemas y temas trabajamos las unidades didácticas con posibilidad de defenderlas en las sesiones destinadas para ello.",
    },
    {
      pregunta: "¿Se realizan defensas de las unidades didácticas en clase?",
      respuesta: "Sí. Desde mitad de curso dedicamos sesiones para que los alumnos que lo deseen puedan defender su unidad didáctica. Tras la exposición, el profesor ofrece feedback y recomendaciones para mejorar de cara a la oposición.",
    },
  ],

  // ==========================================================================
  // 9. CONTACTO
  // ==========================================================================
  contacto: {
    // RUTA DEL LOGOTIPO DE LA ACADEMIA (aparece encima del título de "Contacto")
    // Sustituye el archivo por tu propio logo y cambia aquí la ruta si usas
    // otro nombre. Déjalo como "" si no quieres mostrar ningún logo.
    logo: "assets/images/logo-premir.png",

    // ESCRIBE AQUÍ EL NOMBRE DE LA ACADEMIA/CENTRO
    academia: "Academia Premir Lugo",

    // ESCRIBE AQUÍ LA DIRECCIÓN COMPLETA
    direccion: "Rúa do Conde 46, 27003 Lugo",

    // ESCRIBE AQUÍ EL EMAIL DE CONTACTO DE LA ACADEMIA
    email: "premir.lugo@premir.es",

    // ESCRIBE AQUÍ EL TELÉFONO (se muestra en pantalla)
    telefono: "982 228 030",

    // NÚMERO DE WHATSAPP para los botones "Contactar por WhatsApp"
    // Solo números, con prefijo de país y SIN espacios ni símbolos "+".
    // Ejemplo para España: "34982228030"
    whatsapp: "34982228030",

    // ESCRIBE AQUÍ EL HORARIO DE ATENCIÓN (una línea de texto por elemento de la lista)
    horario: [
      "Lunes a viernes: 11:00 – 13:00 y 16:00 – 20:00",
    ],

    // ESCRIBE AQUÍ LA URL COMPLETA DE TU LINKEDIN (opcional)
    // Déjalo como "" si no quieres mostrar el icono.
    linkedin: "",

    // ESCRIBE AQUÍ LA URL COMPLETA DE TU GITHUB (opcional)
    // Déjalo como "" si no quieres mostrar el icono.
    github: "",
  },

  // ==========================================================================
  // 10. COLORES PRINCIPALES DE LA WEB
  // ==========================================================================
  // Cambia estos códigos de color (formato hexadecimal, ej. "#1d4ed8") para
  // cambiar la paleta de toda la web al instante. Puedes generar paletas
  // bonitas en https://coolors.co
  colores: {
    // Color principal (botones, enlaces, detalles destacados)
    primario: "#2563eb",
    // Color principal en tono más oscuro (hover de botones)
    primarioOscuro: "#1d4ed8",
    // Color secundario / de acento (detalles, iconos, estrellas)
    secundario: "#f59e0b",
    // Color del texto principal
    texto: "#1f2937",
    // Color del texto secundario (subtítulos, descripciones)
    textoSecundario: "#4b5563",
    // Color de fondo general de la web
    fondo: "#ffffff",
    // Color de fondo alterno (para diferenciar secciones)
    fondoAlterno: "#f8fafc",
  },

  // ==========================================================================
  // 11. SEO Y METADATOS
  // ==========================================================================
  // Este texto se usa para actualizar el título de la pestaña del navegador
  // de forma dinámica. Para el SEO y la vista previa al compartir en redes
  // sociales (Open Graph), edita también las etiquetas <meta> que están al
  // principio del archivo index.html (están muy comentadas).
  seo: {
    // ESCRIBE AQUÍ EL TÍTULO QUE QUIERES QUE APAREZCA EN LA PESTAÑA DEL NAVEGADOR
    tituloPestana: "Preparación de Oposiciones de Física y Química en Galicia | Academia Premir",
  },
};
