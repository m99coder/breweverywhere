'use strict';

describe('Directive: uniqueUsername', function () {
  beforeEach(module('breweverywhereApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<unique-username></unique-username>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the uniqueUsername directive');
  }));
});
