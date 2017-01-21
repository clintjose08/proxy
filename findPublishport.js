var Docker = require('dockerode');
var docker = new Docker({socketPath: '/var/run/docker.sock'});
var rev= require('./forTestingThis');

var service = docker.getService('4ucl6674ms8v');
 service.inspect(function (err, data) {
 var port= JSON.stringify(data.Endpoint.Ports[0].PublishedPort);
 console.log(port);
 rev
});
