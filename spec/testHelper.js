
module.exports = {
  textAssertionOnPage: textAssertionOnPage
};

var textAssertionOnPage = (browser, selector, assertion) => {
  var element = browser.querySelector(selector);
  if(element) {
    expect(element.textContent).toBe(assertion);
  } else {
    expect(false).toEqual(true, `element with selector ${selector} not found on page`);
  }
};