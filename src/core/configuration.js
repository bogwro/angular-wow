var angular = require('angular'),
    moduleName = 'wow.core',
    mod = angular.module(moduleName, []);

mod.provider('wowConfig', function() {
    var options = {
        protocol: 'http:',
        region: 'eu',
        realm: 'burning-legion',
        guild: 'cold%20logic',
        item: 1200
    };

    this.configure = function(opts) {
        angular.extend(options, opts);
    };

    this.$get = function() {
        return {
            options: options,
            getUrl: getUrl
        };
    };

    function getUrl() {
        return options.protocol + '//' + options.region + '.battle.net/api/wow'
    }

});

module.exports = moduleName;