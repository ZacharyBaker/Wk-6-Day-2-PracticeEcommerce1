var app = angular.module('app');

app.service('homeService', function($http){
	
	this.getProducts = function(){
		return $http({
			method: 'GET',
			url: '/products'
		}).then(function(response){
			return response;
		})
	}
	
	
})