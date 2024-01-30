const fs = require('fs');

function readDB(file) {
	const data = JSON.parse(fs.readFileSync(`db/${file}.json`));
	return data;
}

function writeDB(file, data) {
	fs.writeFileSync(`db/${file}.json`, JSON.stringify(data));
	return;
}

module.exports = {
	readDB,
	writeDB,
}