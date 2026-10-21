# Uber Balance — Crystal Studio Reference Fix 3

Esta versión ajusta el Liquid Glass tomando como referencia los ejemplos enviados: cristal con bordes biselados, reflejos blancos, transparencia, desenfoque y sombras de profundidad.

## Archivos
Reemplaza en la raíz del repositorio los seis archivos incluidos: `index.html`, `app.js`, `sw.js`, `manifest.webmanifest`, `icon.svg` y `README.md`.

## Cambios
- Jelly, Liquid iOS, Finance e Iridescente tienen tratamientos distintos.
- Transparencia, reflejos y profundidad se recalculan en vivo y afectan el CSS real de las superficies.
- El selector de superficies limita el efecto al área seleccionada.
- Cache actualizado para que el navegador solicite la versión nueva.

## Protección de registros
Se conserva `uber-balance-db` y `VER=3`. No borres los datos del sitio, no limpies el almacenamiento de Chrome y no desinstales la PWA para actualizar.

Nota: el JavaScript se valida por sintaxis; la apariencia final depende del navegador y del fondo visible detrás de los paneles.
