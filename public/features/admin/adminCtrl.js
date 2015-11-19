var app = angular.module('app');

app.controller('adminCtrl', ['$scope', '$state', 'mainService',
 function($scope, $state, mainService){
	
	
	$scope.changeToHome = function(){
		$state.go('home');
	}
	
	$scope.addItem = function(item){
		console.log(item);
		// mainService.addItem(item);
		mainService.addItem(item)
		.then(function(response){
			$scope.getProducts(); 
			$scope.itemObj = {};
		})
	}
	
	$scope.getProducts = function(){
		mainService.getProducts()
			.then(function(response){
				$scope.products = response.data;
				console.log($scope.products);
			})
	}
	$scope.getProducts();
	
	$scope.deleteById = function(id){
		mainService.deleteById(id);
		$scope.getProducts();
	}
	
	$scope.updateItem = function(itemWithRevisions){
		mainService.updateItem(itemWithRevisions);
		$scope.getProducts();
	}
	
	
	
}])