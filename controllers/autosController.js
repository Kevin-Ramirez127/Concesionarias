// Utils
const getFileUrl = require('../utils/getFileUrl');
const justCars = require('../utils/justCars');

const autoController = {
	index: function (req, res, next) {
		const autos = justCars().map(car=>({...car, img: getFileUrl(req, car.img)}));
		res.send({marca: undefined, autos});
	},
	marca: (req, res, next) => {
		const { marca } = req.params;
		const cars = justCars();

		const autos = cars.filter(auto => marca === auto.marca).map(car=>({...car, img: getFileUrl(req, car.img)}));

		res.send({
			marca,
			autos
		});
	},
	dato: (req, res, next) => {
		const { marca, dato } = req.params;
		const cars = justCars();

		const autos = cars.filter(auto =>
			(auto.marca === marca) && // Filtramos por la marca seleccionada
			(auto.anio === parseInt(dato) || auto.color === dato) // Luego filtramos por el dato (año/color) ingresado
		).map(car=>({...car, img: getFileUrl(req, car.img)}));

		res.send({ marca, autos });
	}
}

module.exports = autoController;