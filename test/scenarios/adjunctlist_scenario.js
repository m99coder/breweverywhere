var util = require('util');

describe('Adjunct List', function () {
    var ptor;

    beforeEach(function () {
        ptor = protractor.getInstance();
        ptor.get('#/adjuncts');
    });

    it('should show a list of adjuncts', function () {
        ptor = protractor.getInstance();
        ptor.findElements(protractor.By.tagName('tr')).then(function(rows){
           expect(rows.length).toBe(11);
        });
    }, 10000);

    it('should page to the next page when the next button is clicked', function(){
        ptor= protractor.getInstance();

        var originalClass = ptor.findElement(protractor.By.xpath('/html/body/div[2]/div/div/ul/li[3]')).getAttribute('class');

        ptor.findElement(protractor.By.partialLinkText('Next')).click();

        var newClass = ptor.findElement(protractor.By.xpath('/html/body/div[2]/div/div/ul/li[3]')).getAttribute('class');

        expect(newClass).toNotEqual(originalClass);

    }, 10000);

    it('should page to the page that is clicked', function(){
        ptor= protractor.getInstance();

        var originalClass = ptor.findElement(protractor.By.xpath('/html/body/div[2]/div/div/ul/li[5]')).getAttribute('class');

        ptor.findElement(protractor.By.xpath('/html/body/div[2]/div/div/ul/li[5]/a')).click();

        var newClass = ptor.findElement(protractor.By.xpath('/html/body/div[2]/div/div/ul/li[5]')).getAttribute('class');

        expect(newClass).toNotEqual(originalClass);

    }, 10000);

});