// Utils
const justCars = require('../utils/justCars');

const autoController = {
	index: function (req, res, next) {
		const cars = justCars();
		res.render('autos', { title: 'Autos', autos: cars, message: '' });
	},
	marca: (req, res, next) => {
		const { marca } = req.params;
		const cars = justCars();

		const autos = cars.filter(auto => marca === auto.marca);

		if (autos.length > 0) {
			res.render('auto', {
				title: marca,
				marca,
				autos
			});
		} else {
			res.render('not-found');
		}
	},
	dato: (req, res, next) => {
		const { marca, dato } = req.params;
		const cars = justCars();

		const autos = cars.filter(auto =>
			(auto.marca === marca) && // Filtramos por la marca seleccionada
			(auto.anio === parseInt(dato) || auto.color === dato) // Luego filtramos por el dato (año/color) ingresado
		);

		if (autos.length > 0) {
			res.render('autos', { title: `${marca} ${dato}`, marca, autos, message: `Filtrado por ${dato}` })

		} else {
			res.render('not-found');
		}


	}
}

module.exports = autoController;