var util = require('util');

describe('Home Page - Logged Out', function () {
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
        ptor.findElements(protractor.By.tagName('h2')).then(function(headers){
            expect(headers.length).toBe(6);
            expect(headers[0].getText()).toBe('Highest Rated Recipes');
            expect(headers[0].isDisplayed()).toBe(true);
        });
    })

    it('should show the highest contributors when no user is logged in', function(){
        ptor = protractor.getInstance();
        ptor.findElements(protractor.By.tagName('h2')).then(function(headers){
            expect(headers.length).toBe(6);
            expect(headers[2].getText()).toBe('Highest Contributors')
            expect(headers[2].isDisplayed()).toBe(true);
        });
    })

    it('should show what\'s fermenting when no user is logged in', function(){
        ptor = protractor.getInstance();
        ptor.findElements(protractor.By.tagName('h2')).then(function(headers){
            expect(headers.length).toBe(6);
            expect(headers[4].getText()).toBe('What\'s Fermenting')
            expect(headers[4].isDisplayed()).toBe(true);
        });
    })


});