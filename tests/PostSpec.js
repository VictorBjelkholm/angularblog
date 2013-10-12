
// describe('reading the frontpage with posts', function () {
//     it('will have a list of posts', function () {
//         expect(true).toBe(true);
//     });
// });

// describe('service', function() {
//   beforeEach(module('myApp.services'));


//   describe('version', function() {
//     // it('should return current version', inject(function(version) {
//     //   expect(version).toEqual('0.1');
//     // }));
//   });
// });
describe('ConfigProvider', function () {
    var $httpBackend;

    var postsJson = [{
        "date": "2013-10-12",
        "title": "Welcome to my blog",
        "url": "posts/2013-10-12-Welcome-to-my-blog"
    }];

    beforeEach(module('blogApp.providers.config'));

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        // backend definition common for all tests
        $httpBackend.when('GET', '/posts.json').respond(postsJson);

    }))

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('version number', function () {
        it('should return version number', inject(function ($httpBackend, Config) {
            Config.getConfig(function (res) {
                expect(res.date).toBe(postsJson.date);
                expect(res.title).toBe(postsJson.title);
                expect(res.url).toBe(postsJson.url);
            });
        }));
    })
})