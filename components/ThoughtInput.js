import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput
  View,
  ListView
} from 'react-native';

export default class ThoughtInput extends Component {
  constructor() {
      super();
      this.state = {text: "I can input stuff!"}
    }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

const styles = StyleSheet.create({
  moodbox: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'red',
    margin: 10,
    overflow: 'hidden',
  },
});
