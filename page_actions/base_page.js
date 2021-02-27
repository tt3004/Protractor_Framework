var base_page = function () {
    this.navigateToUrl = function (url) {
        browser.get(url);
    }
    this.getPageTitle = function () {
        return browser.getTitle();
    }
};
module.exports = new base_page();