var app = angular.module('app');

app.controller('homeCtrl', ['$scope', 'mainService', '$state', homeController]);

function homeController($scope, mainService, $state){
	$scope.test = 'hi';
	
	
	$scope.getProducts = function(){
		mainService.getProducts()
			.then(function(response){
				$scope.products = response.data;
				console.log($scope.products);
			})
	}
	$scope.getProducts();
	
	$scope.changeToAdmin = function(){
		$state.go('admin');
	}
	
}