import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MoodInput from './components/MoodInput'

export default class MyMindsetApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          MyMindset
        </Text>
        <Text style={styles.instructions}>
          Log In
        </Text>
        <Text style={styles.instructions}>
          Sign Up
        </Text>
        <MoodInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cfdfef',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyMindsetApp', () => MyMindsetApp);
