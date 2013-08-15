var util = require('util');

describe('Register User', function () {
    var ptor;

    beforeEach(function () {
        ptor = protractor.getInstance();
        ptor.get('#/register');
    });

    it('should not allow submission without required fields', function() {
        ptor = protractor.getInstance();

        ptor.findElement(protractor.By.name('registerBtn')).isEnabled().then(function(value){
            expect(value).toBe(false);
        })
    }, 10000);

    it('should allow submission with required fields', function() {
        ptor = protractor.getInstance();

        var timeHack = new Date();
        ptor.findElement(protractor.By.input('brewer.UserName')).sendKeys('test_' + timeHack.valueOf().toString());
        ptor.findElement(protractor.By.input('brewer.FirstName')).sendKeys('Test');
        ptor.findElement(protractor.By.input('brewer.LastName')).sendKeys('User');
        ptor.findElement(protractor.By.input('brewer.Email')).sendKeys('test_' + timeHack.valueOf().toString() + '@nomail.com');
        ptor.findElement(protractor.By.input('password')).sendKeys(timeHack.valueOf().toString());
        ptor.findElement(protractor.By.input('confirmpassword')).sendKeys(timeHack.valueOf().toString());
        ptor.findElement(protractor.By.name('registerBtn')).click();
        ptor.waitForAngular();
        expect(ptor.getCurrentUrl()).toBe(ptor.baseUrl + '#/');
    }, 10000);

    it('should not allow submission if User Name exists', function() {
        ptor = protractor.getInstance();

        var timeHack = new Date();
        ptor.findElement(protractor.By.input('brewer.UserName')).sendKeys('lavinjj');
        ptor.waitForAngular();
        ptor.findElement(protractor.By.input('brewer.FirstName')).sendKeys('Test');
        ptor.findElement(protractor.By.input('brewer.LastName')).sendKeys('User');
        ptor.findElement(protractor.By.input('brewer.Email')).sendKeys('test_' + timeHack.valueOf().toString() + '@nomail.com');
        ptor.findElement(protractor.By.input('password')).sendKeys(timeHack.valueOf().toString());
        ptor.findElement(protractor.By.input('confirmpassword')).sendKeys(timeHack.valueOf().toString());
        ptor.findElement(protractor.By.name('registerBtn')).isEnabled().then(function(value){
            expect(value).toBe(false);
        })
    }, 10000);

    it('should not allow submission if User Name is missing', function() {
        ptor = protractor.getInstance();

        var timeHack = new Date();
        ptor.findElement(protractor.By.input('brewer.FirstName')).sendKeys('Test');
        ptor.findElement(protractor.By.input('brewer.LastName')).sendKeys('User');
        ptor.findElement(protractor.By.input('brewer.Email')).sendKeys('test_' + timeHack.valueOf().toString() + '@nomail.com');
        ptor.findElement(protractor.By.input('password')).sendKeys(timeHack.valueOf().toString());
        ptor.findElement(protractor.By.input('confirmpassword')).sendKeys(timeHack.valueOf().toString());
        ptor.waitForAngular();
        ptor.findElement(protractor.By.name('registerBtn')).isEnabled().then(function(value){
            expect(value).toBe(false);
        })
    }, 10000);

    it('should not allow submission if First Name is missing', function() {
        ptor = protractor.getInstance();

        var timeHack = new Date();
        ptor.findElement(protractor.By.input('brewer.UserName')).sendKeys('test_' + timeHack.valueOf().toString());
        ptor.findElement(protractor.By.input('brewer.LastName')).sendKeys('User');
        ptor.findElement(protractor.By.input('brewer.Email')).sendKeys('test_' + timeHack.valueOf().toString() + '@nomail.com');
        ptor.findElement(protractor.By.input('password')).sendKeys(timeHack.valueOf().toString());
        ptor.findElement(protractor.By.input('confirmpassword')).sendKeys(timeHack.valueOf().toString());
        ptor.waitForAngular();
        ptor.findElement(protractor.By.name('registerBtn')).isEnabled().then(function(value){
            expect(value).toBe(false);
        })
    }, 10000);

    it('should not allow submission if Last Name is missing', function() {
        ptor = protractor.getInstance();

        var timeHack = new Date();
        ptor.findElement(protractor.By.input('brewer.UserName')).sendKeys('test_' + timeHack.valueOf().toString());
        ptor.findElement(protractor.By.input('brewer.FirstName')).sendKeys('Test');
        ptor.findElement(protractor.By.input('brewer.Email')).sendKeys('test_' + timeHack.valueOf().toString() + '@nomail.com');
        ptor.findElement(protractor.By.input('password')).sendKeys(timeHack.valueOf().toString());
        ptor.findElement(protractor.By.input('confirmpassword')).sendKeys(timeHack.valueOf().toString());
        ptor.waitForAngular();
        ptor.findElement(protractor.By.name('registerBtn')).isEnabled().then(function(value){
            expect(value).toBe(false);
        })
    }, 10000);

    it('should not allow submission if Email is missing', function() {
        ptor = protractor.getInstance();

        var timeHack = new Date();
        ptor.findElement(protractor.By.input('brewer.UserName')).sendKeys('test_' + timeHack.valueOf().toString());
        ptor.findElement(protractor.By.input('brewer.FirstName')).sendKeys('Test');
        ptor.findElement(protractor.By.input('brewer.LastName')).sendKeys('User');
        ptor.findElement(protractor.By.input('password')).sendKeys(timeHack.valueOf().toString());
        ptor.findElement(protractor.By.input('confirmpassword')).sendKeys(timeHack.valueOf().toString());
        ptor.waitForAngular();
        ptor.findElement(protractor.By.name('registerBtn')).isEnabled().then(function(value){
            expect(value).toBe(false);
        })
    }, 10000);

    it('should not allow submission if Email is already registered', function() {
        ptor = protractor.getInstance();

        var timeHack = new Date();
        ptor.findElement(protractor.By.input('brewer.UserName')).sendKeys('test_' + timeHack.valueOf().toString());
        ptor.findElement(protractor.By.input('brewer.FirstName')).sendKeys('Test');
        ptor.findElement(protractor.By.input('brewer.LastName')).sendKeys('User');
        ptor.findElement(protractor.By.input('brewer.Email')).sendKeys('jlavin@jimlavin.net');
        ptor.findElement(protractor.By.input('password')).sendKeys(timeHack.valueOf().toString());
        ptor.findElement(protractor.By.input('confirmpassword')).sendKeys(timeHack.valueOf().toString());
        ptor.waitForAngular();
        ptor.findElement(protractor.By.name('registerBtn')).isEnabled().then(function(value){
            expect(value).toBe(false);
        })
    }, 10000);

    it('should not allow submission if password is missing', function() {
        ptor = protractor.getInstance();

        var timeHack = new Date();
        ptor.findElement(protractor.By.input('brewer.UserName')).sendKeys('test_' + timeHack.valueOf().toString());
        ptor.findElement(protractor.By.input('brewer.FirstName')).sendKeys('Test');
        ptor.findElement(protractor.By.input('brewer.LastName')).sendKeys('User');
        ptor.findElement(protractor.By.input('brewer.Email')).sendKeys('test_' + timeHack.valueOf().toString() + '@nomail.com');
        ptor.findElement(protractor.By.input('confirmpassword')).sendKeys(timeHack.valueOf().toString());
        ptor.waitForAngular();
        ptor.findElement(protractor.By.name('registerBtn')).isEnabled().then(function(value){
            expect(value).toBe(false);
        })
    }, 10000);

    it('should not allow submission if confirmation password is missing', function() {
        ptor = protractor.getInstance();

        var timeHack = new Date();
        ptor.findElement(protractor.By.input('brewer.UserName')).sendKeys('test_' + timeHack.valueOf().toString());
        ptor.findElement(protractor.By.input('brewer.FirstName')).sendKeys('Test');
        ptor.findElement(protractor.By.input('brewer.LastName')).sendKeys('User');
        ptor.findElement(protractor.By.input('brewer.Email')).sendKeys('test_' + timeHack.valueOf().toString() + '@nomail.com');
        ptor.findElement(protractor.By.input('password')).sendKeys(timeHack.valueOf().toString());
        ptor.waitForAngular();
        ptor.findElement(protractor.By.name('registerBtn')).isEnabled().then(function(value){
            expect(value).toBe(false);
        })
    }, 10000);

    it('should not allow submission if passwords do not match', function() {
        ptor = protractor.getInstance();

        var timeHack = new Date();
        ptor.findElement(protractor.By.input('brewer.UserName')).sendKeys('test_' + timeHack.valueOf().toString());
        ptor.findElement(protractor.By.input('brewer.FirstName')).sendKeys('Test');
        ptor.findElement(protractor.By.input('brewer.LastName')).sendKeys('User');
        ptor.findElement(protractor.By.input('brewer.Email')).sendKeys('test_' + timeHack.valueOf().toString() + '@nomail.com');
        ptor.findElement(protractor.By.input('password')).sendKeys(timeHack.valueOf().toString());
        ptor.findElement(protractor.By.input('confirmpassword')).sendKeys('abc123');
        ptor.waitForAngular();
        ptor.findElement(protractor.By.name('registerBtn')).isEnabled().then(function(value){
            expect(value).toBe(false);
        })
    }, 10000);

});