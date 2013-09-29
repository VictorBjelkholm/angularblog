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

        // this.getConfig = function ($http) {
            
        // };
    });