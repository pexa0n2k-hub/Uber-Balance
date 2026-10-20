# Uber Balance PWA — MVP 0.1.0

PWA en español para registrar jornadas, ingresos, gastos y cargas de gasolina. Diseñada para instalarse en Android y funcionar offline después de la primera carga.

## Archivos
- `index.html`: interfaz Liquid Glass adaptable.
- `app.js`: registro de jornadas, gastos, combustible, cálculos y exportación.
- `manifest.webmanifest`: configuración de instalación.
- `sw.js`: caché offline.
- `icon.svg`: icono de la aplicación.

## Publicar desde el celular con GitHub Pages
1. Crea un repositorio público nuevo llamado `uber-balance-pwa`.
2. Sube **todos los archivos de esta carpeta a la raíz del repositorio** (no solo el ZIP).
3. En GitHub abre **Settings → Pages**.
4. En Build and deployment elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`, y guarda.
5. Espera a que GitHub Pages publique el sitio. Abre la URL HTTPS en Chrome Android y elige **Añadir a pantalla de inicio**.

## Alcance y límites de esta versión
- La información se guarda localmente en IndexedDB del navegador. No hay cuenta ni sincronización entre dispositivos.
- Exporta respaldo JSON y jornadas CSV.
- El dinero disponible de hoy es ingresos de jornadas registradas hoy menos todos los gastos pagados hoy.
- La ganancia operativa estima combustible con un costo configurado por km. Para que sea útil, configura el costo por km a partir de tus propias cargas y kilómetros; de inicio vale $0.00, por lo que la estimación operativa es provisional.
- Los pagos de gasolina se guardan como gasto de efectivo. El cálculo operativo usa costo/km, no vuelve a restar la compra de gasolina, para evitar doble conteo.
- No se conecta a Uber ni descarga automáticamente sus ingresos.
- Haz respaldos periódicos. Borrar datos del navegador puede eliminar los registros locales.

## Próximas mejoras
- Asignar costos de combustible a intervalos reales entre cargas.
- Editar y corregir jornadas cerradas y gastos.
- Reportes semanales y cálculo de utilidad por hora.
- Importación de respaldo y pruebas automatizadas.
