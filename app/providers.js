/*globals angular: true */
angular.module('blogApp.providers', [])
    .provider('Config', function () {

        this.config = {};

        this.$get = function ($http) {
            var config = this.config;
            return {
                getConfig: function (cb) {
                    $http({method: 'GET', url: 'config.json'})
                        .success(function (res) {
                            config = res;
                            cb(config);
                        });
                }
            };
        };
    })
    .provider('Post', function () {
    this.$get = function ($http) {
        var posts = this.posts;

        var getPosts = function(cb) {
            if(posts === undefined) {
                $http({method: 'GET', url: 'posts.json'})
                    .success(function (res) {
                        cb(res);
                        posts = res;
                    });
            } else {
                cb(posts);
            }
        }

        return {
            index: function (cb) {
                getPosts(cb);
            }
        }

    }
    });