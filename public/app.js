angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("login", {
      url: "/",
      templateUrl: "./views/login.html",
      controller: 'loginCtrl'
    })
    .state("products", {
      url: "/products",
      templateUrl: "./views/products.html",
      controller: 'productsCtrl'
    })
    .state("details", {
      url: "/details/:id",
      controller: 'detailCtrl',
      templateUrl: "./views/productDetails.html"
    });

})