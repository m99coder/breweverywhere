'use strict';

describe('Directive: localization', function () {
  beforeEach(module('breweverywhereApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<localization></localization>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the localization directive');
  }));
});
