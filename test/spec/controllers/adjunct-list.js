'use strict';

describe('Controller: AdjunctListCtrl', function () {

  // load the controller's module
  beforeEach(module('breweverywhereApp'));

  var AdjunctListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdjunctListCtrl = $controller('AdjunctListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
