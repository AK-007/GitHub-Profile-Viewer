(function()
{
  var app=angular.module("GithubProfile");

  var MainController=function($scope,$location)
  {
  	
  	$scope.search=function(username)
  	{
  		 $location.path("/user/"+username);
  	};
  };

  app.controller("MainController",MainController);
})();