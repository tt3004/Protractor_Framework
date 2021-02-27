require('../utilities/customlocators.js');
var BankMgrHomeLocators = require('../json/locators.json').BankMgrHomePage;
var SelectWrapper = require('../utilities/select-wrapper');
var selectCustomer = new SelectWrapper(by.model(BankMgrHomeLocators.Cust_DropDown_ngModel));
var selectCurrency = new SelectWrapper(by.model(BankMgrHomeLocators.Currency_DropDown_ngModel));

var customerdetails_page = function () {
    this.addCustomerInfo = function (fname, lname, postcode) {
        element(by.ngClick(BankMgrHomeLocators.Add_Cust_Btn_ngClick)).click();
        element(by.model(BankMgrHomeLocators.FirstName_ngModel)).sendKeys(fname);
        element(by.model(BankMgrHomeLocators.LastName_ngModel)).sendKeys(lname);
        element(by.model(BankMgrHomeLocators.PostCode_ngModel)).sendKeys(postcode);
        element(by.css(BankMgrHomeLocators.AddCust_Btn_css)).click();
    }
    this.openAnAccount = function (customer, currency) {
        element(by.ngClick(BankMgrHomeLocators.Open_Acc_ngClick)).click();
        selectCustomer.selectByText(customer);
        selectCurrency.selectByText(currency);
        element(by.buttonText(BankMgrHomeLocators.Process_btn_text)).click();
    }
    this.SearchAndValidateCustomer = function (customer) {
        element(by.ngClick(BankMgrHomeLocators.Show_Cust_ngClick)).click();
        element(by.model(BankMgrHomeLocators.SearchBar_ngModel)).sendKeys(customer);
    }
    this.DeleteCustomerRecords = function () {
        element(by.buttonText(BankMgrHomeLocators.Delete_btn_text)).click();
    }
};
module.exports = new customerdetails_page();