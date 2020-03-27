import React, {Component} from 'react';
import {StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';


export default class Form extends Component <{}> {

  render (){
    return (
      <View style={styles.container}>
        <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
          placeholder = "Email"
          placeholdeTextColor = '#ffffff'
          //selectionColor = "#fff"
          //keyboardType = "email-address"
          //onSubmitEditing = {() => this.passsword.focus()}
          />
        <TextInput style = {styles.inputBox}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
          placeholder = "Password"
          secureTextEntry = {true}
          placeholdeTextColor = '#ffffff'
          //ref = {(input) => this.password = input}
          />
        <TouchableOpacity style={styles.button}>
          <Text style = {styles.buttonText }>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
inputBox:{
  width: 300 ,
  height:50,
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  borderRadius: 25,
  paddingHorizontal: 16,
  fontSize: 16,
  color: '#ffffff',
  marginVertical: 10

},
TextInput:{
 color: '#ffffff'
},
button:{
  width: 300 ,
  backgroundColor: '#009688',
  borderRadius: 25,
  marginVertical: 10,
  paddingVertical: 12
},
buttonText: {
  fontSize: 16,
  fontWeight: '500',
  color: '#ffffff',
  textAlign:'center'

}
});
