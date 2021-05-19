/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "jl6Q");
/******/ })
/************************************************************************/
/******/ ({

/***/ "jl6Q":
/***/ (function(module, exports) {

if (typeof importScripts === 'function') {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
  /* global workbox */

  if (workbox) {
    console.log('Workbox is loaded');
    /* injection point for manifest files.  */

    workbox.precaching.precacheAndRoute([{'revision':'9426438a7b101c7d07a8599ad51554e1','url':'_next/static/bQvqaIEoeFhYIcUk6rfUZ/_buildManifest.js'},{'revision':'abee47769bf307639ace4945f9cfd4ff','url':'_next/static/bQvqaIEoeFhYIcUk6rfUZ/_ssgManifest.js'},{'revision':'27bcb8a5f49f1f60b752c67b76495d57','url':'_next/static/chunks/323dc5598cf98e69445b8ed02d627934201a1c6d.012393a2d626f28f2a4d.js'},{'revision':'dd88a20ba89425769cb0e44593c27f08','url':'_next/static/chunks/commons.5a5d73432986ddbb9768.js'},{'revision':'aae600ee9c35d0312669207e05fd8963','url':'_next/static/chunks/framework.4b81eedf2fcdb09bf521.js'},{'revision':'9af5595f687cbc3bc5db1f35ed555fcc','url':'_next/static/chunks/main-075f6dcfaac897cadf5f.js'},{'revision':'3c4794d5226f29cf29f704500b4efd63','url':'_next/static/chunks/pages/_app-760dde09230d17deba31.js'},{'revision':'57f8ab0f7b90473d5deb7fd6f7d15880','url':'_next/static/chunks/pages/_error-7ac75110eb47b0624864.js'},{'revision':'01051ca168905301e9270c7a4efb01b2','url':'_next/static/chunks/pages/index-b1e48e950bf9959ecc30.js'},{'revision':'9d210be6295047c0a434fa1bc2ed743a','url':'_next/static/chunks/pages/movie/[id]-a7364bd0943878d93992.js'},{'revision':'dca7b5a36110a2f058a4f5afa34f0645','url':'_next/static/chunks/polyfills-8f31809deb7932dd0187.js'},{'revision':'8c19f623e8389f11131a054a7e17ff95','url':'_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js'}]); // control the uncontrolled client side

    workbox.core.clientsClaim(); // transit the status from waiting to activate

    workbox.core.skipWaiting();
    workbox.precaching.cleanupOutdatedCaches();
    /* custom cache rules */
    //For images

    workbox.routing.registerRoute(new RegExp('\.(?:png|gif|jpg|jpeg|webp|svg)$'), new workbox.strategies.CacheFirst({
      cacheName: 'image-caches',
      plugins: [new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      }), new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 12 * 60 * 60
      })]
    }), 'GET'); //For JS/CSS

    /*
    Resources are requested from both the cache and the network in parallel. 
    The strategy will respond with the cached version if available, otherwise wait for the network response. 
    The cache is updated with the network response with each successful request
    */

    workbox.routing.registerRoute(new RegExp('\.(?:js|css)$'), new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'js-css-caches',
      plugins: [new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      }), new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 12 * 60 * 60
      })]
    })); //For HTML

    workbox.routing.registerRoute(new RegExp('/'), new workbox.strategies.NetworkFirst({
      cacheName: 'html-caches',
      plugins: [new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      }), new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 12 * 60 * 60
      })]
    }), 'GET'); //Other resources

    workbox.routing.registerRoute(new RegExp('/_next/static/'), new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-caches'
    }));
  } else {// console.log('Workbox could not be loaded. No Offline support');
  }
}

/***/ })

/******/ });