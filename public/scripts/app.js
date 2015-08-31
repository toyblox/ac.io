var app = angular.module('aliciaChen', ['ngRoute', 'smoothScroll', 'ui.materialize']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'scripts/views/homeTmpl.html',
		controller: 'homeCtrl'
	})
	
	.when('/coop', {
		templateUrl: 'scripts/views/coopTmpl.html',
		controller:'coopCtrl'
	})

	.when('/gmShop', {
		templateUrl: 'scripts/views/gmsTmpl.html',
		controller: 'gmsCtrl'
	})

	.when('/cowShare', {
		templateUrl: 'scripts/views/gmsTmpl.html',
		controller: 'cowsCtrl'
	})

	.otherwise({
		redirectTo: '/'
	})



})