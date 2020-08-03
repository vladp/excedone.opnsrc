import React, { Component } from 'react';
import { /*Image,*/ ScrollView, Text,View, Platform,   } from 'react-native';


import Markdown, { MarkdownIt } from 'react-native-markdown-display';

//import FitImage from 'react-native-fit-image'; 

import { MD_TEST_DATA1, MD_TEST_DATA2 } from './testData_markdown';



const md = new MarkdownIt({
  typographer: true,
  linkify: true
});



class App extends Component {
  
  
  render() {
    console.log('App::render');

    const localStyle={
      paragraph: {color: 'red'}, //text should be red
      heading1: {fontSize:52, color: 'green'},//headings should be green
      
    }
    return (
      <ScrollView>
      <View>
        <Text> Mark Down with react-native-markdown-display </Text>
        <View style={{ flex: 1, margin:5,  borderWidth: 2 }}>
          <Markdown style={localStyle} markdownit={md}>
            {MD_TEST_DATA2}
          </Markdown>
        </View>
      </View>
      </ScrollView>
    );
  }
}



let hotWrapper = () => () => App;
if (Platform.OS === 'web') {
  const { hot } = require('react-hot-loader');
  hotWrapper = hot;
}
export default hotWrapper(module)(App);

