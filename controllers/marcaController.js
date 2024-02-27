// Utils
const { readDB } = require('../utils/dbManager');
const justCars = require('../utils/justCars');
const getFileUrl = require('../utils/getFileUrl');

const marcaController = {
	index: function (req, res, next) {
		const data = readDB('concesionarias');
		const cars = justCars()

		const marcas = data.map(suc => suc.autos.map(auto => auto.marca)) // Traemos todas las marcas de los autos de las sucursales
			.flat(1)
			.filter((obj, index, arr) => arr.findIndex((item) => item === obj) === index) // Filtramos por marcas únicas
			.map(marca => {
				const marcaInfo = cars.find(car=>car.marca === marca)
				return {
					marca: marcaInfo.marca,
					cover: getFileUrl(req, marcaInfo.img),
				}
			});

		res.send(marcas);
	}
}

module.exports = marcaController;