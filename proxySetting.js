var reverse = require('./rev');
var writeNameId = require('./writeNameId');
const Docker = require('dockerode');
const docker = new Docker({socketPath: '/var/run/docker.sock'});

var proxy= function(stackName, serviceName, callback) { 
		let serviceNameToExpose = stackName + '_' + serviceName;
 	 var service = docker.getService(serviceNameToExpose);
	 service.inspect(function (err, data) {
	 	if(err){console.error("fetching port pailed-",err);return;}
	 	else{ 
	 		console.log(data.Endpoint.Ports[0].PublishedPort);

	 // port= JSON.stringify(data.Endpoint.Ports[0].PublishedPort);
	 // publishingIP='http://127.0.0.1:'+port;
	 // dName=domainName;
	 // console.log("pub ip"+publishingIP);
	 // console.log("passing dName",+dname);
	}
	});
	 //console.log("passed dName",+dname);
	 // console.log("publishd ip",publishingIP);
	 // callback(null, publishingIP);

	//reverse(domainName, 'http://127.0.0.1:' +port); 

//reverse('tumtum', 'http://127.0.0.1:30001');
}
module.exports=proxy;