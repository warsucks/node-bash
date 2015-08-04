var fs= require("fs");

module.exports = function(file,location){
	fs.readFile(file, 'utf-8',function(err, data)
	{
		if(!err)
		{
			fs.writeFile(location,data,function(err){
				if(err) throw err
			});
		}
		else
		{
			throw err;
		}
	});
}
