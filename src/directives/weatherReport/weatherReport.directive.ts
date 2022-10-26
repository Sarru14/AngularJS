angular.module("weatherApp").directive("weatherReport", function () {
  return {
    restrict: "E",
    templateUrl: "../src/directives/weatherReport/weatherReport.html",
    replace: true,
    scope: {
      weatherDay: "=",
    },
    controller: [
      "$scope",
      function weatherReportController($scope) {
        
        let vm = this;
        vm.weatherDay = $scope.weatherDay;
      },
    ],
    controllerAs: "$wrCtrl",
  };
});
