// Esto funciona SIEMPRE que hayamos instalado la librería antes
const inquirer = require('inquirer');

// prompt() -> recibe un array de preguntas, cada pregunta será un objeto literal

// then -> recibe una función, esta función toma como parámetro las respuestas a las preguntas del método prompt()

const preguntas = [
	{
		type: 'confirm',
		message: '¿La pizza es para delivery?',
		name: 'esParaDelivery',
		default: false,
	},
	{
		type: 'input',
		message: 'Ingresá tu nombre:',
		name: 'nombreCliente',
	},
	{
		type: 'input',
		message: 'Ingresá tu número de teléfono:',
		name: 'telefonoCliente',
	},
	{
		type: 'rawlist',
		message: 'Elegí el gusto de la pizza:',
		name: 'gustoPizza',
		choices: ['Muzza', 'Napo', 'Jamón', '4 quesos'],
	},
	{
		type: 'list',
		message: 'Elegí el tamaño de la pizza',
		name: 'tamanioPizza',
		choices: ['Personal', 'Mediana', 'Grande'],
	},
	{
		type: 'list',
		message: 'Elegí el gusto de la bebida',
		name: 'gustoBebida',
		choices: ['Coca-cola', 'Pepsi', 'Manaos'],
	},
	{
		type: 'checkbox',
		message: 'Elegí el gusto de las empanadas',
		name: 'empanadas',
		choices: ['Carne', 'Pollo', 'Margarita', 'Calabresa'],
	},
];

inquirer
	.prompt(preguntas)
	.then(function (respuestas) {
		console.log(respuestas);
	});

