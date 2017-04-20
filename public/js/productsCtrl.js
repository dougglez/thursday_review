angular.module('app').controller('productsCtrl', function($scope, mainService){

$scope.products = [{name: 'bicycle', desc: 'two wheels, one is flat'},{name: 'tv', desc: 'huge 17 inch screen'},{name: 'a/c unit', desc: 'so quiet you\'ll think its not even working'},{name: 'full-stack js course', desc: '13 weeks, taught by DevMountain, its the best thing you\'ll ever do'},{name: 'tea kettle', desc: 'antique, beautiful plastic tea kettle'}];

})