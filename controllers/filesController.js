const path = require('path');

const sucursalesController = {
	image: (req, res, next) => {
		const { file } = req.params;

		res.sendFile(file, {
			root: path.join(__dirname, '../', 'public/images'),
			dotfiles: 'deny',
			headers: {
				'x-timestamp': Date.now(),
				'x-sent': true
			}
		});
	}
}

module.exports = sucursalesController;