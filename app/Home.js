/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,AsyncStorage,Button} from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
      };
    
      render() {
        return (
          <View style={{flex:1}}>
            <Button title="Show me more of the app" onPress={this._showMoreApp} />
            <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
          </View>
        );
      }
    
      _showMoreApp = () => {
        this.props.navigation.navigate('Details');
      };
    
      _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };
}