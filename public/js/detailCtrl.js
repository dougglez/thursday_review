angular.module('app').controller('detailCtrl', function($scope, mainService, $stateParams){

$scope.getProductById = function() {
  console.log(typeof $stateParams.id)
  mainService.getProductById($stateParams.id).then(response => $scope.prod = response);
}


$scope.getProductById()
})