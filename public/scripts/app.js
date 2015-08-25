var app = angular.module('aliciaChen', ['ngRoute', 'smoothScroll', 'ui.materialize']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'scripts/views/homeTmpl.html',
		controller: 'homeCtrl'
	})

	.otherwise({
		redirectTo: '/'
	})



})