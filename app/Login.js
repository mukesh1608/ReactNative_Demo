/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,AsyncStorage,Button} from 'react-native';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
    };
    render() {
        return (
          <View style={{flex:1}}>
            <Button title="Sign in!" onPress={this._signInAsync} />
          </View>
        );
      }
    
      _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
      };
}
