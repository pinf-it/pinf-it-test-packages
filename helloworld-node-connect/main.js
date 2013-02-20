
const PATH = require("path");
const FS = require("fs");


exports.connect = function(req, res, next) {
	var version = JSON.parse(FS.readFileSync(PATH.join(__dirname, "../package.json"))).version;
    res.end("hello world from " + version);
}


if (require.main === module) {
	exports.connect(null, {
		end: function(msg) {
			console.log(msg);
		}
	}, null);
}
