!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("angular")):"function"==typeof define&&define.amd?define(["angular"],e):"object"==typeof exports?exports.angularWoW=e(require("angular")):n.angularWoW=e(n.angular)}(this,function(n){return function(n){function e(t){if(o[t])return o[t].exports;var r=o[t]={exports:{},id:t,loaded:!1};return n[t].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=n,e.c=o,e.p="",e(0)}([function(n,e,o){var t=o(1),r="wow";t.module(r,[o(3),o(4)]),n.exports=r},function(e,o){e.exports=n},function(n,e,o){var t=o(1),r="wow.core",i=t.module(r,[]);i.provider("wowConfig",function(){function n(){return e.protocol+"//"+e.region+".battle.net/api/wow"}var e={protocol:"http:",region:"eu",realm:"burning-legion",guild:"cold%20logic",item:1200};this.configure=function(n){t.extend(e,n)},this.$get=function(){return{options:e,getUrl:n}}}),n.exports=r},function(n,e,o){var t=o(1),r="wow.guild",i=t.module(r,[o(2)]);n.exports=r,i.provider("wowGuild",function(){this.$get=["$http","wowConfig",function(n,e){function o(n){return n=n?n:c,e.getUrl()+"/guild/"+n.realm+"/"+n.guild}function r(e,r){var i=r?o(r):o();return e=e?e:{},t.extend(e,{jsonp:"JSON_CALLBACK"}),n.jsonp(i,{params:e,cache:!0})}function i(){return r({fields:"members"})}function u(){return r({fields:"news"})}var c=e.options;return{members:i,news:u}}]})},function(n,e,o){var t=o(1),r="wow.item",i=t.module(r,[o(2)]);n.exports=r,i.provider("wowItem",function(){this.$get=["$http","wowConfig",function(n,e){function o(){return e.getUrl()+"/item/"}function t(e,t){var r=t?o(t):o();return r+=e,n.jsonp(r,{params:{jsonp:"JSON_CALLBACK"},cache:!0})}function r(n){return t(n)}return{getItem:r}}]})}])});