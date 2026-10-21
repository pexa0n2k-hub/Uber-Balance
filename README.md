# Uber Balance — Día por día v1

## Archivos
Reemplaza los cinco archivos de la raíz del repositorio: `index.html`, `app.js`, `sw.js`, `manifest.webmanifest` e `icon.svg`.

## Cambios
- Nuevo apartado **Días** con resumen de ingresos Uber, gasolina, otros gastos y ganancia neta por fecha.
- Cada fecha se puede desplegar para consultar sus movimientos individuales.
- **Historial** muestra solo los movimientos de hoy; comienza vacío al iniciar un día nuevo. Los registros anteriores no se borran y siguen disponibles en **Días**.
- Se conserva la edición y eliminación de movimientos mediante el mismo gesto del historial.

## Protección de datos
Se conserva IndexedDB `uber-balance-db`, versión `3`, y los almacenes existentes. No borres datos del sitio ni el almacenamiento de Chrome.
