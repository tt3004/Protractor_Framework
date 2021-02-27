describe('Bank Manager Functionality Test - ', function () {
    var homepage = require('../page_actions/home_page.js');
    var basepage = require('../page_actions/base_page.js');
    var locators = require('../json/locators.json');
    var data = require('../json/data.json');
    var logger = require('../utilities/log');
    var BankMgrData = require('../json/data.json').BankMgrHomePage;
    var BankMgrHomeLocators = require('../json/locators.json').BankMgrHomePage;
    require('../page_actions/customerdetails_page');

    var customerdetails_page; //for reference

    var handleAlert = function () {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 5000);

        var alert = browser.switchTo().alert();
        alert.getText().then(function (alertText) {
            logger.log('info', alertText);
        });
        alert.accept();
    };

    it('should login as bank manager', function () {
        basepage.navigateToUrl(locators.URL.loginPageURL);
        logger.log('info', 'navigated to url: ' + locators.URL.loginPageURL);

        customerdetails_page = homepage.loginAsBankManager();
        logger.log('info', 'creating the reference of customer details page');

        var title = basepage.getPageTitle();
        expect(title).toContain(data.LoginPage.Page_Title_Text);
        logger.log('info', 'validating the page title to contain: ' + data.LoginPage.Page_Title_Text);
    });

    it('should add a customer', function () {
        customerdetails_page.addCustomerInfo(BankMgrData.FirstName, BankMgrData.LastName, BankMgrData.PostCode);
        logger.log('info', 'Adding customer info');
        handleAlert();
    });

    it('should open an account', function () {
        customerdetails_page.openAnAccount(BankMgrData.CustomerName, BankMgrData.Currency);
        logger.log('info', 'Opening Customer Account');
        handleAlert();
    });

    it('should search and validate a customer', function () {
        customerdetails_page.SearchAndValidateCustomer(BankMgrData.Search_Cust_Name);
        logger.log('info', 'Searching the customer: ' + BankMgrData.Search_Cust_Name);
        var firstName = element(by.repeater(BankMgrHomeLocators.Customer_Loop).row(0).column('cust.fName'));
        expect(firstName.getText()).toBe(BankMgrData.Search_Cust_Name);
        logger.log('info', 'Customer validated successfully');
    });

    it('should delete the customer', function () {
        customerdetails_page.DeleteCustomerRecords();
        logger.log('info', 'Customer deleted successfully');
    });
});