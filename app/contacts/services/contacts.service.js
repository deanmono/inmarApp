'use strict';

angular.module('inmarApp.contacts').service('ContactsService', [
    'localStorageService',
    function(localStorageService) {

        this.contactSet = function (contact) {

            // check to see if contacts list is hydrated. If not, create the array.
            if (localStorageService.get('contacts') == null) {
                this.contacts = [];
            } else {
                this.contacts = localStorageService.get('contacts');
            }

            this.contacts.push(contact);

            return localStorageService.set('contacts', this.contacts);
        }

        this.contactsSet = function (contacts) {
            return localStorageService.set('contacts', contacts);
        }

        this.contactsGet = function () {
            return localStorageService.get('contacts');
        }

    }
]);
