var linkKeywords = require('../views/helpers/post.js').linkKeywords;
describe('The linkKeywords method', function() {
  //Add spy around the get keywords method when implemented
  it('replaces keyword in a post with links', function(done) {
    var content = "The first Post";
    expect(linkKeywords(content)).toBe("The <a class='keyword' href='/wiki/first'>first</a> Post");
    done()
  });

  it('replaces keyword in a post with links case insensitively', function(done) {
    var content = "The FiRst Post";
    expect(linkKeywords(content)).toBe("The <a class='keyword' href='/wiki/first'>FiRst</a> Post");
    done()
  });

  it('replaces keyphrases with spaces in a post with links with correct address', function(done) {
    var content = "The keyword is here";
    expect(linkKeywords(content)).toBe("<a class='keyword' href='/wiki/the_keyword'>The keyword</a> is here");
    done()
  });
});