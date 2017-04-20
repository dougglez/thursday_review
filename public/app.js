angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html"
    })
    .state("products", {
      url: "/products",
      templateUrl: "./views/products.html",
      controller: 'productsCtrl'
    })
    // .state("product", {
    //   url: "/products/:id",
    //   parent: "products",
    //   controller: detailCtrl,
    //   templateUrl: "./views/productDetails.html"
    // });

})