var fs = require("fs");

module.exports = function(file){
	fs.unlink(__dirname+"/"+file,function(err){
		if(err) throw err;
	});
};
