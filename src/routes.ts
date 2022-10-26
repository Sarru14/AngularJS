angular.module("weatherApp")
  .config(function ($routeProvider: any) {
    $routeProvider

      .when("/", {
        template: '<home city="city"></home>',
      })

      .when("/forecast", {
        template: "<forecast></forecast>",
      });
});
