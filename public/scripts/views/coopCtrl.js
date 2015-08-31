var app = angular.module('aliciaChen');

app.controller('coopCtrl', function($scope){

	new WOW().init();

	$scope.hello = "HELLO WORLD";


})