/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './app/HomeScreen'
import SettingsScreen from './app/SettingsScreen'

import {Icon, Button, Container, Body,Content,Header} from 'native-base';

class App extends Component
{
  render(){
    return(
      <MyApp />
    );
  }
}

const CustomDrawerContentComponent = (props) =>(
    <Container>
        <Header style={{height:150}}>
          <Body>
            <Image style = {{width:120, height:120, borderRadius:60}} 
            source = {require('./user.png')}/>
          </Body>
        </Header>
        <Content>
          <DrawerItems {...props} />
        </Content>
    </Container>
)

const MyApp = DrawerNavigator({
  Home:{
    screen: HomeScreen
  },
  Settings:{
    screen: SettingsScreen
  }
},
{
    initialRouteName :'Home',
    contentComponent : CustomDrawerContentComponent,
    drawerOpenRoute : 'DrawerOpen', 
    drawerCloseRoute : 'DrawerClose', 
    drawerToggleRoute : 'DrawerToggle'
})

export default App;

