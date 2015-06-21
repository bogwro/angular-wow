angular.module('wowTest', ['wow']).controller('wowCtrl', ['$scope', 'wowGuild', 'wowItem', function($scope, wowGuild, wowItem) {
    wowGuild.news().success(function(data) {
        $scope.guild = data;
    });
    //wowItem.getItem(65129).success(function(data) {
    //    $scope.guild = data;
    //});
}]);