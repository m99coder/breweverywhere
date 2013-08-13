var util = require('util');

describe('Login', function () {
    var ptor;

    beforeEach(function () {
        ptor = protractor.getInstance();
        ptor.get('#/');
    });

    it('should navigate to the register page when the register button is clicked', function () {
        ptor = protractor.getInstance();
        ptor.findElement(protractor.By.css('Button[ng-click^="register"]')).click();
        expect(ptor.getCurrentUrl()).toContain('#/register');

    }, 10000)

    it('should allow a user to log in', function () {
        ptor = protractor.getInstance();
        ptor.findElement(protractor.By.input('login.userName')).sendKeys('lavinjj');
        ptor.findElement(protractor.By.input('login.password')).sendKeys('f00sba11');
        ptor.findElement(protractor.By.css('Button[ng-click^="login"]')).click();
        ptor.waitForAngular();
        ptor.findElement(protractor.By.binding("Welcome, {{currentBrewer.FirstName}}")).
            getText().then(function (text) {
                expect(text).toContain('Welcome, Jim Lavin');
            });

    }, 10000)


    it('should should display the user\'s gravatar image after log in', function () {
        ptor = protractor.getInstance();
        ptor.findElement(protractor.By.input('login.userName')).sendKeys('lavinjj');
        ptor.findElement(protractor.By.input('login.password')).sendKeys('f00sba11');
        ptor.findElement(protractor.By.css('Button[ng-click^="login"]')).click();
        ptor.waitForAngular();
        ptor.findElement(protractor.By.tagName('img')).
            getAttribute('src').then(function (imageUrl) {
                expect(imageUrl).toBe('http://www.gravatar.com/avatar/80b03752791145a3fdd027b154d7b42b?s=40&r=pg&d=404');
            });

    }, 10000)

});