require('../utilities/customlocators.js');
require('../page_actions/customerdetails_page.js');
require('../page_actions/customer_action_page.js');
var locators = require('../json/locators.json');
var home_page = function () {
    this.loginAsCustomer = function () {
        element(by.buttonText(locators.LoginPage.Cust_Btn_Text)).click();
        return require('../page_actions/customer_action_page.js');
    }
    this.loginAsBankManager = function () {
        element(by.ngClick(locators.LoginPage.Bank_Mgr_ngClick)).click();
        return require('../page_actions/customerdetails_page.js');
    }
};

module.exports = new home_page();