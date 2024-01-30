// Utils
const { readDB } = require('../utils/dbManager');
const justCars = require('../utils/justCars');

const marcaController = {
	index: function (req, res, next) {
		const data = readDB('concesionarias');

		const marcas = data.map(suc => suc.autos.map(auto => auto.marca)) // Traemos todas las marcas de los autos de las sucursales
			.flat(1)
			.filter((obj, index, arr) => arr.findIndex((item) => item === obj) === index) // Filtramos por marcas únicas

		res.render('marcas', {
			title: 'Marcas',
			marcas,
		});
	},
	marca: (req, res, next) => {
		const { marca } = req.params;
		const cars = justCars();

		const autos = cars.filter(auto => marca === auto.marca);

		if (autos.length > 0) {
			res.render('marca', { title: marca, marca, autos });
		} else {
			res.render('not-found');
		}

	}
}

module.exports = marcaController;