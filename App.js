import React, {Component} from 'react';
import {Platforrm, StyleSheet, Text, View , StatusBar} from 'react-native';

//import Login from './src/pages/Login' ;
//import Signup from './src/pages/Signup' ;
import Routes from './src/Routes' ;

export default class App extends Component <{}> {
  render (){
    return (
      <View style={styles.container}>
      <StatusBar
      backgroundColor = '#00867d'
      barStyle = "light-content"
      />
        <Text style = {{color: '#ffffff', fontSize:35 ,paddingVertical:100,}}>thenorthmall</Text>
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4db6ac',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:70,
  },
});
