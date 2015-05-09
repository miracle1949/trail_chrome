var trailExtension = angular.module('trail-extension',['ngResource']);

trailExtension.controller('popupController', ['$scope', '$http', function($scope, $http) {
	$scope.loggedin = true;
	$scope.trails = [{name: 'test'}];


	chrome.tabs.getSelected(null, function(tab) {
		$scope.$apply(function () {
	    	$scope.url = tab.url;
	    });
	});
}]);