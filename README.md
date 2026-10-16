# LABS — versión corregida para GitHub Pages

Esta versión mantiene el diseño existente y aplica únicamente las correcciones solicitadas:

- Navegación independiente para Inicio, Nosotros, Notas de salud, Contacto y Cotizador.
- Footer común al final de cada página.
- Estado normal del menú en negro, hover verde LABS y activo negro con subrayado verde LABS.
- Cotizador como página independiente, conservando selección, eliminación, total, datos del cliente y PDF.
- Verde LABS unificado en `#2F908E` y naranja secundario en `#EF7D32`.
- Menor uso de naranja; precios y números del cotizador en color neutro.
- PDF con la misma paleta visual.
- Selector ES | EN para la interfaz.
- Guayaquil identificada como Sede Principal.
- Contenido institucional de Nosotros completado con referencia al sitio oficial de LABS.
- Responsive para escritorio, tablet y móvil.

La carpeta raíz contiene directamente `index.html`, por lo que puede subirse al repositorio de GitHub Pages sin tener que entrar a una carpeta adicional.

## Actualización (imágenes, logo, traducción y notas)

- Logo oficial en PNG transparente: `assets/logo.png` (cabecera) y `assets/logo-blanco.png` (footer y PDF, sobre fondo verde).
- Carrusel de Inicio: `foto1` a `foto4`. Nosotros: `principal.jpeg`.
- Imágenes de las notas: ver `README-CORRECCION-IMAGENES.txt`.
- Valores monetarios del cotizador en gris (`--muted`, clase `.price`).
- Idioma ES/EN: cubre menú, textos, formularios, mensajes, nombres de los exámenes, fechas, títulos de pestaña, etiquetas de accesibilidad, notas, artículos y PDF.

### Cómo completar una nota de salud con el texto oficial
Cada nota está en el arreglo `notes` de `script.js`. `body` (español) y `enBody` (inglés) aceptan bloques:
`"Párrafo con **negrita**"`, `{h2:'Subtítulo'}`, `{h3:'Subtítulo menor'}`, `{ul:['a','b']}`, `{ol:['a','b']}`,
`{quote:'Cita'}` y `{img:'assets/archivo.jpeg',alt:'...',caption:'...'}`.
Campos opcionales por nota: `author` (se muestra como "Por/By"), `date`/`enDate`. Ambos idiomas deben tener los mismos bloques.
