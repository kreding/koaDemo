var requireDir = require('require-dir');
var path = require('path');

requireDir(path.join(__dirname + '/gulp/tasks'), {recure: true});
