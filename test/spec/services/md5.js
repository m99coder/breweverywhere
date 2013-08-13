'use strict';

describe('Service: md5', function () {

  // load the service's module
  beforeEach(module('breweverywhereApp'));

  // instantiate service
  var md5;
  beforeEach(inject(function (_md5_) {
    md5 = _md5_;
  }));

  it('should do something', function () {
    expect(!!md5).toBe(true);
  });

});
