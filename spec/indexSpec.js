var request = require("request");

  var base_url = "http://localhost:3000"

describe("The Home page", function () { 
  //This needs expanding a bunch
    it("returns can be successfully requested ", function(done) {
        request.get(base_url, function(err,res) {
            expect(res.statusCode).toBe(200);
            done();
        })
    });
});
