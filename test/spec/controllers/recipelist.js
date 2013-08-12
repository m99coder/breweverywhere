'use strict';

describe('Controller: RecipelistCtrl', function () {

  // load the controller's module
  beforeEach(module('breweverywhereApp'));

  var RecipelistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipelistCtrl = $controller('RecipelistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
