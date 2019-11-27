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
		let html = readHTML('contacto');
		res.send(html);
	},
	restaurante: (req, res) => {
		let html = readHTML('restaurante26Nov');
		res.send(html);
	}
};

module.exports = controller
