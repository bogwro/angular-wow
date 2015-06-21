var angular = require('angular'),
    moduleName = 'wow';

angular.module(moduleName, [
    require('./guild'),
    require('./item')
]);

module.exports = moduleName;