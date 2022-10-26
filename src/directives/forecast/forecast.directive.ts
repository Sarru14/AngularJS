angular.module("weatherApp").directive("forecast", function () {
  return {
    restrict: "E",
    templateUrl: "../src/directives/forecast/forecast.html",
    replace: true,
    scope: {},
    controllerAs: "$fcCtrl",
    controller: [
      "$routeParams",
      "cityService",
      function forecastController($routeParams, cityService) {
        
        let vm = this;
        vm.city = cityService.city;

        vm.days = $routeParams.days || "2";

        vm.weatherResult = [
          {
            test1: "ciao2",
            test2: "test",
          },
          {
            test1: "ciao2",
            test2: "test",
          },
        ];
      },
    ],
  };
});
