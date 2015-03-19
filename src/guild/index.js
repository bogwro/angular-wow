var angular = require('angular'),
    moduleName = 'wow.guild',
    mod = angular.module(moduleName, [
        require('../core/configuration')
    ]);


mod.provider('wowResource', function() {
    this.$get = ['$http', 'wowConfig', function($http, config) {
        var options = config.options;

        return {
            members: members
        };

        function getUrl(opts) {
            opts = opts ?  opts : options;
            return config.getUrl() + '/guild/' + opts.realm + '/' + opts.guild;
        }

        function getData(params, options) {
            var url = options ? getUrl(options) : getUrl();
            params = params ? params : {};

            angular.extend(params, {jsonp: 'JSON_CALLBACK'});

            return $http.jsonp(url, {
                params: params,
                cache: true
            })
        }

        function members() {
            return getData({fields: 'members'});
        }

    }]
});

module.exports = moduleName;
