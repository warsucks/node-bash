var fs= require("fs");

module.exports = function(fileNames)
{
	fileNames.forEach(function(element)
	{
		fs.readFile(element, 'utf-8',function(err, data)
		{
			if(!err) console.log(data);
			else throw err;
		});
	});
};
