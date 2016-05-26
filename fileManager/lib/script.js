var exec = require('child_process').exec;
var port = 8080;
var path = "/Users/xuzhaoliang/desktop/Notes";
exec('node --harmony ./index.js -p '+port+' -d '+path, function(error, stdout, stderr) {
    console.log('stdout: ', stdout);
    console.log('stderr: ', stderr);
    if (error !== null) {
        console.log('exec error: ', error);
    }
});