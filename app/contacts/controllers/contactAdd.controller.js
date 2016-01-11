'use strict';

angular.module('inmarApp.contacts').controller('ContactAddCtrl', [
    '$scope',
    '$rootScope',
    'ContactsService',
    '$location',
    function($scope, $rootScope, ContactsService, $location) {

        $scope.addContact = function (contact) {

            if (contact) {

                $scope.contactSet = ContactsService.contactSet(contact);
                $location.path( "/contacts" );
            }

        }
    }
]);
