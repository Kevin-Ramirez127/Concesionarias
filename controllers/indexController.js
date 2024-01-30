// Utils
const { readDB } = require('../utils/dbManager');

const indexController = {
	index: function (req, res, next) {

		const sucursales = readDB('concesionarias');

		const sucursalesNames = sucursales.map(dealer => dealer.sucursal)

		res.render('index', { title: 'Home', sucursalesNames });
	}
}

module.exports = indexController;