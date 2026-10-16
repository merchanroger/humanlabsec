# Requisitos pendientes para el panel privado LABS

Este documento no representa un panel implementado. Evita publicar un formulario de acceso que no esté respaldado por autenticación real.

## Arquitectura propuesta
- Frontend: sitio estático actual en GitHub Pages.
- Autenticación y base de datos: Supabase Auth + Postgres.
- Autorización: tabla de perfiles/roles y políticas Row Level Security (RLS) para toda operación.
- Imágenes: Supabase Storage con restricciones de tipos, tamaños y permisos.
- Configuración pública: contenido publicado consultable solo en lectura.
- Administración: interfaz privada conectada al servicio; no incluir nunca claves `service_role` en el navegador.

## Debe completarse antes de habilitar
- [ ] Crear proyecto y revisar límites/precios actuales.
- [ ] Diseñar tablas de contenido, navegación, sedes, redes, footer y opciones del cotizador.
- [ ] Definir las políticas RLS y probarlas con usuario anónimo y usuario administrador.
- [ ] Crear el bucket de imágenes con reglas de carga y sustitución.
- [ ] Construir inicio/cierre de sesión y editor.
- [ ] Conectar los contenidos editables con las páginas públicas con contenido de respaldo.
- [ ] Verificar persistencia tras recarga y nuevo inicio de sesión.
- [ ] Confirmar que los precios y reglas del cotizador no puedan alterarse por accidente.
- [ ] Auditar que no se guarden datos personales de clientes en tablas públicas.
