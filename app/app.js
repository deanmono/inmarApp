'use strict';

angular.module('inmarApp', [
  'ngRoute',
  'ngAnimate',
  'LocalStorageModule',
  'inmarApp.contacts'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
