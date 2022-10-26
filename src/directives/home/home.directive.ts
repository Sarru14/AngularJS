angular.module("weatherApp").directive("home", function () {
  return {
    restrict: "E",
    templateUrl: "../src/directives/home/home.html",
    replace: true,
    scope: {},
    controller: [
      "$scope",
      "cityService",
      function homeController($scope, cityService) {
        
        let vm = this;
        vm.city = cityService.city;

        $scope.$watch("$ctrl.city", function () {
          cityService.city = vm.city;
        });        
      },
    ],
    controllerAs: "$ctrl",
  };
});