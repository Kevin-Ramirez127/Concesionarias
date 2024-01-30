// Utils
const { readDB } = require('../utils/dbManager');

const sucursalesController = {
	index: function (req, res, next) {
		const sucursales = readDB('concesionarias');
		res.render('sucursales', {
			title: 'Sucursales',
			sucursales
		});
	},
	sucursal: (req, res, next) => {
		const sucursales = readDB('concesionarias');

		const sucursalesParam = req.params.sucursal;
		const sucursalesSelected = sucursales.find(suc => suc.sucursal === sucursalesParam);

		if (sucursalesSelected) {
			const { sucursal, direccion, telefono, autos } = sucursalesSelected;
			res.render('sucursal', {
				title: sucursal,
				sucursal,
				direccion,
				telefono,
				autos,
			});
		} else {
			res.render('not-found');
		}
	}
}

module.exports = sucursalesController;