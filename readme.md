# funciones-fsextra

### Requerimientos

Requiere la instalación previa de `fs-extra` y `path`.

### `crearArchivo(nombreArchivo, contenidoArchivo, rutaAlmacenamiento)`

##### Descripción
La función crea un archivo de cualquier tipo con el contenido que sea requerido.

##### Parámetros
- **nombreArchivo** (*string* *): nombre del archivo con el tipo de extensión (ej: file.txt).
- **contenidoArchivo** (*string* *): contenido que llevará el archivo.
- **rutaAlmacenamiento** (*string* *): ruta completa del `directorio` donde se almacenará el archivo.

##### Resultados
```javascript
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
```javascript
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
```javascript
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
```javascript
eliminarArchivo('C:/documentos/pruebas/prueba1.txt')
    .then(function(realPath){
        console.log('Se elimino: ',realPath) // resultado: Se elimino: C:/documentos/pruebas/prueba1.txt
    })
    .catch(function(err){
        console.error(err); // throw callback message.
    })
```