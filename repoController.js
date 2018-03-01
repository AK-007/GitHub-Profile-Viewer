(function()
{
	var app=angular.module("GithubProfile");

	var RepoController=function($scope,githubService,$routeParams)
	{
		var OnRepo=function(data)
		{
			$scope.repo=data;
		};
		var OnError=function(reason)
		{
			$scope.error=reason;
		};
		var username=$routeParams.username;
		var reponame=$routeParams.reponame;
		githubService.getRepoDetails(username,reponame).then(OnRepo,OnError);
	};
	app.controller("RepoController",RepoController);
})();