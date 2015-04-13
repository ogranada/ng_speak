(function () {
    var controllers = angular.module("sampleControllers", []);
    controllers.controller("ContactsController", ['$scope', '$http', function($scope, $http){
        self.title = "My Contacts List";
        $http.get('/contacts.json').success(function(data) {
            $scope.contacts = data;
        });
    }]);
    controllers.controller("ContactDetailsController", ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
        var id = $routeParams.id;
        var contacts = $scope.contacts;
        for(i=0;i<contacts.length;i++){
            var obj = contacts[i];
            if(obj.id==id){
                $scope.contactId = i;
            }
        }
        $scope.goBack = function(){
            window.history.back();
        };
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
