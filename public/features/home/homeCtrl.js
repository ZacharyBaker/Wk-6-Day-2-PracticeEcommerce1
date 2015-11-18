var app = angular.module('app');

app.controller('homeCtrl', ['$scope', 'homeService', '$state', homeController]);

function homeController($scope, homeService, $state){
	$scope.test = 'hi';
	
	
	$scope.getProducts = function(){
		homeService.getProducts()
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