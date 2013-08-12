'use strict';

describe('Directive: gravatar', function () {
  beforeEach(module('breweverywhereApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<gravatar></gravatar>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the gravatar directive');
  }));
});
