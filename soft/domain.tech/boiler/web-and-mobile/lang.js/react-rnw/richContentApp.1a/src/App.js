import React, { Component } from 'react';
import { StyleSheet, Text, /*Image, ScrollView,*/ View, Platform, TouchableHighlight, Animated, Easing } from 'react-native';

import Markdown from 'react-native-markdown-display';
import MarkdownIt from 'markdown-it';
//import FitImage from 'react-native-fit-image'; 

import { MD_TEST_DATA1, MD_TEST_DATA2 } from './testData_markdown';

import logo from './logo.png';

const md = new MarkdownIt({
  typographer: true,
  linkify: true
});



class App extends Component {
  state = {
    spinValue: new Animated.Value(0)
  };

  onClick = () => {
    const wasRotated = this.state.spinValue._value === 1;
    Animated.timing(this.state.spinValue, {
      toValue: wasRotated ? 0 : 1,
      duration: 250,
      easing: Easing.linear
    }).start();
  };

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    console.log(MD_TEST_DATA1)

    return (
      <View>
        <View style={styles.container}>
          <Animated.Image source={logo} style={[styles.logo, { transform: [{ rotate: spin }] }]} />
          <Text style={styles.title}>Create React Native Web App</Text>
          <Text>Open up src/App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          {Platform.OS !== 'web' && <Text>Shake your phone to open the developer menu.</Text>}
          <TouchableHighlight onPress={this.onClick} style={styles.button} underlayColor={'#0A84D0'}>
            <Text style={styles.buttonText}>Rotate Logo</Text>
          </TouchableHighlight>
        </View>

        <View style={{ flex: 1, margin:5,  borderWidth: 2 }}>
          <Markdown  markdownit={md}>
            {MD_TEST_DATA2}
          </Markdown>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 300,
    height: 300
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  button: {
    borderRadius: 3,
    padding: 20,
    marginVertical: 10,
    marginTop: 10,
    backgroundColor: '#1B95E0'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});

let hotWrapper = () => () => App;
if (Platform.OS === 'web') {
  const { hot } = require('react-hot-loader');
  hotWrapper = hot;
}
export default hotWrapper(module)(App);
