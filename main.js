var trailExtension = angular.module('trail-extension',['ngResource']);

trailExtension.controller('popupController', ['$scope', '$http', function($scope, $http) {
	//TODO: Call API to determine if user is login
  $scope.loggedIn = false;
	
  $scope.trails = [
        {name: 'test'},
        {name: 'test2'},
        {name: 'test3'}
    ];

	chrome.tabs.getSelected(null, function(tab) {
		$scope.$apply(function () {
	    	$scope.url = tab.url;
	    });
	});

    $scope.saveStep = function(id) {
        // comments if time
        $http.post('/api/steps', {
          'type': "link",
          'data': $scope.url, 
          'trailId': id
        })
        .success(function(data) {
          $scope.trails = data;
        })
        .error (function(data, status, headers, config) {
            //uhoh
        });
    }

    $scope.login = function(username, password){
      //POST to /api/login
      $http.post('/api/login', {
        'username': username, 
        'password': password
      })
      .success(function(data) {
        $scope.loggedIn = true;
        $scope.userId = data.id;
      })
    }
}]);
