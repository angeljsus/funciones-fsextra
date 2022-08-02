'use strict';

const fs =  require('fs-extra');
const path =  require('path');

function crearArchivo(nombreArchivo, contenidoArchivo, rutaAlmacenamiento){
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

function renombrarArchivo(rutaArchivo, nuevoNombre){
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

function moverArchivo(rutaArchivo, destino){
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

function eliminarArchivo(rutaArchivo){
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