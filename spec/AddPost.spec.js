'use strict'
var Browser = require("zombie");
var textAssertionOnPage = require("./testHelper.js").textAssertionOnPage;
var posts = require("../lib/posts.js");

describe("The add post page", () => {
  const browser = new Browser();
  var apiSpy;
  beforeEach(() => {
     apiSpy = spyOn(posts,"getPostByTitle");
  });

  it("can be successfully requested", (done) =>{
    browser.visit('http://localhost:3000/add',() => {
      expect(browser.success).toBe(true);
      expect(browser.status).toBe(200);
      done();
    });
  });

  // it("displays posts", (done) => {
  //   browser.visit('http://localhost:3000/add',() => {
  //     //browser.assert.style('#titleError', 'visibility', 'hidden');
  //
  //     browser.fill("#title","The Long one");
  //     browser.fill(".content","test");
  //  //   expect(apiSpy).toHaveBeenCalled();
  //       done();
  //   });
  // });
  
});