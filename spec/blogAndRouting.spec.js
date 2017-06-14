'use strict'
var Browser = require("zombie");
var textAssertionOnPage = require("./testHelper.js").textAssertionOnPage;

//TODO add mocking/spys as it wont always use the local
 describe("The blog page", function () { 
    const browser = new Browser();

    it("can be successfully requested", (done) =>{
      browser.visit('http://localhost:3000/',() => {
      expect(browser.success).toBe(true);
      expect(browser.status).toBe(200);
      done();
      });
    });

    it("displays posts", (done) => {
      browser.visit('http://localhost:3000/',() => {
        textAssertionOnPage(browser,".title","The first post");
      done();
      });
    });

    it("can be succesfully requested for later pages", (done) => {
      browser.visit('http://localhost:3000/2',() => {
      expect(browser.success).toBe(true);
      expect(browser.status).toBe(200);
      done();
      })
    });

   it("can be display posts for later pages", (done) => {
     browser.visit('http://localhost:3000/2',() => {
       textAssertionOnPage(browser,".title","The long one");
       done();
     })
   });

   it("returns 404 when naviagting to an invalid page number", (done) => {
     browser.visit('http://localhost:3000/10',() => {
       expect(browser.success).toBe(false);
       expect(browser.status).toBe(404);
       done();
     })
   });
});

describe("The individual post page", () => {
  const browser = new Browser();
  it("can be successfully requested", (done) =>{
    browser.visit('http://localhost:3000/the_first_post',() => {
      expect(browser.success).toBe(true);
      expect(browser.status).toBe(200);
      done();
    });
  });

  it("displays post content", (done) =>{
    browser.visit('http://localhost:3000/the_first_post',() => {
      textAssertionOnPage(browser,".content","This is going to be the first post we create");
      done();
    });
  });

  it("displays correct title", (done) =>{
    browser.visit('http://localhost:3000/the_first_post',() => {
      textAssertionOnPage(browser,".title","The first post");
      done();
    });
  });

  it("returns 404 when navigating to an invalid post", (done) => {
    browser.visit('http://localhost:3000/bad_post',() => {
      expect(browser.success).toBe(false);
      expect(browser.status).toBe(404);
      done();
    })
  });

});