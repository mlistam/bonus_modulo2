const fs = require('fs');

listaEstudiantes = [];

const crear = (estudiante) => {
	listar();
	let est = {
		nombre: estudiante.nombre,
		matematicas: estudiante.matematicas,
		ingles: estudiante.ingles,
		programacion: estudiante.programacion
	}
	let duplicado = listaEstudiantes.find(nom => nom.nombre == estudiante.nombre);
    if (!duplicado) {
		listaEstudiantes.push(est);
		console.log(listaEstudiantes);
		guardar(); 	
	}
	else {
		console.log('Ya existe otro estudiante con el mismo nombre');
	}
}

const listar = () => {
	try {
		listaEstudiantes = require('./listado.json');
    }
	catch (error) {
		listaEstudiantes = [];
	}      		
	//listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'));
}

const guardar = () => {
	let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('listado.json', datos, (err) => {
		if (err) throw (err);
		console.log('Archivo creado con exito');
	});	
	
}

const mostrar = () => {
	listar();
	console.log('Notas de los estudiantes');
	listaEstudiantes.forEach(estudiante => {
		console.log(estudiante.nombre);
		console.log('notas');
		console.log('matematicas '+estudiante.matematicas);
		console.log('ingles '+estudiante.ingles);
		console.log('programacion '+estudiante.programacion + '\n');
	});
}

const mostrarest = (nom) => {
	listar();
	let est = listaEstudiantes.find(buscar => buscar.nombre == nom);
    if (!est) {
		console.log('No existe este estudiante');
	}
	else {
		console.log(est.nombre);
		console.log('notas');
		console.log('matematicas '+est.matematicas);
		console.log('ingles '+est.ingles);
		console.log('programacion '+est.programacion + '\n');	
	}
}

const mostrarmat = () => {
	listar();
	let ganan = listaEstudiantes.filter(mat => mat.matematicas >= 3);
    if (ganan.length == 0) {
		console.log('Ningun estudiante va ganando');
	}
	else {
		ganan.forEach(estudiante => {
			console.log(estudiante.nombre);
			console.log('notas');
			console.log('matematicas '+estudiante.matematicas);
		});	
	}
}

const actualizar = (nombre, asignatura, calificacion) => {
	listar();
	let encontrado = listaEstudiantes.find(buscar => buscar.nombre == nombre);
    if (!encontrado) {
		console.log('No existe este estudiante');
	}
	else {
		encontrado[asignatura] = calificacion;
		guardar();
	}
}

const eliminar = (nom) => {
	listar();
	let nuevo = listaEstudiantes.filter(mat => mat.nombre != nom);
    if (nuevo.length == listaEstudiantes.length) {
		console.log('Ningun estudiante tiene el nombre');
	}
	else {
		listaEstudiantes = nuevo;
		guardar();
	}
}

const promest = (nom) => {
	listar();
	let est = listaEstudiantes.find(buscar => buscar.nombre == nom);
    if (!est) {
		console.log('No existe este estudiante');
	}
	else {
		console.log(est.nombre);
		console.log('Promedio:',(est.matematicas+est.ingles+est.programacion)/3);
	}
}

const prommayortres = (nom) => {
	listar();
	console.log('Estudiantes con promedio mayor a 3:');
	listaEstudiantes.forEach(estudiante => {
		let promedio = (estudiante.matematicas + estudiante.ingles + estudiante.programacion)/3;
		if (promedio > 3) {
			console.log('Nombre: '+ estudiante.nombre + ' Promedio: ' + promedio);
		}
	});
}

module.exports = {
	crear,
	mostrar,
	mostrarest,
	mostrarmat,
	actualizar,
	eliminar,
	promest,
	prommayortres
}