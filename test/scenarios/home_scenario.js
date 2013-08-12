var util = require('util');

describe('Brew Everywhere Home Page', function(){
    var ptor;

    it('should start with no user logged in', function(){
        ptor = protractor.getInstance();
        ptor.get('#/');

        ptor.findElement(protractor.By.binding("Welcome, {{currentBrewer.FirstName}}")).
            getText().then(function(text) {
                expect(text).toEqual('');
            });
    }, 10000);
});