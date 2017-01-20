var bluebird = require('redbird')({
    port: 80
  });

var reverse = function(domainName, imageName) {
  require('redbird')
  .docker(bluebird)
  .register(domainName, imageName);
};

module.exports = reverse;
