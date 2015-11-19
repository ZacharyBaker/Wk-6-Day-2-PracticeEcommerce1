var app = angular.module('app');

app.service('mainService', function ($http) {

	this.getProducts = function () {
		return $http({
			method: 'GET',
			url: '/products'
		}).then(function (response) {
			return response;
		})
	}

	this.addItem = function (item) {
		return $http({
			method: 'POST',
			url: '/products',
			data: item
		})
	}

	this.deleteById = function (id) {//still not working
		return $http({
			method: 'DELETE',
			url: '/products/' + id
		})
	}

	this.updateItem = function (item) {
		return $http({
			method: 'PUT',
			url: '/products/' + item.id,
			data: item
		})
	}


	
})