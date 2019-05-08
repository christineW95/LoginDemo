import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './src/Login/Login';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login/>
        {/* <Text>Hello</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
