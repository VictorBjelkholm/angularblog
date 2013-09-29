angular.module('blogApp.controllers', [])
    .controller('IndexCtrl', function ($scope, $http, $location, $document) {
        $scope.config = "bajs";
        $http({method: 'GET', url: 'config.json'})
            .success(function (res) {
                console.log($scope.config);
                console.log(res);
                $scope.config = res;

                var $ = document;
                var cssId = 'myCss';
                if (!$.getElementById(cssId)) {
                    var head = $.getElementsByTagName('head')[0];
                    var link = $.createElement('link');
                    link.id = cssId;
                    link.rel = 'stylesheet';
                    link.type = 'text/css';
                    link.href = "/themes/"+$scope.config.theme+"/css/style.css";
                    link.media = 'all';
                    head.appendChild(link);
                }
                console.log($scope.config);
            });
        $http({method: 'GET', url: 'posts.json'})
            .success(function (res) {
                $scope.posts = res;
            });

        $scope.path = function (url) {
            $location.path(url);
        };
    })
    .controller('PostCtrl', function ($scope, $http, $routeParams) {
        $scope.filename = 'posts/' + $routeParams.filename;
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