angular.module('app').controller('loginCtrl', function($scope, mainService){

$scope.signUp = function(newUserObj) {
  console.log(newUserObj);
  mainService.newUser(newUserObj).then(function(response){
    console.log(response);
  });
};

$scope.login = function(userObj) {
  console.log(userObj);
};


});