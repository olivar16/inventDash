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
  TabBarIOS
} from 'react-native';
import Ideas from './Ideas.js' 
export default class dash extends Component {

  constructor(props){
    super(props);
    this.state={
      selectedTab: 'Ideas'
    }
  }

  render() {
    return (

      <TabBarIOS
      style = {styles.container}
      unselectedTintColor="black"
      tintColor="white"
      unselectedItemTintColor="black"
      barTintColor="darkslateblue">

      <TabBarIOS.Item
      style = {styles.container}
          title="Ideas"
          selected={this.state.selectedTab == 'Ideas'}
          icon={{uri: 'Inbox'}}
          onPress={()=> this.setState({selectedTab: 'Ideas'})}
          >
          <Ideas/>
      </TabBarIOS.Item>

      <TabBarIOS.Item
      style = {styles.container}
          title="Location"
          selected={this.state.selectedTab == 'Location'}
          icon={{uri: 'Location'}}
          onPress={()=> this.setState({selectedTab: 'Location'})}
          >
          <Text>
          Placeholder for Where List
          </Text>
      </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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

AppRegistry.registerComponent('dash', () => dash);
