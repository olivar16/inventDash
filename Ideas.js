/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Searchbar from 'react-native-searchbar'
export default class Ideas extends Component {

  constructor(props){
    super(props);
    this.state={
      ideaInput: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={{ height:30}}/>
      <TextInput
      style={styles.textInput}
      value={this.state.ideaInput}
      onChangeText={(ideaInput) => this.setState({ideaInput})}
      autoFocus={true}
      placeholder=" + Enter an idea"
      enablesReturnKeyAutomatically={true}
      />
      <Text>
      This is the placeholder for ideas
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textInput: {
    height: 40, width: 350, borderColor: 'purple', borderWidth: 1, textAlign: 'center'
  }
});
