var fs= require("fs");
var chalk = require('chalk');

module.exports = function(parameter)
{
	fs.readdir(__dirname,function(err, files)
	{
		if(!err)
		{
			var color = parameter.substring(2,parameter.length).split('=')[1];
			files.forEach(function(element)
			{
				process.stdout.write(chalk[color](element+"\t"));
			});
			console.log("");
		}
		else throw err;


	});
}
