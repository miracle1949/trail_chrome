var trailExtension = angular.module('trail-extension',['ngResource']);

trailExtension.controller('popupController', ['$scope', '$http', function($scope, $http) {
	//TODO: Call API to determine if user is login
  $scope.loggedIn = false;
	
  $scope.trails = [
        {name: 'test', author: 'thekevlau'},
        {name: 'test2', author: 'fungguy'},
        {name: 'test3', author: 'a-tran'}
    ];

	chrome.tabs.getSelected(null, function(tab) {
		$scope.$apply(function () {
	    	$scope.url = tab.url;
	    });
	});

    $scope.saveStep = function(id) {
        // comments if time
        $http.post('/someurl', {'type' : "url", 'data' : $scope.url, 'trailid' : id}).
        success(function(data, status, headers, config) {
            //yay
        }).
        error (function(data, status, headers, config) {
            //uhoh
        });
    }

    $scope.login = function(username, password){
      //POST to /api/login
      console.log("log in");
    }
}]);
