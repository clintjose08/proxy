var redbird = require('redbird')({
	port: 80
})
require('redbird')
.docker(redbird)
.register(("tasker",'dockercloud/hello-world'),("chat", 'tutum/hello-world'));
