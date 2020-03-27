import React, {Component} from 'react';
import {StyleSheet, Text, View , StatusBar, TouchableOpacity} from 'react-native';

import Form from '../components/Form' ;
import {Actions} from 'react-native-router-flux';

export default class Login extends Component <{}> {
  signup() {
    Actions.signup()
  }
  render (){
    return (
      <View style = {styles.container} >

          <Form type= "Login"/>
          <View style ={styles.signupTextCont}>
            <Text style={styles.signupText}>Don't have an account yet?</Text>
            <TouchableOpacity onPress = {this.signup}><Text style = {styles.signupButton, {fontSize: 16, fontWeight: 'bold'}}> Signup!</Text></TouchableOpacity>
          </View>
        </View>

            )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4db6ac',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  signupTextCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:16,
    flexDirection: 'row',


  },
  signupText:{
    fontSize:16,


  },


});
