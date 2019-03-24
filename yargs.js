const nombre = {
	demand: true,
	alias:'n'
}

const matematicas = {
	demand: true,
	alias:'m'
}

const ingles = {
	demand: true,
	alias:'i'
}

const programacion = {
	demand: true,
	alias:'p'
}

const creacion = {
	nombre,
	matematicas,
	ingles,
	programacion
}

const muestraest = {
	nombre
}

const actualiza = {
	nombre,
	asignatura: {
		demand:true,
		alias: 'a'
	},
	calificacion: {
		demand: true,
		alias:'c'
	}
}

const elimina = {
	nombre
}

const promest = {
	nombre
}


const argv = require ('yargs')
             .command('crear', 'Crear un estudiante en mi BD', creacion)	
             .command('mostrar', 'Muestra los estudiantes y sus notas')	
             .command('mostrarest', 'Muestra la informacion de un estudiante',muestraest)	
             .command('actualizar', 'Actualiza la informacion de un curso',actualiza)	
             .command('eliminar', 'Elimina un estudiante de la BD',elimina)	
             .command('promest', 'Muestra el promedio de un estudiante',promest)	
			 .argv
			 
module.exports = {
	argv
};			 