'use strict';

angular.module('inmarApp.contacts', [
  'ngRoute',
  'LocalStorageModule'
])

.config([
  '$routeProvider',
  function($routeProvider) {

    $routeProvider
      .when('/contacts', {
        templateUrl: 'app/contacts/views/contacts.view.html',
        controller: 'ContactsCtrl'
      })
      .when('/contacts/add', {
        templateUrl: 'app/contacts/views/contactAdd.view.html',
        controller: 'ContactAddCtrl'
      });

}]);

