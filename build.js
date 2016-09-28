var NwBuilder = require('nw-builder');
// var gulp = require('gulp');
// var gutil = require('gulp-util');

// gulp.task('nw', function () {

//     var nw = new NwBuilder({
//         // version: '0.14.6',
//         files: './public/*',
//         macIcns: './icons/app.icns',
//         // macPlist: {mac_bundle_id: 'myPkg'},
//         // platforms: ['win32', 'win64', 'osx64']
//         platforms: ['osx64'],
//         buildDir: './build'
//     });

//     // Log stuff you want
//     nw.on('log', function (msg) {
//         gutil.log('nw-builder', msg);
//     });

//     // Build returns a promise, return it so the task isn't called in parallel
//     return nw.build().catch(function (err) {
//         console.log(err);
//         gutil.log('nw-builder', err);
//     });
// });

// gulp.task('default', ['nw']);


var nw = new NwBuilder({
    // version: '0.14.6',
    files: './public/**',
    macIcns: './icons/app.icns',
    // macPlist: {mac_bundle_id: 'myPkg'},
    // platforms: ['win32', 'win64', 'osx64']
    platforms: ['win64', 'osx64', 'linux64'],
    buildDir: './build'
});

//Log stuff you want
nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function () {
   console.log('all done!');
}).catch(function (error) {
    console.error(error);
});