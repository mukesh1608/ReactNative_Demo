/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './app/Home';
import Details from './app/Details';
import Login from './app/Login';
import Loading from './app/Loading';

import {createSwitchNavigator, createStackNavigator} from 'react-navigation';

const AppStack = createStackNavigator({ 
  Home: Home, Details: Details 
});
const AuthStack = createStackNavigator({ 
  SignIn: Login 
});

export default createSwitchNavigator(
  {
    AuthLoading: Loading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

