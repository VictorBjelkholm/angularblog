/*globals angular: true, document: true, $: true */
// Make a provider
function setCss(theme) {
    var cssId = 'myCss';
    if (!document.getElementById(cssId)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = "/themes/" + theme + "/css/style.css";
        link.media = 'all';
        head.appendChild(link);
    }
}

angular.module('blogApp.controllers', [])
    .controller('IndexController', function (
        $scope,
        $http,
        Config,
        $route,
        $routeParams,
        $location,
        $compile
    ) {
        Config.getConfig(function (res) {
            $scope.config = res;
            setCss($scope.config.theme);
            // Wrapper for setting the right view
            $route.current.templateUrl = 'themes/' + res.theme + '/views/posts.html';
            $http.get($route.current.templateUrl).then(function (msg) {
                $('#view').html($compile(msg.data)($scope));
            });
            $http({method: 'GET', url: 'posts.json'})
                .success(function (res) {
                    $scope.posts = res;
                });
        });
        $scope.path = function (url) {
            $location.path(url);
        };
    })
    .controller('ShowController', function ($scope,
            $http,
            $route,
            $compile,
            $routeParams,
            Config) {
        console.log('postCtrl');
        $scope.filename = 'posts/' + $routeParams.title;
        Config.getConfig(function (res) {
            $scope.config = res;
            setCss($scope.config.theme);
            $route.current.templateUrl = 'themes/' + res.theme + '/views/post.html';
            $http.get($route.current.templateUrl).then(function (msg) {
                $('#view').html($compile(msg.data)($scope));
            });
        });
    });