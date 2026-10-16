# LABS — correcciones puntuales y preparación administrativa

## Cambios aplicados en esta entrega

- Barra superior reorganizada con teléfono, correo y cuatro iconos SVG accesibles (Facebook, Instagram, YouTube y LinkedIn) con los destinos indicados.
- Botón flotante de WhatsApp con icono SVG, mensaje emergente, transiciones discretas y respeto por `prefers-reduced-motion`.
- Pie de página cambiado a gris plomo; títulos de columnas con mayor jerarquía y enlaces conservados.
- Logo del pie de página cambiado a la versión a color existente (`assets/logo.png`) para evitar usar el logo blanco sobre fondo gris.
- Validación del cotizador reforzada sin cambiar catálogo, precios, cálculo del total ni generación de PDF:
  - Correo: sintaxis general con dominios y extensiones variadas, incluidos dominios `.com.ec`; no verifica existencia del buzón.
  - Cédula: diez dígitos, provincia 01–24, tercer dígito de persona natural y dígito verificador módulo 10.
  - Teléfono, nombre y selección de exámenes mantienen el flujo previo.
- CSS responsive específico para la barra superior, redes sociales, footer y WhatsApp.

## Archivos modificados

- `index.html`
- `nosotros/index.html`
- `noticias/index.html` y las páginas individuales de artículos
- `contacto/index.html`
- `cotizador/index.html`
- `styles.css`
- `script.js`

No se cambiaron los precios, la lista de exámenes ni las funciones de cálculo y PDF del cotizador.

## Panel de administración: limitación importante

El panel privado **no está implementado ni debe considerarse operativo en esta entrega**. El sitio se publica en GitHub Pages, que no ofrece por sí mismo autenticación administrativa, base de datos ni almacenamiento privado. No se ha conectado un proyecto de Supabase/Firebase ni se han podido probar usuarios, permisos o persistencia real. No se añadió un panel falso basado solo en `localStorage` ni se colocaron credenciales en archivos públicos.

Para completar el panel con persistencia real, el siguiente paso es crear y configurar un proyecto de backend/CMS. La opción sugerida para conservar el frontend actual es **Supabase** (Auth, Postgres con Row Level Security y Storage), sujeto a revisar los límites y precios vigentes antes de producción. La configuración debe incluir:
1. Crear el proyecto Supabase bajo una cuenta controlada por LABS.
2. Crear tablas de contenido y perfiles/roles administrativos, con políticas RLS que permitan lectura pública solo del contenido publicado y escritura solo a usuarios autorizados.
3. Crear un bucket de imágenes con límites de tipo/tamaño y permisos definidos.
4. Crear el primer usuario desde la consola de Supabase; asignar permisos administrativos de forma privada.
5. Añadir al frontend únicamente la URL del proyecto y la clave pública `anon` (nunca la `service_role`); mantener políticas RLS como barrera real de seguridad.
6. Integrar la lectura del contenido publicado en cada sección y el editor administrativo; comprobar persistencia tras cerrar sesión y recargar.

Hasta completar esos pasos, la web pública sigue siendo estática y los contenidos se editan en los archivos del proyecto. No publicar datos de cotizaciones o información personal en una tabla pública.

## Publicar en GitHub Pages

1. Descomprime el ZIP.
2. Sube el contenido interior de `humanlabsec/` a la raíz del repositorio configurado para GitHub Pages (no subas una carpeta contenedora adicional).
3. Confirma que GitHub Pages esté configurado para la rama/carpeta correcta.
4. Abre la web en escritorio y móvil y revisa barra superior, enlaces sociales, WhatsApp, footer y cotizador.

## Verificación realizada en esta entrega

- Se comprobó que `script.js` pasa la comprobación sintáctica de Node.js (`node --check`).
- Se verificó en el código que los cuatro enlaces sociales tienen los destinos solicitados y que el botón de WhatsApp utiliza `https://wa.me/593985090215`.
- Se verificó que las páginas HTML del proyecto conservan el cotizador existente y cargan los archivos compartidos.
- No se ejecutaron pruebas de navegador real, pruebas visuales automatizadas, publicación en GitHub Pages ni pruebas de un panel administrativo; por tanto, no se afirma que esas comprobaciones estén realizadas.
