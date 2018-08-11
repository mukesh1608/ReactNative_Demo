import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet,TextInput,KeyboardAvoidingView,TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TextField} from 'react-native-material-textfield'

export default class Profile extends React.Component {

  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
      backgroundColor: '#e74c3c', // <-- orangey red
    },
    headerTitleStyle: {
      color: 'white',
    },
    headerBackTitleStyle: {
      color: 'white'
    },
  }

  state = {
    phone: '',
  };

  render() {

    let { phone } = this.state;

    return (
        
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
            <View style={styles.container}>
                  <Text style={styles.header}>- PROFILE -</Text>

                  {/* <TextField alignSelf = 'stretch'
                      textColor = '#FF0000' 
                      label='Phone number'
                      value={phone}
                      onChangeText={ (phone) => this.setState({ phone }) }
                  /> */}
                  <TextInput  
                      style={styles.textInput} placeholder='Email'
                      onChangeText={(text) => this.validate({text})} 
                      underlineColorAndroid='transparent'
                  /> 
                  <TouchableOpacity
                      style={styles.btn}
                      onPress={this.checkEmail}>
                      <Text style={{color:'white',fontWeight: "bold", fontSize:20}}>Log In</Text>
                  </TouchableOpacity>           
            </View>
        </KeyboardAvoidingView>

    );
  }

  checkEmail = () => {
    console.log('Mukesh');
    this.props.navigation.push('ForgotPass');

    // console.log(this.state.text_input_email);
    // alert('Check Email');
      // if (!this.validateEmail(this.state.text_input_email)) {
      //   // not a valid email
      //   alert('not a valid email');

      // } else {
      //   // valid email
      //   alert('valid email');

      // }
    }

    validate = (text) => {
          console.log(text);
          let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
          console.log(reg.test(text));
          if(reg.test(text) === false)
          {
          console.log("Email is Not Correct");
          this.setState({email:text})
          return false;
            }
          else {
            this.setState({email:text})
            console.log("Email is Correct");
          }
      }

      validateEmail = (email) => {
        var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        console.log(re.test(email));
          return re.test(email);
      };
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
      marginBottom: 40,
      backgroundColor: '#ffffff',
    },
    btn: {
      alignSelf: 'stretch',
      padding: 20,
      alignItems: 'center',
      backgroundColor: '#01c853',
    }
});