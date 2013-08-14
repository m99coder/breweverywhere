var util = require('util');

describe('Home Page - Logged In', function () {
    var ptor;

    beforeEach(function () {
        ptor = protractor.getInstance();
        ptor.get('#/');
        ptor.findElement(protractor.By.input('login.userName')).sendKeys('lavinjj');
        ptor.findElement(protractor.By.input('login.password')).sendKeys('f00sba11');
        ptor.findElement(protractor.By.css('Button[ng-click^="login"]')).click();
        ptor.waitForAngular();
    });

    it('should show my recipes when user is logged in', function(){
        ptor = protractor.getInstance();
        ptor.findElements(protractor.By.tagName('h2')).then(function(headers){
            expect(headers.length).toBe(6);
            expect(headers[1].getText()).toBe('My Recipes');
            expect(headers[1].isDisplayed()).toBe(true);
        });
    })

    it('should show my calendar when user is logged in', function(){
        ptor = protractor.getInstance();
        ptor.findElements(protractor.By.tagName('h2')).then(function(headers){
            expect(headers.length).toBe(6);
            expect(headers[3].getText()).toBe('My Calender')
            expect(headers[3].isDisplayed()).toBe(true);
        });
    })

    it('should show my inventory when user is logged in', function(){
        ptor = protractor.getInstance();
        ptor.findElements(protractor.By.tagName('h2')).then(function(headers){
            expect(headers.length).toBe(6);
            expect(headers[5].getText()).toBe('My Inventory')
            expect(headers[5].isDisplayed()).toBe(true);
        });
    })


});