function setCss(theme) {
    var $ = document;
    var cssId = 'myCss';
    if (!$.getElementById(cssId)) {
        var head = $.getElementsByTagName('head')[0];
        var link = $.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = "/themes/"+ theme +"/css/style.css";
        link.media = 'all';
        head.appendChild(link);
    }
}

angular.module('blogApp.controllers', [])
    .controller('PostsController', function (   
            $scope,
            $http,
            Config,
            $route,
            $routeParams,
            $compile) {
        Config.getConfig(function (res) {
            $scope.config = res;
            setCss($scope.config.theme);
            $route.current.templateUrl = 'themes/'+res.theme+'/views/posts.html';
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
    .controller('PostCtrl', function ($scope, $http, $routeParams, Config) {
        $scope.filename = 'posts/' + $routeParams.filename;
        console.log('sayhello twice');
        Config.getConfig(function (res) {
            $scope.config = res;
        });

        $http({method: 'GET', url: 'posts.json'})
            .success(function (res) {
                $scope.posts = res;
                for (var i = $scope.posts.length - 1; i >= 0; i--) {
                    if($scope.posts[i].url = $scope.filename) {
                        $scope.post = $scope.posts[i];
                    }
                };
            });
    });