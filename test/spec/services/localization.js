'use strict';

describe('Service: localization', function () {

  // load the service's module
  beforeEach(module('breweverywhereApp'));

  // instantiate service
  var localization;
  beforeEach(inject(function (_localization_) {
    localization = _localization_;
  }));

  it('should do something', function () {
    expect(!!localization).toBe(true);
  });

});
