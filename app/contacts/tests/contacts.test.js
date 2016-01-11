'use strict';

describe('inmarApp.contacts module', function() {

    beforeEach(module('inmarApp.contacts'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('ContactsCtrl', function () {
        it('should return contacts to be removed', inject(function ($controller) {
            var $scope = {};

            $controller('ContactsCtrl', { $scope: $scope });

            $scope.contacts = [
                {
                    type: "b type",
                    name: "Doug",
                    title: "Admin",
                    phone: "5555555555",
                    ext: "110",
                    fax: "5555555555",
                    email: "doug@email.com",
                    selected: true
                }
            ];

            expect($scope.contactsRemove()).toBe(1);
        }));
    });

    describe('filter', function() {

        var $filter;

        beforeEach(inject(function(_$filter_){
            $filter = _$filter_;
        }));

        it('returns 0 when given null', function() {

            var contacts = [
                {
                    type: "a type",
                    name: "John",
                    title: "Manager",
                    phone: "5555555555",
                    ext: "210",
                    fax: "5555555555",
                    email: "john@email.com"
                }
            ];

            var selector = $filter("filter")( contacts , {selected:true} );
            expect(selector.length).toEqual(0);
        });

    });

});
