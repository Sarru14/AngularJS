angular.module('weatherApp').directive('weatherReport', function () {
  return {
    restrict: 'E',
    template: `<div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">{{ $wrCtrl.weatherDay.test1 }}</h3>
                </div>
                <div class="panel-body">
                    Daytime temperature: {{ $wrCtrl.busy }}
                </div>
              </div>`,
    replace: true,
    scope: {
    },
    bindToController: {
      weatherDay: '=',
    },
    controller: [
      '$scope',
      function weatherReportController($scope) {
        //@ts-ignore
        let vm = this;
        vm.weatherDay = $scope.weatherDay;

        vm.items = null;

        vm.search = '';
        vm.active = 'active';
        vm.pageSize = 25;
        vm.getContracts = getContracts;

        document.title = 'Opus - Contracts';

        activate();

        function activate() {
          vm.busy = true;
        }

        function getContracts() {
          vm.busy = true;

        }
      },
    ],
    controllerAs: '$wrCtrl',
  };
});
