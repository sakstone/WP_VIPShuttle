var app = angular.module('changeWeeklyAvailabilityApp', []);

app.controller('myCtrl', function($scope, $http) {
    $http.get("/VIPShuttle/mockup/emptyShiftWeek.json").then(function (response) {
        $scope.Shifts = response.data.Shifts;
    });

    $scope.index1 = 0;
    $scope.index2 = 0;


});