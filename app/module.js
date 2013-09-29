/*globals angular: true */
angular.module('blogApp', ['ngRoute', 'blogApp.controllers', 'blogApp.providers', 'blogApp.directives', 'hljs'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'blank.html',
            controller: 'IndexController'
        });
        $routeProvider.when('/posts/:title', {
            templateUrl: 'blank.html',
            controller: 'ShowController'
        });
    });