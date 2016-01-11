'use strict';

angular.module('inmarApp.contacts').controller('ContactsCtrl', [
    '$scope',
    '$rootScope',
    'ContactsService',
    '$filter',
    function($scope, $rootScope, ContactsService, $filter) {

        $scope.contacts = ContactsService.contactsGet();

        $scope.contactSelected = function() {
            var selector = $filter("filter")( $scope.contacts , {selected:true} );
            return selector.length;
        }

        $scope.contactsRemove = function() {

            var removableContacts = [];

            angular.forEach($scope.contacts, function(value){
                if (value['selected'] == true) {
                    removableContacts.push(value);
                }
            });

            for (var i = 0; i < $scope.contacts.length; i++) {
                for (var j = 0; j < removableContacts.length; j++) {
                    if ($scope.contacts[i] && ($scope.contacts[i].$$hashKey === removableContacts[j].$$hashKey)) {
                        $scope.contacts.splice(i, 1);
                    }
                }
            }

            //reset contacts in browser cache
            ContactsService.contactsSet($scope.contacts);

            return removableContacts.length;
        }

    }
]);