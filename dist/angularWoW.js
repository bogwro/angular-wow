/******/ (function(modules) { // webpackBootstrap
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

	var mod = angular.module('wow', [
	    __webpack_require__(1)
	]);

	module.exports = mod;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ }
/******/ ]);