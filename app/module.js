/*globals angular: true */
angular.module('blogApp', ['ngRoute', 'blogApp.controllers', 'blogApp.providers'])
    .config(function ($routeProvider) {
        // var config = ConfigProvider.getConfig();
        // console.log(config);
        $routeProvider.when('/posts/:title', {
            templateUrl: 'blank.html',
            controller: 'PostsController'
        });
        // $routeProvider.when('/posts/:filename', {
        //     templateUrl: 'views/postsd.html',
        //     controller: 'PostCtrl'
        // });
        // $routeProvider.otherwise({
        //     templateUrl: 'views/posts.html',
        //     controller: 'IndexCtrl'
        // });
    })
    .run(function ($route, Config) {
        // var config = {};
        // Config.getConfig(function (res) {
        //     config = res;
        //     $route.routes['null'].templateUrl
        //     = 'themes/' + config.theme + '/views/posts.html';

        //     $route.routes['/posts/:filename'].templateUrl
        //     = 'themes/' + config.theme + '/views/post.html';
        // });
    });