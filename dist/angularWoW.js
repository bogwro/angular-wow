(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["angularWoW"] = factory(require("angular"));
	else
		root["angularWoW"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1),
	    moduleName = 'wow';

	angular.module('wow', [
	    //require('./core/configuration'),
	    __webpack_require__(2)
	]);

	module.exports = moduleName;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1),
	    moduleName = 'wow.guild',
	    mod = angular.module(moduleName, [
	        __webpack_require__(3)
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


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1),
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

/***/ }
/******/ ])
});
;