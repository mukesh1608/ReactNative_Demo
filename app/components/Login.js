import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,TextInput,Keyboard
} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class Login extends React.Component {
  
  static navigationOptions = {
    header: null,
    title: 'Login',
    headerStyle: {
      backgroundColor: '#16a085',
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerTruncatedBackTitle: '',
  }

  constructor (props){
    super(props);
    this.state ={
      username : '',
      password : ''
    };
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
            {
               <View style={styles.container}>
                  <Text style={styles.header}>- LOGIN -</Text>

                  <TextInput  
                      style={styles.textInput} placeholder='Username'
                      onChangeText={
                        username => this.setState({username})
                      } 
                      underlineColorAndroid='transparent'
                  />

                  <TextInput  
                      style={styles.textInput} placeholder='Password'
                      onChangeText={
                        password => this.setState({password})
                      } 
                      underlineColorAndroid='transparent' secureTextEntry = {true}
                  />

                  <TouchableOpacity
                      style={styles.btn}
                      onPress={this.login}>
                      <Text>Log In</Text>
                  </TouchableOpacity>

            </View> 
          }

      </KeyboardAvoidingView>
    );
  }

  login = () => {

    const {username,password} = this.state
    if (username == "")
    {
        alert("Please fill the user name.");
    }
    else if (password == "")
    {
        alert("Please fill the password.");
    }
    else
    {
        this.props.navigation.push('Profile');
    }
    Keyboard.dismiss()
    }
    
}

const styles = StyleSheet.create({
      wrapper:{
        flex:1,
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3',
        paddingLeft: 40,
        paddingRight: 40,
      },
      header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#ffffff',
        fontWeight: 'bold',
      },
      textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#ffffff',
      },
      btn: {
        alignSelf: 'stretch',
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#01c853',
      }
});