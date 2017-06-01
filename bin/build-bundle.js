#! /usr/bin/env node

var program = require('commander');
var fs = require('fs');
var shell = require("shelljs");
var userdir  = require('os').homedir();

program
    .version('0.0.1')
    .option('-a, --android', 'build js-bundle for andrid')
    .option('-i, --ios', 'build js-bundle for ios')
    .option('-c, --clear', 'clear js-bundle')
    .parse(process.argv);

if (program.android) {

  if (! fs.existsSync(userdir + '/.rn')) {
    fs.mkdirSync( userdir + '/.rn');
  }

  if (! fs.existsSync(userdir + '/.rn/android')) {
    fs.mkdirSync(userdir + '/.rn/android');
  }

  if (! fs.existsSync(userdir + '/.rn/android/assets')) {
    fs.mkdirSync(userdir + '/.rn/android/assets');
  }

  if (! fs.existsSync(userdir + '/.rn/android/res')) {
    fs.mkdirSync(userdir + '/.rn/android/res');
  }

  shell.exec('react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output ~/.rn/android/assets/index.android.bundle --assets-dest ~/.rn/android/res/');
}
if (program.ios) console.log('  - ios');
if (program.clear) {
  shell.exec('rm -rf ~/.rn');
}
