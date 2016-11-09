import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

export default class MoodInput extends Component {
  constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['Really Sad Face', 'Sad Face', 'Neutral Face', 'Happy Face', 'Really Happy Face']),
      };
    }

  render() {
    return (
      <ListView

        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text style={styles.moodbox}>{rowData}</Text>}
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
