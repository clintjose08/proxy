const async = require('async');
const reverse = require('./rev');
const writeNameId = require('./writeNameId');
const Docker = require('dockerode');
const docker = new Docker({socketPath: '/var/run/docker.sock'});
const readFile=require('./readRedis');
const proxy=require('./proxySetting');
const domainName='tasker';
const stackName='cloud';
const serviceName='dockercloud';


async.waterfall([
	proxy.bind(null,stackName, serviceName),
	writeNameId.bind(null,domainName),
	readFile.bind(null),
	reverse.bind(null)
	],(err,results)=>{
	if(err){console.log('Failed',err);return;}
	console.log('Sucess');
});
