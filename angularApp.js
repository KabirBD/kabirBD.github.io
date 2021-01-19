console.log("AngularApp connected!");
// Code for Navigate Pages
{
  var app = angular.module("myApp", ["ngRoute"]);
  app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "home.html"
    })
    .when("/about", {
      templateUrl: "about.html"
    })
    .when("/projects", {
      templateUrl: "projects.html"
    })
    .when("/blogs", {
      templateUrl: "blogs.html"
    })
    .otherwise({
      redirectTo: "/"
    });


  });
}