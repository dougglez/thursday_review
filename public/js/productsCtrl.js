angular.module('app').controller('productsCtrl', function($scope, mainService){

$scope.test = 'controller is connected';
$scope.test2 = mainService.test;

})