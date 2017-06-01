#! /usr/bin/env node

var program = require('commander');
var fs = require('fs-extra');
var userdir = require('os').homedir();

program
    .version('0.0.3')
    .option('-a, --android', 'copy js-bundle to andrid project')
    .option('-i, --ios', 'copy js-bundle to ios project')
    .parse(process.argv);

if (program.android) {
    //  var userdir = process.env.HOME;
    // console.log(userdir);
    fs.copy(userdir + '/.rn/android/assets/index.android.bundle', 'src/main/assets/index.android.bundle', function(err) {
    if (err) return console.error(err)
    console.log("copy bundle success!")
  });

    fs.copy(userdir + '/.rn/android/res', 'src/main/res/', function(err) {
    if (err) return console.error(err)
    console.log("copy res success!")
  });

}
