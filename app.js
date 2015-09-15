var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get("http://api.reddit.com").success(function(response) {
    $scope.posts = response.data.children.map(function(post){
      return new Post(post.data);
    });
  console.log($scope.posts);
  })



}]);