var obj;
var readFile= require('./readRedis');

var bluebird = require('redbird')({
    port: 80
  });


var reverse = function(object,callback) {
	//console.log(object.domainName);
bluebird.register(object.domainName, object.publishingIP);
console.log("domain set");
};

module.exports = reverse;
