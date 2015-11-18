var app = angular.module('app');

app.controller('adminCtrl', ['$scope', '$state', function($scope, $state){
	
	
	$scope.changeToHome = function(){
		$state.go('home');
	}
}])