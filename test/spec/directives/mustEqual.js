'use strict';

describe('Directive: mustEquals', function () {
  beforeEach(module('breweverywhereApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<must-equals></must-equals>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the mustEquals directive');
  }));
});
