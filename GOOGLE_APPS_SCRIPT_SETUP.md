# Configuración de Google Apps Script para Confirmación de Asistencia

## Pasos para crear el App Script "Cumpleaños 90 Lidia"

### 1. Crear la Hoja de Cálculo de Google

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Nombra la hoja como: **"Cumpleaños 90 Lidia - Confirmaciones"**
4. En la primera fila, agrega estos encabezados:
   - A1: `Fecha`
   - B1: `Nombre`
   - C1: `Asistencia`
   - D1: `Cantidad de Acompañantes`
   - E1: `Nombres de Acompañantes`
   - F1: `Mensaje`

### 2. Crear el Google Apps Script

1. En la hoja de cálculo, ve a **Extensiones > Apps Script**
2. Esto abrirá el editor de Apps Script
3. Cambia el nombre del proyecto a: **"Cumpleaños 90 Lidia"**
4. Borra todo el código existente y pega el siguiente código:

```javascript
function doPost(e) {
  try {
    // Obtener la hoja activa
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parsear los datos JSON recibidos
    var data = JSON.parse(e.postData.contents);
    
    // Agregar una nueva fila con los datos
    sheet.appendRow([
      data.fecha,
      data.nombre,
      data.asistencia,
      data.acompanantes,
      data.nombresAcompanantes,
      data.mensaje
    ]);
    
    // Responder con éxito
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Responder con error
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 'result': 'success', 'message': 'API funcionando correctamente' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 3. Implementar como Web App

**IMPORTANTE: Antes de implementar, guarda el script primero con Ctrl+S (Cmd+S en Mac)**

1. En el editor de Apps Script, haz clic en el ícono de **engranaje ⚙️** (Configuración del proyecto) en la barra lateral izquierda
2. Desplázate hacia abajo y marca la casilla **"Mostrar el archivo de manifiesto 'appsscript.json' en el editor"** (esto ayuda a evitar errores de OAuth)
3. Guarda nuevamente con Ctrl+S (Cmd+S)
4. Haz clic en **Implementar > Nueva implementación** (en la esquina superior derecha)
5. Haz clic en el ícono de engranaje ⚙️ junto a "Selecciona el tipo" y selecciona **Aplicación web**
6. Configura lo siguiente:
   - **Descripción**: Confirmación de asistencia - Cumpleaños 90 Lidia
   - **Ejecutar como**: **Yo** (tu email debe aparecer aquí)
   - **Quién tiene acceso**: **Cualquier persona** (MUY IMPORTANTE - debe decir "Cualquier persona", NO "Solo yo")
7. Haz clic en **Implementar**
8. Google te pedirá autorización - haz clic en **Autorizar acceso**
9. Selecciona tu cuenta de Google
10. Puede aparecer una advertencia de "Google no verificó esta app" - haz clic en **Avanzado** (abajo a la izquierda)
11. Haz clic en **Ir a Cumpleaños 90 Lidia (no seguro)**
12. Lee los permisos y haz clic en **Permitir**
13. **¡IMPORTANTE!** Copia la **URL de la aplicación web** que te proporciona (debe terminar en `/exec`)

### 4. Configurar la URL en la Invitación

1. Abre el archivo `src/components/RSVP.jsx`
2. Busca la línea:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Reemplaza `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` con la URL que copiaste en el paso anterior
4. Debería verse algo así:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx.../exec';
   ```

### 5. Probar la Configuración

1. Abre la invitación en el navegador
2. Ve a la sección de confirmación de asistencia
3. Llena el formulario y envíalo
4. Verifica que los datos aparezcan en tu hoja de Google Sheets

---

## Notas Adicionales

- Si necesitas actualizar el script, recuerda crear una **nueva implementación** para que los cambios surtan efecto
- Cada nueva implementación genera una nueva URL
- La hoja de cálculo guardará automáticamente todas las confirmaciones
- Puedes agregar filtros y formato condicional a la hoja para organizar mejor las respuestas

## Solución de Problemas

**Si recibes el error "Access blocked: Authorization Error - The OAuth client was deleted" (Error 401):**
1. Ve al editor de Apps Script
2. Haz clic en el ícono de **engranaje ⚙️** (Configuración del proyecto) en la barra lateral
3. Marca la opción **"Mostrar el archivo de manifiesto 'appsscript.json' en el editor"**
4. Guarda el proyecto (Ctrl+S o Cmd+S)
5. Ve a **Implementar > Administrar implementaciones**
6. Si hay implementaciones anteriores, elimínalas haciendo clic en los tres puntos y seleccionando "Archivar"
7. Crea una **Nueva implementación** siguiendo los pasos del punto 3 nuevamente
8. ASEGÚRATE de que en "Quién tiene acceso" esté seleccionado **"Cualquier persona"**, NO "Solo yo"

**Si el formulario no envía los datos:**
1. Verifica que la URL del script esté correcta y termine en `/exec`
2. Asegúrate de que el script tenga permisos de "Cualquier persona"
3. Revisa la consola del navegador (F12) para ver errores
4. Verifica que los encabezados de la hoja de cálculo coincidan exactamente con los del paso 1

**Si recibes errores de CORS:**
- El código ya usa `mode: 'no-cors'` para evitar problemas de CORS
- Los datos deberían guardarse aunque no recibas una respuesta explícita

**Si los datos no aparecen en la hoja:**
1. Verifica que estés usando la hoja correcta (la primera hoja del documento)
2. Revisa los encabezados de las columnas
3. Ve a **Extensiones > Apps Script > Ver ejecuciones** para ver los logs del script
