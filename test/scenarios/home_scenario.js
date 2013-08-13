var util = require('util');

describe('Home Page', function () {
    var ptor;

    beforeEach(function () {
        ptor = protractor.getInstance();
        ptor.get('#/');
    });

    it('should start with no user logged in', function () {
        ptor = protractor.getInstance();
        ptor.findElement(protractor.By.binding("Welcome, {{currentBrewer.FirstName}}")).
            getText().then(function (text) {
                expect(text).toEqual('');
            });
    }, 10000);

    it('should show the highest rated recipes when no user is logged in', function(){
        ptor = protractor.getInstance();

        var headers = ptor.findElements(protractor.By.tagName('h2'));
        var header = headers[0];
        expect(header.getText()).toBe('Highest Rated Recipes')
    })


});