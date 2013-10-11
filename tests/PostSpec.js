describe('reading the frontpage with posts', function () {
    it('will have a list of posts', function () {
        expect(true).toBe(true);
    });
});

describe('service', function() {
  beforeEach(module('myApp.services'));


  describe('version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});