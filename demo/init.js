angular.module('wowTest', ['wow']).controller('wowCtrl', ['$scope', 'wowResource', function($scope, wowResource) {
    wowResource.members().success(function(data) {
        $scope.guild = data;
    });
}]);