(function () {
    var controllers = angular.module("sampleControllers", []);
    controllers.controller("ContactsController", ['$scope', '$http', function($scope, $http){
        var self = this;
        self.title = "My Contacts List";
        self.contacts = [];
        $http.get('/contacts.json').success(function(data) {
            self.contacts = data;
        });
    }]);
    controllers.controller("ContactDetailsController", ['$scope', '$routeParams', function($scope, $routeParams){
        $scope.contactId = $routeParams.id;
    }]);

    controllers.directive("showContact", function(){
        return {
            restrict: "E",
            templateUrl: "templates/contact.html"
        };
    });

    controllers.directive("topBar", function(){
        return {
            restrict: "E",
            templateUrl: "templates/topbar.html"
        };
    });
})();
