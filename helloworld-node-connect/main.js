
exports.connect = function(req, res, next) {

	console.log("RUN ROUTE FOR URL:", req.url);

	return next();
}
