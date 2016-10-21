var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'detailsController'
    })
        .when('/jen', {
        templateUrl: 'partials/jen.html',
        controller: 'chargesController'

    })
        .when('/amy', {
        templateUrl: 'partials/amy.html',
        controller: 'earningsController'
    })
        .when('/services', {
        templateUrl: 'partials/services.html',
        controller: 'earningsController'
    })
        .when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'contactController'
    })
        .otherwise({
        redirectTo: '/home'
    });

}]);

app.controller('navCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    $scope.classActive = function (viewLocation) {
        if ($scope.isActive(viewLocation)) {
            return 'active';
        } else {
            return 'inactive';
        }
    };
});

app.controller('contactController', function ($scope, $http) {

    $scope.submitForm = function() {

        $http({

            url: "send_form_email.php",
            data: $scope.form,
            method: 'POST',

        }).success(function(data){

            console.log("OK", data)

        }).error(function(err){"ERR", console.log(err)})
    };

});
