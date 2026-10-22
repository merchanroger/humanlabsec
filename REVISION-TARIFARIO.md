# Auditoría del tarifario recibido

Fuente: `Tarifario examenes labs.xlsx`, hoja `Examenes`, filas 5–735 (22 de octubre de 2026).

- Registros importados: **731**.
- Todos los registros tenían ID, nombre y precio numérico; no hubo precios nulos ni identificadores duplicados.
- Se respetaron los nombres y precios del documento, sin reinterpretar exámenes similares.
- Las filas duplicadas por nombre se conservan porque poseen ID distinto, en lugar de elegir una arbitrariamente.
- Los IDs originales y la fila fuente quedan en `CATALOGO-TARIFARIO-2026-10-22.csv`.
- La traducción inglesa de los exámenes nuevos se mantiene igual al texto del tarifario hasta que LABS apruebe una traducción; el cotizador sigue bilingüe en su interfaz.

## Registros con nombre repetido que LABS debe confirmar

- **PRUEBA DETECCION CUALITATIVA DE ANTICUERPOS DE VIRUS SARS-COV-2(COVID19) IGM E IGG POR INMUNOENSAYO**: ID 1191, fila 589, USD 12.60, ID 1195, fila 591, USD 23.10, ID 1196, fila 592, USD 15.75

## Nota

Los registros anteriores que no coinciden literalmente con el tarifario no se trasladaron al catálogo activo para evitar ofrecer un precio no confirmado. El código original sigue disponible en el ZIP proporcionado por el usuario.
