import React, {Component} from 'react';
import {StyleSheet, Text, View , StatusBar, TouchableOpacity} from 'react-native';

import Form from '../components/Form' ;
import {Actions} from 'react-native-router-flux';

export default class Signup extends Component <{}> {
  goBack(){
    Actions.pop();
  }
  render (){
    return (
      <View style = {styles.container} >

          <Form type= "Signup"/>
          <View style ={styles.signupTextCont}>
            <Text style={styles.signupText}>Already have an account?</Text>
            <TouchableOpacity onPress = {this.goBack}><Text style = {styles.signupButton, {fontSize: 16, fontWeight: 'bold'}}> Sign in!</Text></TouchableOpacity>
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
