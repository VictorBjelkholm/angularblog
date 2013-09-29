/*globals angular: true */
angular.module('blogApp', ['ngRoute', 'blogApp.controllers'])
    .config(function ($routeProvider) {
        $routeProvider.when('/posts/:filename', {
            templateUrl: 'views/post.html',
            controller: 'PostCtrl'
        });
        $routeProvider.otherwise({
            templateUrl: 'views/posts.html',
            controller: 'IndexCtrl'
        });
    });