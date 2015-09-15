var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get("http://api.reddit.com").success(function(response) {
    $scope.posts = response.data.children;
    console.log($scope.posts);
  })

}]);