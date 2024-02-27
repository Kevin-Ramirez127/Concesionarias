// Utils
const getFileUrl = require('../utils/getFileUrl');
const { readDB } = require('../utils/dbManager');

const indexController = {
	index: function (req, res, next) {
		const sucursales = readDB('concesionarias');
		const sucursalData = sucursales.map(dealer => ({
			name: dealer.sucursal,
			cover: getFileUrl(req, dealer.autos[0].img)
		}));

		res.send(sucursalData);
	}
}

module.exports = indexController;