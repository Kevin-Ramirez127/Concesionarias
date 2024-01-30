const { readDB } = require('../utils/dbManager');

function cars() {
	const data = readDB('concesionarias');

	const cars = data.map(sucursal => sucursal.autos)
		.flat(1) // Traemos todos los autos de las sucursales
		.filter((obj, index, arr) =>
			arr.findIndex((item) => item.modelo === obj.modelo) === index); // Filtramos por modelo único para quitar duplicados
	return cars;
}

module.exports = cars;