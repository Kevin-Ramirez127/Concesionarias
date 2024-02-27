function getFileUrl(req,file='') {
		const port = process.env.PORT;
		const path = `http://${req.host}:${port}/files${file}`;
		return path;
}

module.exports = getFileUrl;