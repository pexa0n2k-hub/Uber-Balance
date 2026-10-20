# Uber Balance — Corrección completa v0.1.3

## Archivos
- `index.html`
- `app.js`
- `sw.js`
- `manifest.webmanifest`
- `icon.svg`

## Instalación desde Android
1. Descomprime el ZIP.
2. En el repositorio `pexa0n2k-hub/Uber-Balance`, reemplaza los archivos por los incluidos aquí.
3. Guarda los cambios en la rama `main`.
4. Abre la PWA con conexión a internet y espera unos segundos a que actualice.
5. Entra en **Jornada**, registra fecha, hora y odómetro y pulsa **Iniciar jornada**. La app debe abrir **Historial** y mostrar la jornada verificada.

## Protección de datos
La base conserva el nombre `uber-balance-db`. La migración crea únicamente almacenes faltantes; no borra ni recrea `sessions`, `expenses`, `fuel` o `settings`. Si encuentra un almacén `sessions` con una clave incompatible, usa un almacén auxiliar `sessions_compat` sin tocar el original. No borres almacenamiento del sitio ni datos de Chrome.
