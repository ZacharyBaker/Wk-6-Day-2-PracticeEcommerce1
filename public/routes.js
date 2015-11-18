var app = angular.module('app');

app.config(['$stateProvider', '$urlRouterProvider', routing]);

function routing($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: './features/home/homeTmpl.html',
			controller: 'homeCtrl'
		})
		.state('admin', {
			url: '/admin',
			templateUrl: './features/admin/adminTmpl.html',
			controller: 'adminCtrl'
		})
	
}