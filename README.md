# react-native-build-helper
A npm tool to help build js-bundle in React Native Project. 

In some hybrid projects, We may add some React Native code to an original Android or iOS project. The possible project architecture may like this:

- iOS
    - iOS code
    - package.json
    - react-native lib
    - react-native-3rd-native-lib
- Android
    - Android code
    - package.json
    - react-native lib
    - react-native-3rd-native-lib
- RN
    - package.json
    - index.ios.js
    - index.android.js

When building release version, some js bundles and resource files created by React Native are both used in Android or iOS project.
Conventionally, you may creat these React Native files firstly and copy them to your Android or iOS project manually.

This tool can help you to build js bundle and copy them to location you specified automatically. 

The current version only supports Android Project when copying files.

# Installation
```
npm i -g react-native-build-helper
```

# Usage
Enter to your js project and use the following command to build js bundle.

```
build-bundle --android  or  build-bundle -a
```

After bundle and resource files created successfully. Enter your main app module in Android project, like `xxx/yourapp`, 
use the following command to copy js bundle to your `assets`file folder, copy the resource files to your `res` file folder.

```
copy-bundle --android  or  copy-bundle -a
```

When you build bundle again, the new files will replace the old ones. If you want to delete the bundle and resource files  created before, you can use the following command.

```
build-bundle --clear or  build-bundle -c
```

# Need to do
- Support iOS project.
- Support specified path when copy files with the options in command.
