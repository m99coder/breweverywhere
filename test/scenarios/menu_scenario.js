var util = require('util');

describe('Menu', function () {
    var ptor;

    beforeEach(function () {
        ptor = protractor.getInstance();
        ptor.get('#/');
    });

    it('should return to the home page when the App Title is clicked', function () {
        ptor = protractor.getInstance();
        ptor.findElement(protractor.By.className('brand')).click();
        expect(ptor.getCurrentUrl()).toContain('#/');
    }, 10000);

    it('should return to the home page when the Home Link is clicked', function () {
        ptor = protractor.getInstance();
        ptor.findElement(protractor.By.xpath('/html/body/div[1]/div/div/div/div/ul/li[1]/a')).click();
        expect(ptor.getCurrentUrl()).toContain('#/');
    }, 10000);

    it('should show a personal menu when the usr is logged in', function () {
        ptor = protractor.getInstance();
        ptor.findElement(protractor.By.input('login.userName')).sendKeys('lavinjj');
        ptor.findElement(protractor.By.input('login.password')).sendKeys('f00sba11');
        ptor.findElement(protractor.By.css('Button[ng-click^="login"]')).click();
        ptor.waitForAngular();
        ptor.findElement(protractor.By.xpath("/html/body/div[1]/div/div/div/div/ul/li[3]/a")).
            getText().then(function (text) {
                expect(text).toContain('My Stuff');
            });

    }, 10000)

});