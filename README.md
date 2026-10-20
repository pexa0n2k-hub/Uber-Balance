# Uber Balance PWA — corrección de jornadas v0.1.2

## Instalación
1. Descomprime este ZIP.
2. Sube los seis archivos a la raíz del repositorio de GitHub, reemplazando los archivos con el mismo nombre.
3. Espera a que GitHub Pages publique los cambios.
4. Cierra y vuelve a abrir Uber Balance. Si se mantiene el código anterior, espera unos segundos y recarga una vez.

## Qué corrige
- IndexedDB se actualiza de forma no destructiva: conserva los almacenes y registros existentes.
- Conserva el nombre de base de datos `uber-balance-db`; sube su versión a 2 y crea solo almacenes/índices faltantes.
- Después de guardar una jornada, verifica que el registro exista antes de confirmar.
- La pantalla de inicio ahora muestra jornadas recientes, incluso si su fecha no es hoy.
- Los errores se muestran en pantalla y la consola conserva el detalle técnico.
- Actualiza la caché del service worker a `uber-balance-v0.1.2`.

## Importante
**No borres los datos del sitio, no borres el almacenamiento de Chrome y no desinstales la PWA.** Esta actualización está diseñada para mantener los datos existentes. Aun así, como buena práctica, si puedes exportar un respaldo desde Historial antes de sustituir los archivos, hazlo.
