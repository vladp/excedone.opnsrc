module.exports = function(api) {
  api.cache(true);
  return {
    presets: [["module:metro-react-native-babel-preset"], ['react-app']],
    ignore: [ "node_modules/art/core/color.js" ],
    /* alias for react-native to reactive-web is defined in webpack not here, because this config is used by actual native as well */
  };
};
