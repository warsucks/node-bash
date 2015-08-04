var pwd = require("./pwd.js");
var ls = require("./ls.js");
var mkdir = require("./mkdir.js");
var cat = require("./cat.js");
var cp = require("./cp.js");
var rm = require("./rm.js");


var commandName = process.argv[2];
var parameters = process.argv.slice(3);


if(commandName==="pwd") pwd();
else if(commandName==="ls") ls();
else if(commandName==="mkdir") mkdir(parameters[0]);
else if(commandName==="cat") cat(parameters);
else if(commandName === "cp") cp(parameters[0],parameters[1]);
else if(commandName === "rm") rm(parameters[0]);
else if(commandName === "mv"){
	cp(parameters[0],parameters[1]);
	rm(parameters[0]);
}
