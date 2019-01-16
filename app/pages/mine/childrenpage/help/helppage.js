import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from 'react-native-button';
import Minepageheader from './../../../components/minepageheader';
import { AsyncStorage } from "react-native";



import { Query } from "react-apollo";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from "graphql-tag";


export default class help extends Component {
  constructor(props){
    super(props);
    
  }

  abc(){
   
    AsyncStorage.getItem('user', function (error, result) {
      if (error) {
          alert('读取失败')
      }else {
          console.log(result)
          //JSON.parse(result);
      }
  }).then(result=>{
      this.setState({'username':JSON.parse(result).username});
      console.log(this.state.username);
  }).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ');

      })
  }

  def(){
    let formData = {
      "username":'xzc',
      "password":'xzc'
    }

    AsyncStorage.setItem('user', formData).catch((error=>{
      console.log('asf');
    }));
  }



  render() {
    return (
      <View>
      <Button
                    style={{ fontSize: 20, color: 'white' }}
                    styleDisabled={{ color: 'red' }}
                    containerStyle={{ padding: 5, height: 40, width: 280, marginTop: 50, overflow: 'hidden', borderRadius: 12, backgroundColor: 'red' }}
                    onPress={() => this.abc()}>
                    点击2
                </Button>

                <Button
                    style={{ fontSize: 20, color: 'white' }}
                    styleDisabled={{ color: 'red' }}
                    containerStyle={{ padding: 5, height: 40, width: 280, marginTop: 50, overflow: 'hidden', borderRadius: 12, backgroundColor: 'red' }}
                    onPress={() => this.def()}>
                    点击1
                </Button>

        
      </View>
    );
  }
}