var app = angular.module('app');

app.controller('homeCtrl', ['$scope', homeController]);

function homeController($scope){
	$scope.test = 'hi';
}