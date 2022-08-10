# funciones-fsextra

### Requerimientos

- Requiere la instalación previa de `fs-extra` y `path`.
- Requiere el archivo `ConstantesNode.tsx` para importar y definir constantes de módulos de node instalados, solo para tener un orden y siempre utilizar acceder por medio del nombre de las constantes.

### Habilitar uso de módulos de Node en proyecto Vite-React-Electron

Una vez instalados los módulos de node que utilizará la aplicación, los registramos para acceder a ellos mediante el objeto `window`. Esto se realiza sobre el archivo `./electron/preload.js`

```typescript
// ./electron/preload.ts

// verificar que exista la función contextBridge(), de lo contrario agregar de la importación
import { ipcRenderer, contextBridge } from 'electron';

// importar la librería de node
import fs from 'fs-extra';
import path from 'path';

// exponerla en la aplicación
contextBridge.exposeInMainWorld('fs', fs);
contextBridge.exposeInMainWorld('path', path);


declare global {
  interface Window {
    Main: typeof api;
    ipcRenderer: typeof ipcRenderer;
    // agregar la palabra reservada para acceder desde los archivos
    fs : typeof import('fs-extra')
    path : typeof import('path')
  }
}
```

### `crearArchivo(nombreArchivo, contenidoArchivo, rutaAlmacenamiento)`

##### Descripción
La función crea un archivo de cualquier tipo con el contenido que sea requerido.

##### Parámetros
- **nombreArchivo** (*string* *): nombre del archivo con el tipo de extensión (ej: file.txt).
- **contenidoArchivo** (*string* *): contenido que llevará el archivo.
- **rutaAlmacenamiento** (*string* *): ruta completa del `directorio` donde se almacenará el archivo.

##### Resultados
```typescript
crearArchivo('test.js', 'let texto = esta es una prueba; ', 'C:/etc/fold')
    .then(function(realPath){
        console.log(realPath) // resultado: C:/etc/fold/test.js
    })
    .catch(function(err){
        console.error(err); // throw callback message.
    })
```
### `renombrarArchivo(rutaAlmacenamiento, nuevoNombre)`

##### Descripción
La función modifica el nombre del archivo o de un directorio.

##### Parámetros
- **rutaArchivo** (*string* *): ruta completa del archivo o directorio que será renombrado.
-  **nuevoNombre** (*string* *): nombre que tomará el archivo o directorio.

##### Resultados
```typescript
renombrarArchivo('C:/etc/fold/test.js', 'prueba1.txt')
    .then(function(realPath){
        console.log(realPath) // resultado: C:/etc/fold/prueba1.txt
    })
    .catch(function(err){
        console.error(err); // throw callback message.
    })
```
### `moverArchivo(rutaAlmacenamiento, destino)`
##### Descripción
La función mueve el archivo o directorio hacia otro lugar de almacenamiento.
##### Parámetros
- **rutaArchivo** (*string* *): ruta completa donde se encuentra actualmente el archivo.
- **destino** (*string* *): ruta completa del directorio donde se moverá el archivo.

##### Resultados
```typescript
moverArchivo('C:/etc/fold/prueba1.txt', 'C:/documentos/pruebas')
    .then(function(realPath){
        console.log(realPath) // resultado: C:/documentos/pruebas/prueba1.txt
    })
    .catch(function(err){
        console.error(err); // throw callback message.
    })
```

### `eliminarArchivo(rutaAlmacenamiento)`
##### Descripción
La función elimina el archivo o directorio envíado por parámetro.
##### Parámetros
- **rutaArchivo** (*string* *): ruta completa donde se encuentra el archivo que se desea eliminar.

##### Resultados
```typescript
eliminarArchivo('C:/documentos/pruebas/prueba1.txt')
    .then(function(realPath){
        console.log('Se elimino: ',realPath) // resultado: Se elimino: C:/documentos/pruebas/prueba1.txt
    })
    .catch(function(err){
        console.error(err); // throw callback message.
    })
```

### `moverDesdeInput(nombreInput, nuevoNombre)`
##### Descripción
La función mueve el archivo seleccionado desde el input y lo almacena dentro de la ruta almacenada dentro de la función.
##### Parámetros
- **nombreInput** (*string* *): nombre de la variable `useRef` que hace referencia al input dentro del componente.
- **nuevoNombre** (*string* *): nombre que tomara el archivo, puede ir con extensión `file.txt` o sin ella `file` si no trae la extensión tomará la del archivo seleccionado. 


##### Resultados
```typescript
const inputRef = useRef(null); // objeto ref

moverDesdeInput(inputRef, 'nuevoNombre.js')
    .then(function(res){
        // si el input tiene archivo seleccionado 
        console.log(res) // D:/code/almacenamiento/nuevoNombre.js
        // si el input NO tiene archivo seleccionado 
        console.log(res) // false
    })
    .catch(function(err){
        console.error(err); // throw callback message.
    })
```