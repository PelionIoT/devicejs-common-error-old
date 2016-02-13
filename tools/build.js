var fs = require('fs');
var path = require('path');

var ERRORS = require(path.join(__dirname,'../ERRORS.js'));
var OUTPUT = path.join(__dirname,"../index.json");

var log_err = function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift("ERROR:");
    log.error.apply(undefined,args);
};

var keys = ERRORS.HTTP;

var output_byStatus = {};
var output_byMessage = {};
var output_byShortCode = {};

for(var n=0;n<keys.length;n++) {
	if(ERRORS.HTTP[n].status !== undefined) {
		output_byStatus[ERRORS.HTTP[n].status] = ERRORS.HTTP[n];
	} else {
		log_err("No 'status' for Error",n,"in list");
	}
	if(ERRORS.HTTP[n].statusText !== undefined) {
		if(output_byMessage[ERRORS.HTTP[n].statusText] != undefined) {
			log_err("statusText",ERRORS.HTTP[n].statusText,"repeats for Error",n,"in list");	
		}
		output_byMessage[ERRORS.HTTP[n].statusText] = ERRORS.HTTP[n];
	} else {
		log_err("No 'statusText' for Error",n,"in list");
	}
	if(ERRORS.HTTP[n].shortCode !== undefined) {
		if(output_byShortCode[ERRORS.HTTP[n].shortCode] != undefined) {
			log_err("shortCode",ERRORS.HTTP[n].shortCode,"repeats for Error",n,"in list");	
		}
		output_byShortCode[ERRORS.HTTP[n].shortCode] = ERRORS.HTTP[n];
	} else {
		log_err("No 'shortCode' for Error",n,"in list");
	}

}


delete ERRORS.HTTP;
ERRORS.HTTP = {
	byStatus: output_byStatus,
	byStatusText: output_byMessage,
	shortCode: output_byShortCode
};

var s = JSON.stringify(ERRORS);

fs.writeFile(OUTPUT,s);
console.log("OK - wrote",OUTPUT);