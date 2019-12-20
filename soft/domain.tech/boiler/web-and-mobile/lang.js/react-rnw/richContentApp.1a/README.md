# this repository was initiated with create-react-native-web-app

#

there were a number of modifications made subsequently to get it to compile on

0.61+ version of react native

This example now, also, includes how to use a react-native module with Web (React-native-markdown-render).
Of course, not all react-native modules can be used on the Web browser (because some rely on native OS bridge APIs)

## Usage

- Android - Install [adb (Android Debug Bridge)](https://developer.android.com/studio/releases/platform-tools.html)

* IOS - Xcode and an apple device required

```


# cd into your <project-directory>
$ cd richContentApp.1a

# Run Web/Ios/Android development
# Web
$ npm run web
or
$ yarn web

# IOS (simulator)
$ npm run ios

# Android (connected device). Below command starts RN bridge for debugging (once bridge is started, then ran the app from Android Studio)
$ npm run start

```

## Folder structure

```
richContentApp.1a
├── node_modules
├── package.json
├── index.js
├── .watchmanconfig
├── .flowconfig
├── app.json
├── .gitignore
├── android (When opening with Android studio, open this folder)
│   └── android project files
├── config
│   ├── jest
│   │    │── initTest.js
│   │    │── native.jest.config.js
│   │    │── web.jest.config.js
│   │    └── jest transform files
│   ├── env.js
│   ├── paths.js
│   ├── polyfills.js
│   ├── webpack.config.dev.js
│   ├── webpack.config.prod.js
│   └── webpackDevServer.config.js
├── ios (When opening with Xcode, open this folder)
│   └── ios project files
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── scripts
│   ├── build.js
│   ├── start.js
│   ├── switchSnapshots.js
│   └── test.js
└── src
    ├── App.js
    ├── App.test.js
    ├── index.css # global
    ├── index.js
    ├── logo.png
    └── registerServiceWorker.js
```

[Another example app built with this CLI](https://github.com/VISI-ONE/create-react-native-web-example)

## Testing

```sh
# Web and Native
$ npm run test

# Web
$ npm run test:web

# Web watch mode
$ npm run test:web-watch


# Native
$ npm run test:native

# Native watch mode
$ npm run test:native-watch


# Coverage - web
$ npm run coverage

# Coverage - native
$ npm run coverage:native
```

## Debugging

Open dev menu:

1. CMD+D (IOS) / CMD+M (Android)
2. Press "Enable Live-Reload"

[React native docs - debugging real devices guide](http://facebook.github.io/react-native/releases/0.49/docs/running-on-device.html)

[React native docs - debugging guide](http://facebook.github.io/react-native/docs/debugging.html)

[Network calls in the devtools](http://www.preslav.me/2017/03/26/debugging-network-calls-in-react-native-using-the-chrome-debugger/)

## Build

```sh
# Web
$ npm run build

# Android - upgrade the current build version in `android/app/build.gradle` file (both the `versionCode` and the `versionName`)
Example:
versionCode 2
versionName "1.1"

# And then run the build
$ cd android && ./gradlew assembleRelease

# Open apk folder to find the release apk
$ open ./android/app/build/outputs/apk
```

[React native docs - Android signed apk](http://facebook.github.io/react-native/releases/0.49/docs/signed-apk-android.html)

[React native docs for IOS](http://facebook.github.io/react-native/releases/0.49/docs/running-on-device.html#building-your-app-for-production)

### issues with bundling in release mode

to see what is going on try
./node_modules/.bin/react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

## Contributors for the initial template to create this app

|                | :octocat:                      |
| -------------- | ------------------------------ |
| Or Yoffe       | https://github.com/orYoffe     |
| Havit C. Rovik | https://github.com/haruelrovix |

## Resources

- [React Native for Web (react-native-web)](https://github.com/necolas/react-native-web)
- [React](https://reactjs.org/)
- [React Native](http://facebook.github.io/react-native/)
- [Create React App](https://github.com/facebook/create-react-app)
- [Create React Native App](https://github.com/react-community/create-react-native-app)
