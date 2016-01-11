'use strict';

describe('inmarApp.contacts module', function() {

  beforeEach(module('inmarApp.contacts'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('ContactAddCtrl', function () {
    it('should return contact true', inject(function ($controller) {
      var $scope = {};

      $controller('ContactAddCtrl', { $scope: $scope });

      var contact = {
        type: "a type",
        name: "John",
        title: "Manager",
        phone: "5555555555",
        ext: "210",
        fax: "5555555555",
        email: "john@email.com"
      };

      $scope.addContact(contact);
      expect($scope.contactSet).toBe(true);
    }));
  });

});