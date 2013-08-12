'use strict';

describe('Directive: uniqueEmail', function () {
  beforeEach(module('breweverywhereApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<unique-email></unique-email>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the uniqueEmail directive');
  }));
});
