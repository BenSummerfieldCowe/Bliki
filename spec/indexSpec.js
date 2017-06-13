'use strict'
//var posts = require('../lib/posts.js');
var Browser = require("zombie");
var base_url = 'http://localhost:3000';

//TODO add mocking/spys as it wont always use the local
 describe("The blog page", function () { 
    const browser = new Browser();

    it("can be successfully requested", function(done) {
      browser.visit('http://localhost:3000/',function() {
      expect(browser.success).toBe(true)
      expect(browser.status).toBe(200)
      done();
      });
    });

    it("displays posts", function(done) {
      browser.visit('http://localhost:3000/',function() {
      expect(browser.querySelector(".title").textContent).toBe('The first post');
      done();
      });
    })

    it("can be succesfully requested for later posts", function(done) {
      browser.visit('http://localhost:3000/2',function() {
      expect(browser.success).toBe(true)
      expect(browser.status).toBe(200)
      done();
      })
    });
});
