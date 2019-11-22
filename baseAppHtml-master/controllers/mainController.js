const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let htmlFile = fs.readFileSync(path.join(__dirname, `/../views/${fileName}.html`), 'utf-8');
	return htmlFile;
}

const controller = {
	root: (req, res) => {
		let html = readHTML('index');
		res.send(html);
	},
	contacto: (req, res) => {
		let htmlContacto = readHTML('contacto');
		res.send(htmlContacto);
	},
	ejercicio1: (req, res) => {
		let htmlEjercicio1 = readHTML('ejercicio1');
		res.send(htmlEjercicio1);
	}
};

module.exports = controller
