# Uber Balance PWA — corrección de inicio de jornada

## Publicación
1. Descomprime el ZIP.
2. Sube los archivos de esta carpeta a la raíz del repositorio de GitHub, reemplazando los archivos con el mismo nombre.
3. Espera a que GitHub Pages termine de publicar y abre la PWA en Chrome.

## Corrección
- Valida los campos de fecha, hora y odómetro al iniciar jornada.
- Muestra un mensaje claro cuando falta un dato o falla el guardado.
- Confirma cuando la jornada se guardó correctamente.
- Incrementa la versión de caché del service worker para que el navegador reciba el código actualizado.

## Importante
La base de datos IndexedDB conserva el mismo nombre `uber-balance-db` y la misma versión 1. No borres los datos del sitio ni desinstales la app. Esta corrección no requiere migración ni eliminación de registros.
