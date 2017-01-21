 var redis =require('redis');
 const redisPort = process.env.REDIS_PORT || 6379;
 const redisHost = process.env.REDIS_HOST || '172.23.238.251';
 var client=redis.createClient(redisPort, redisHost);
 var object;

 var readFile=function(callback)
 {
 	  client.on('error',function(error){
 	  	console.log("Error in Connection");
 	  });	
       
       object= client.brpop('reverseProxyWorker',0,function(err,reply){
   	  	if(err){ throw err}
   	  		console.log(JSON.parse(reply[1]));
   	  	    
   	  }); 
       console.log("It is in readFile"+object);	
      
   	  //client.lrange(value,0,0,function(err,reply){console.log(reply);});
callback(null, object);

 }
 module.exports = readFile;