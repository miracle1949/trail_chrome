var trailExtension = angular.module('trail-extension',['ngResource']);

trailExtension.controller('popupController', ['$scope', '$http', function($scope, $http) {
	$scope.loggedin = true;
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
        $http.post('/someurl', {'type' : "url", 'data' : $scope.url, 'trailid' : id}).
        success(function(data, status, headers, config) {
            //yay
        }).
        error (function(data, status, headers, config) {
            //uhoh
        });
    }
}]);