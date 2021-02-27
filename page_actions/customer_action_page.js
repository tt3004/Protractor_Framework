require('../utilities/customlocators.js');
var CustomerHomeLocators = require('../json/locators.json').CustomerActionPage;
var DepositLocators = require('../json/locators.json').Deposit;
var WithdrawLocators = require('../json/locators.json').Withdrawl;
var TransactionLocators = require('../json/locators.json').Transactions;
var SelectWrapper = require('../utilities/select-wrapper');
var SelectCustomerName = new SelectWrapper(by.model(CustomerHomeLocators.cust_dropdown_ngModel));
var SelectAccountNum = new SelectWrapper(by.id(DepositLocators.Acc_no_id));
var SelectAccNumWithdraw = new SelectWrapper(by.id(WithdrawLocators.Acc_no_id));

var customer_action_page = function () {
    this.loginWithName = function (customerName) {
        SelectCustomerName.selectByText(customerName);
        element(by.buttonText(CustomerHomeLocators.Login_Btn_Text)).click();
    }
    this.depositMoney = function (accountNum, Amount) {
        element(by.ngClick(DepositLocators.Deposit_btn_ngClick)).click();
        SelectAccountNum.selectByText(accountNum);
        element(by.model(DepositLocators.Deposit_Amt_ngModel)).sendKeys(Amount);
        $(DepositLocators.Deposit_Btn_CSS).click();
    }
    this.withdrawMoney = function (accountNum, Amount) {
        element(by.ngClick(WithdrawLocators.Withdraw_Btn_ngClick)).click();
        SelectAccNumWithdraw.selectByText(accountNum);
        element(by.model(WithdrawLocators.Withdraw_Amt_ngModel)).sendKeys(Amount);
        $(WithdrawLocators.Withdraw_Btn_CSS).click();
    }
    this.transactions = function () {
        element(by.ngClick(TransactionLocators.Trans_Btn_ngClick)).click();
    }
};
module.exports = new customer_action_page();