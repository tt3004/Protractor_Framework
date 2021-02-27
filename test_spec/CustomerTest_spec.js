describe('Customer Functionality Test - ', function () {

    var homepage = require('../page_actions/home_page.js');
    var basepage = require('../page_actions/base_page.js');
    var locators = require('../json/locators.json');
    var logger = require('../utilities/log');
    var CustomerData = require('../json/data.json').CustomerActionPage;
    var CustomerLocators = require('../json/locators.json').CustomerActionPage;
    var DepositData = require('../json/data').Deposit;
    var DepositLocators = require('../json/locators.json').Deposit;
    var WithdrawData = require('../json/data').Withdraw;
    var WithdrawLocators = require('../json/locators.json').Withdrawl;
    var TransactionLocators = require('../json/locators.json').Transactions;
    var assert = require('chai').assert;
    require('../page_actions/customer_action_page.js');

    var customer_action_page; //creating a reference

    it('should login as customer', function () {
        basepage.navigateToUrl(locators.URL.loginPageURL);
        logger.log('info', 'navigated to url: ' + locators.URL.loginPageURL);

        customer_action_page = homepage.loginAsCustomer();
        logger.log('info', 'creating the reference of customer action page');

        customer_action_page.loginWithName(CustomerData.Customer_Name);
        logger.log('info', CustomerData.Customer_Name + ' logged in successfully');

        $(CustomerLocators.Name_validate_css).getText().then(function (loggedInCustomer) {
            assert.equal(loggedInCustomer, CustomerData.Customer_Name);
            logger.log('info', loggedInCustomer + ' validated successfully');
        });

    });

    xit('should deposit the money in account', function () {

        $$(DepositLocators.Deposit_Balance).get(1).getText().then(function (current_balance) {
            logger.log('info', 'current balance: ' + current_balance);
        });

        customer_action_page.depositMoney(DepositData["Deposit_A/C_Num"], DepositData.Deposit_Amount);
        logger.log('info', 'Depositing the money: ' + DepositData.Deposit_Amount);

        $(DepositLocators.Deposit_Status_CSS).getText().then(function (status) {
            assert(status, DepositData.Successful_Status);
            logger.log('info', 'Deposit Status: ' + status);
        });
    });

    xit('should withdraw the given amount from the account', function () {

        $$(WithdrawLocators.Withdraw_Balance).get(1).getText().then(function (current_bal) {
            logger.log('info', 'current balance: ' + current_bal);
        });

        customer_action_page.withdrawMoney(WithdrawData["Withdraw_A/C_Num"], WithdrawData.Withdraw_Amount);
        logger.log('info', 'Withdrawing the money: ' + WithdrawData.Withdraw_Amount);

        $(WithdrawLocators.Withdraw_Status_CSS).getText().then(function (status) {
            assert(status, WithdrawData.Successful_Status);
            logger.log('info', 'Withdrawal Status: ' + status);
        });
    });

    it('should display all the transactions', function () {
        customer_action_page.transactions();
        var transLoop = element.all(by.repeater(TransactionLocators.Trans_Loop));
        transLoop.each(function (obj, index) {
            obj.getText().then(function (value) {
                console.log(index, value);
            })
        })
    });
});