var angular = require('angular'),
    moduleName = 'wow.item',
    mod = angular.module(moduleName, [
        require('../core/configuration')
    ]);

module.exports = moduleName;

mod.provider('wowItem', function() {
    this.$get = ['$http', 'wowConfig', function($http, config) {

        return {
            getItem: getItem
        };

        function getUrl() {
            return config.getUrl() + '/item/';
        }

        function getData(itemId, options) {
            var url = options ? getUrl(options) : getUrl();

            url += itemId;

            return $http.jsonp(url, {
                params: {jsonp: 'JSON_CALLBACK'},
                cache: true
            })
        }

        function getItem(itemId) {
            return getData(itemId);
        }

    }]
});
