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

  getshoplist(){
   
    fetch(gUrl.url+'/getshoplist')
        .then((response) => {
          res=JSON.parse(response._bodyText)
          console.log(res);
        })
        .catch((error) => {
          console.log(error)
        })
  }

  render() {
    return (
      <View>
      <Button
                    style={{ fontSize: 20, color: 'white' }}
                    styleDisabled={{ color: 'red' }}
                    containerStyle={{ padding: 5, height: 40, width: 280, marginTop: 50, overflow: 'hidden', borderRadius: 12, backgroundColor: 'red' }}
                    onPress={() => this.getshoplist()}>
                    点击
                </Button>

        
      </View>
    );
  }
}