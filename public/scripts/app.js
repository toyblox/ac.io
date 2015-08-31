var app = angular.module('aliciaChen', ['ngRoute', 'smoothScroll', 'ui.materialize']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'scripts/views/homeTmpl.html',
		controller: 'homeCtrl'
	})

	.when('/coop', {
		templateUrl: 'scripts/views/coopTmpl.html',
		controller:'homeCtrl'
	})

	.when('/gmShop', {
		templateUrl: 'scripts/views/gmsTmpl.html',
		controller: 'homeCtrl'
	})

	.when('/cowShare', {
		templateUrl: 'scripts/views/gmsTmpl.html',
		controller: 'homeCtrl'
	})

	.when('/resume', {
		templateUrl: 'scripts/views/resume.html',
		controller: 'homeCtrl'
	})

	.otherwise({
		redirectTo: '/'
	})


});

app.run(function ($rootScope, $window) {
 $rootScope.$on("$routeChangeSuccess", function(event){
    $window.scrollTo(0,0);
	});
});