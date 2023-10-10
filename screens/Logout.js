import React, { Component } from "react";
import { Text, View } from "react-native";
import firebase from "firebase";

export default class Logout extends Component {
    componentDidMount(){
        firebase.auth().signOut();//função que desconecta do firebase
        this.props.navigation.replace("Login");//função que navega para a tela de login
    }

  render() {
    return(
        <View style = {{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text>Logout</Text>;
        </View>
    ) 
  }
}