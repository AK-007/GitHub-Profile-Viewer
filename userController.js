(function() {
  var app = angular.module("GithubProfile");

  var UserController = function($scope, githubService, $routeParams) {
    var OnSearchSuccess = function(data) {
      $scope.user = data;
      githubService.getRepo($scope.user).then(RepoSearch, OnError);
    };
    var RepoSearch = function(data) {
      $scope.repos = data;
    };
    var OnError = function(reason) {
      $scope.error = "Username not found";
    };
    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    githubService.getUser($scope.username).then(OnSearchSuccess, OnError);
  };

  app.controller("UserController", UserController);
})();