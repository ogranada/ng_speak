(function(){
    var app = angular.module("sampleApp", ['ngRoute', 'sampleControllers']);
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: 'templates/contacts-list.html',
                controller: 'ContactsController'
            })
            .when("/contact/:id", {
                templateUrl: 'templates/contact-details.html',
                controller: 'ContactDetailsController'
            })
        ;
    }]);
})();
