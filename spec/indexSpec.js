'use strict'
var posts = require('../lib/posts.js');
var request = require("request");
var Browser = require('zombie');

const browser = new Browser();
// Browser.localhost('localhost', 3000);

//TODO add mocking/spys as it wont always use the local
 
describe("Index Page", function(){
  it("contains #content div", function(done){
    browser.visit("http://localhost:3000/", function(){
      assert.ok(browser.success);
      done();
    });
  });
});   

describe("The Home page", function () { 
    const browser = new Browser();
    it("can be successfully requested ", function(done) {
        browser.visit('/',function(err) {
        expect(browser.assert.success());    
        expect(browser.assert.success());
        done();
      })
    });
  //This needs expanding a bunch
    it("returns can be successfully requested ", function(done) {
        request.get(base_url, function(err,res) {
            expect(res.statusCode).toBe(200);
            done();
        })
    });

    // it("displays posts", function(done) {
    //     browser.assert.text('.title','The first post');
    //     done();
    // });
});
