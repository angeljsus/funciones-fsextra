import { fs, path } from './ConstantesNode';  

export function crearArchivo(nombreArchivo, contenidoArchivo, rutaAlmacenamiento){
	const realPath = path.join(rutaAlmacenamiento, nombreArchivo);
	return new Promise(function(resolve, reject){
		fs.outputFile(realPath, contenidoArchivo)
			.then(function(){
				resolve(path.normalize(realPath))
			})
			.catch(function(err){
				reject(err)
			})
	})
}

export function renombrarArchivo(rutaArchivo, nuevoNombre){
	let realNewPath = path.join(path.dirname(rutaArchivo), nuevoNombre);
	return new Promise(function(resolve, reject){
		fs.rename(rutaArchivo, realNewPath)
			.then(function(){
				resolve(path.normalize(realNewPath))
			})
			.catch(function(err){
				reject(err)
			})
	})
}

export function moverArchivo(rutaArchivo, destino){
	let realNewPath = path.join(destino, path.basename(rutaArchivo));
	return new Promise(function(resolve, reject){
		fs.move(rutaArchivo, realNewPath, { overwrite: true })
			.then(function(){
				resolve(path.normalize(realNewPath))
			})
			.catch(function(err){
				reject(err)
			})
	})
}

export function eliminarArchivo(rutaArchivo){
	return new Promise(function(resolve, reject){
		fs.remove(rutaArchivo)
			.then(function(){
				resolve(path.normalize(rutaArchivo))
			})
			.catch(function(err){
				reject(err)
			})
	})
}

export function moverDesdeInput(nombreInput, nuevoNombre){
	// modificar ruta de almacenamiento
	const rutaAlmacenamiento = 'D:/code/almacenamiento';
 	let pathFile = nombreInput.current;
 	let realPath = '', extension = '', response = '', estado = '';

  return new Promise(function(resolve, reject){
    if (pathFile && pathFile.files[0]) {
    	estado = pathFile;
      pathFile = pathFile.files[0].path;
      extension = path.extname(pathFile);
      if (!path.extname(nuevoNombre)) {
        nuevoNombre = `${nuevoNombre}${extension}`
      }
      realPath = path.join(rutaAlmacenamiento, nuevoNombre);
      response = fs.move(pathFile, realPath, { overwrite: true })
      .then(function(){
        estado.value = '';
        return realPath;
      })
      .catch(function(err){
        reject(err)
      })
    } else {
     response = false; 
    }
    resolve(response)
  })
}