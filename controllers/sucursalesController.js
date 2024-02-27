// Utils
const { readDB } = require('../utils/dbManager');
const getFileUrl = require('../utils/getFileUrl');

const sucursalesController = {
	index: function (req, res, next) {
		const sucursales = readDB('concesionarias');
		const someCars = sucursales.map(suc => ({ telefono: suc.telefono, direccion: suc.direccion, sucursal: suc.sucursal, autos: suc.autos.slice(0, 4).map(car => getFileUrl(req, car.img)) }));
		res.send(someCars);
	},
	sucursal: (req, res, next) => {
		const sucursales = readDB('concesionarias');

		const sucursalesParam = req.params.sucursal;
		const sucursalesSelected = sucursales.find(suc => suc.sucursal === sucursalesParam);

		const { sucursal, direccion, telefono } = sucursalesSelected;
		const autos = sucursalesSelected.autos.map(auto => ({ ...auto, img: getFileUrl(req, auto.img) }));
		res.send({
			sucursal,
			direccion,
			telefono,
			autos,
		});
	}
}

module.exports = sucursalesController;