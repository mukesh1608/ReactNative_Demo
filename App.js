/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { 
   Text,
   View, 
   StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './app/components/Login';
import Profile from './app/components/Profile';
import ForgotPassword from './app/components/ForgotPassword';

const Application = StackNavigator({
    Home: { screen : Login },
    Profile: {screen : Profile},
    ForgotPass: {screen : ForgotPassword},
    },{
        navigationOptions:{
        header : false,
      }
});

export default class App extends React.Component {
  render() {
    return (
          <Application />
    );
  }
}
