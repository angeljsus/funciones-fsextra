const rootPath = 'C:\\code\\test'
let content = '<!--Test-->\n<div>\n\t<p>Este es el texto del archivo</p>\n</div>\n';
let nombreFile = 'archivo.html';

crearArchivo(nombreFile, content, rootPath)
	.then(function(realPath){
		console.log('1: ', realPath);
		const newName = 'archivoPatito.html';
		return renombrarArchivo(rootPath, newName);
	})
	.then(function(realPath){
		console.log('2: ', realPath);
		const destino = `${rootPath}\\patoFiles\\`; 
		return moverArchivo(realPath, destino)
	})
	.then(function(realPath){
		console.log('3: ', realPath);
		return crearArchivo('deleteme.txt', 'Eliminame!', rootPath);
	})
	.then(function(realPath){
		console.log('4: ', realPath);
		return eliminarArchivo(realPath);
	})
	.then(function(realPath){
		console.log('5: Se elimino -> ', realPath);
		console.log('..END!!');
	})
