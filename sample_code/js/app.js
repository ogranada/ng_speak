(function(){
    var app = angular.module("sampleApp", []);
    app.controller("ContactsController", ['$scope', '$http', function($scope, $http){
        var self = this;
        self.title = "My Contacts List";
        self.contacts = [];
        $http.get('/contacts.json').success(function(data) {
            self.contacts = data;
        });
    }]);

    app.directive("showContact", function(){
        return {
            restrict: "E",
            templateUrl: "templates/contact.html"
        };
    });

    app.directive("topBar", function(){
        return {
            restrict: "E",
            templateUrl: "templates/topbar.html"
        };
    });


})();
