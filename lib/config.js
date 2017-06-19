var nconf = require('nconf');
var path = require('path');

nconf.argv().env().file({file:path.normalize('config.json')}).defaults({
    dataSourceType: 'local'
});

function get(value) {
    return nconf.get(value);
}
module.exports = {
    get: get
}
