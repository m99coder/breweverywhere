'use strict';

describe('Filter: localization', function () {

  // load the filter's module
  beforeEach(module('breweverywhereApp'));

  // initialize a new instance of the filter before each test
  var localization;
  beforeEach(inject(function ($filter) {
    localization = $filter('localization');
  }));

  it('should return the input prefixed with "localization filter:"', function () {
    var text = 'angularjs';
    expect(localization(text)).toBe('localization filter: ' + text);
  });

});
