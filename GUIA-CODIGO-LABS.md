# Guía del código de LABS

## Cómo está organizado

El sitio es estático: los archivos HTML muestran las páginas, `styles.css` define el diseño y `script.js` reúne los datos y comportamientos. Las rutas son relativas para funcionar también bajo una subcarpeta de GitHub Pages.

## Archivos principales

| Ruta | Para qué sirve |
|---|---|
| `index.html` | Inicio, presentación y enlaces a las demás secciones. |
| `styles.css` | Estilos, header, topbar, logo, noticias, cotizador, pie y reglas responsive. |
| `script.js` | Textos ES/EN, sedes, notas, catálogo de exámenes, selección, validaciones y exportación PDF. |
| `assets/` | Imágenes, fotografías y logotipos originales. |
| `CATALOGO-TARIFARIO-2026-10-22.csv` | Referencia auditable de IDs y precios de los 731 exámenes del Excel. |
| `REVISION-TARIFARIO.md` | Diferencias y dudas identificadas en la importación. |

## Dónde editar cada parte

- **Datos visibles de Quito:** `contacto/index.html` (texto inicial) y `script.js` (claves `quitoAddress` para ES y EN). El enlace `Ver ubicación` está en el `<a>` de Quito de `contacto/index.html`.
- **Header, topbar y tamaño de logo:** reglas `.topbar`, `.navwrap` y `.brandLogo` de `styles.css`; logotipo original en `assets/logo.png`.
- **Notas de salud:** arreglo `notes` de `script.js`; cada artículo está bajo `noticias/<slug>/index.html` y usa `initArticle()`. El archivo del riñón es `assets/rinones.jpeg`.
- **Exámenes y precios:** arreglo `exams` de `script.js` generado desde el Excel. Para actualizaciones futuras, cotejar con el CSV y reemplazar solamente esa tabla tras validar los datos.
- **Cotizador:** `cotizador/index.html` contiene el formulario; `renderExamResults`, `renderSelected`, `initQuote` y `generatePDF` en `script.js` realizan búsqueda, selección, controles y PDF.
- **Idiomas:** objeto `I18N` para etiquetas y mensajes; `EXAM_EN` para traducciones de exámenes existentes.

## Mapa de páginas

- `contacto/index.html`: Vista HTML correspondiente a contacto.
- `cotizador/index.html`: Vista HTML correspondiente a cotizador.
- `index.html`: Página principal.
- `login/index.html`: Vista HTML correspondiente a login.
- `nosotros/index.html`: Vista HTML correspondiente a nosotros.
- `noticias/4-sintomas-que-debes-saber-sobre-el-dengue/index.html`: Vista HTML correspondiente a noticias/4-sintomas-que-debes-saber-sobre-el-dengue.
- `noticias/7-examenes-basicos-que-debes-realizarte-en-el-ano/index.html`: Vista HTML correspondiente a noticias/7-examenes-basicos-que-debes-realizarte-en-el-ano.
- `noticias/el-estres-un-enemigo-silencioso-que-afecta-nuestra-salud-fisica-y-mental/index.html`: Vista HTML correspondiente a noticias/el-estres-un-enemigo-silencioso-que-afecta-nuestra-salud-fisica-y-mental.
- `noticias/el-vih-y-el-sida-son-lo-mismo/index.html`: Vista HTML correspondiente a noticias/el-vih-y-el-sida-son-lo-mismo.
- `noticias/estres-dolor-abdominal-gases-estrenimiento/index.html`: Vista HTML correspondiente a noticias/estres-dolor-abdominal-gases-estrenimiento.
- `noticias/higado-el-filtro-natural-del-cuerpo/index.html`: Vista HTML correspondiente a noticias/higado-el-filtro-natural-del-cuerpo.
- `noticias/index.html`: Vista HTML correspondiente a noticias.
- `noticias/los-examenes-de-laboratorio-son-necesarios-y-primordiales/index.html`: Vista HTML correspondiente a noticias/los-examenes-de-laboratorio-son-necesarios-y-primordiales.
- `noticias/perdiendo-peso-que-examenes-de-laboratorio-necesito/index.html`: Vista HTML correspondiente a noticias/perdiendo-peso-que-examenes-de-laboratorio-necesito.
- `noticias/que-se-puede-ver-en-un-hemograma/index.html`: Vista HTML correspondiente a noticias/que-se-puede-ver-en-un-hemograma.
- `noticias/rinones-los-heroes-ocultos-de-nuestro-cuerpo/index.html`: Vista HTML correspondiente a noticias/rinones-los-heroes-ocultos-de-nuestro-cuerpo.

## Imágenes y recursos

Cada imagen está dentro de `assets/`. Para referenciarla desde `noticias/index.html`, utiliza `../assets/nombre.jpeg`; desde un artículo `noticias/<slug>/index.html`, `../../assets/nombre.jpeg`. Las rutas en `notes` empiezan en `assets/` y el JavaScript incorpora el prefijo correcto según la página.

## Publicación y mantenimiento

Sube el **contenido interior de esta carpeta** a la raíz de publicación configurada en GitHub Pages. No necesitas compilar. El PDF depende de la biblioteca jsPDF cargada por la página, por lo que necesita conexión para descargarla cuando no está en caché.

No hay backend de usuarios ni panel administrativo operativo: `login/` es una interfaz informativa, no autenticación real.

## Qué se cambió

- Se corrigió la referencia a `rinones.jpeg` y se añadió descripción alternativa.
- Se sincronizó la dirección visible de Quito en HTML y traducciones con su enlace existente de Google Maps.
- El CSS ya contenía un ajuste final para header, topbar y tamaño del logo; se mantuvo sin crear reglas duplicadas.
- Se incorporaron los 731 precios particulares del Excel proporcionado al catálogo que usa el cotizador y el PDF.
- Se agregaron comentarios en español para las principales funciones y páginas; no se cambió la estructura de publicación.

## Verificaciones y pendientes

- Revisa `REVISION-TARIFARIO.md` para los nombres duplicados que requieren validación comercial.
- Se comprobaron archivos y referencias de manera estática. No se ha probado en navegadores reales, servidores externos ni con la dirección pública de GitHub Pages.
- Se conservó el logo PNG original; no se engrosaron los trazos de la marca para evitar alterar su identidad sin un archivo vectorial oficial.

## Corrección de paginación PDF (22 de octubre de 2026)

En `script.js`, dentro de `generatePDF()`, el PDF ahora calcula cuánto espacio queda en cada hoja A4 antes de imprimir una fila o el resumen final:

- `drawTableHeading()`: dibuja EXAMEN / PRECIO; se repite cuando hay una página nueva.
- `newTablePage()`: añade otra hoja y prepara la tabla para continuar.
- `ensureRoom(height)`: revisa si cabe un elemento completo; en caso contrario salta de página.
- `examTextWidth` y `splitTextToSize()`: ajustan los nombres largos para que no invadan la columna PRECIO.
- `rowHeight`: calcula la altura necesaria para cada examen sin superponer filas.
- `summaryHeight`: reserva espacio para TOTAL, aclaraciones y contacto en una misma página.
- Bucle `pageCount`: numera las hojas al finalizar la cotización.

**Archivo modificado:** solamente `script.js` y esta guía. No se cambió el tarifario, los precios ni el diseño de la web.

**Comprobación:** `node --check script.js` y pruebas de simulación del generador con 1, 15, 21, 42, 100 y 731 exámenes, verificando que el total se imprima una sola vez, dentro del área de página. Estas pruebas no reemplazan una revisión visual del PDF en un navegador real.
