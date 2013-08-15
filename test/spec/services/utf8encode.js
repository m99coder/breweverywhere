'use strict';

describe('Service: utf8encode', function () {

  // load the service's module
  beforeEach(module('breweverywhereApp'));

  // instantiate service
  var utf8encode;
  beforeEach(inject(function (_utf8encode_) {
    utf8encode = _utf8encode_;
  }));

  it('should do something', function () {
    expect(!!utf8encode).toBe(true);
  });

});
