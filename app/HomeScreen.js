/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import {Icon, Button, Container, Content,Header,Left} from 'native-base';

class HomeScreen extends Component
{
    static navigationOptions ={
        drawerIcon:(
            <Image source={require('./home.png')} style = {{height:24, width:24}}/>
        )
    }
  render(){
    return(
        <Container>
            <Header>
                <Left>
                    <Icon name ="ios-menu" onPress = {() => this.props.navigation.openDrawer()}/> 
                </Left>
            </Header>
            <Content contentContainerStyle={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Text>Home Screen</Text>
            </Content>
             
        </Container>
    );
  }
}

export default HomeScreen;