var moduleName = 'wow.core',
    mod = angular.module(moduleName);

mod.provider('wowCoreConfig', function() {
    var options = {
        region: 'eu',
        realm: 'burning-legion',
        guild: 'cold%20logic'
    };

    this.configure = function(opts) {
        angular.extend(options, opts);
    };

    this.$get = function() {
        return options;
    };

});

module.exports = moduleName;