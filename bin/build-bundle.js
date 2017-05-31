#! /usr/bin/env node

var program = require('commander');
var fs = require('fs');
var path = require('path');
var shell = require("shelljs");
var exec = require('child_process').exec;

program
    .version('1.0.0')
    .option('-a, --android', 'build js-bundle for andrid')
    .option('-i, --ios', 'build js-bundle for ios')
    .option('-c, --clear', 'clear js-bundle')
    .parse(process.argv);

// if (program.android) console.log('  - android');
if (program.android) {

  // if (! fs.existsSync('~/.rn')) {
  //   fs.mkdirSync('~/.rn');
  // }
  //
  // if (! fs.existsSync('~/.rn/assets')) {
  //   fs.mkdirSync('~/.rn/assets');
  // }
  //
  // if (! fs.existsSync('~/.rn/assets/android')) {
  //   fs.mkdirSync('~/.rn/assets/android');
  // }
  //
  // if (! fs.existsSync('~/.rn/res')) {
  //   fs.mkdirSync('~/.rn/res');
  // }
  //
  // if (! fs.existsSync('~/.rn/res/android')) {
  //   fs.mkdirSync('~/.rn/res/android');
  // }

  shell.exec('mkdir ~/.rn');
  shell.exec('mkdir ~/.rn/assets/');
  shell.exec('mkdir ~/.rn/assets/android/');
  shell.exec('mkdir ~/.rn/res/');
  shell.exec('mkdir ~/.rn/res/android/');
  shell.exec('react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output ~/.rn/assets/android/index.android.bundle --assets-dest ~/.rn/res/android/');
}
if (program.ios) console.log('  - ios');
if (program.clear) {
  shell.exec('rm -rf ~/.rn');
}
