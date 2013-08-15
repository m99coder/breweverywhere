'use strict';

describe('Service: sha', function () {

  // load the service's module
  beforeEach(module('breweverywhereApp'));

  // instantiate service
  var sha;
  beforeEach(inject(function (_sha_) {
    sha = _sha_;
  }));

  it('should do something', function () {
    expect(!!sha).toBe(true);
  });

});
