angular.module('app').service('mainService', function ($http) {

  const baseUrl = 'http://localhost:3000/'

  this.newUser = function (newUserObj) {
    console.log(newUserObj);
    return $http({
      method: 'POST',
      url: baseUrl + 'newuser',
      data: {
        newUserObj
      }
    }).then(function (response) {
      return response;
    });
  };

  this.getProducts = function () {
    return $http.get(baseUrl + 'products').then(response => response.data);
  };

  this.getProductById = function (id) {
    return $http({
      method: "GET",
      url: baseUrl + 'product/' + id
    }).then(res => res.data);
  };

});