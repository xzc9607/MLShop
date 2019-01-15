import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from 'react-native-button';
import Minepageheader from './../../../components/minepageheader';
import { AsyncStorage } from "react-native";



import { Query } from "react-apollo";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from "graphql-tag";



// const query = gql`
// query{
//   CarInfoList{
//     content{
//       id
//       model
//     }
//   }
// }
// `;

// const GetCarInfoList = () => (<Query
//   query={query}>{
//     ({ loading, error, data }) => {
//       if (loading == true) return <View><Text>正在加载</Text></View>;
//       console.log(data.CarInfoList.content)
//       return <View><Text>成功</Text></View>
//     }
//   }
// </Query>);

function loginn() {
  let formData = {
    "name":'xzc',
    "password":'123'
  }

  fetch('http://192.168.0.112:8080/login',
  {
     method:"POST",   //请求方法
     mode: "cors",
     body:JSON.stringify(formData),   //请求体
　　　　headers: {
　　　　'Accept': 'application/json',
　　　　'Content-Type': 'application/json',
　　　　 }})
      .then((response) => {
        res=JSON.parse(response._bodyText)
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
}

export default class help extends Component {
  render() {
    return (
      <View>
      <Button
        style={{fontSize: 20, color: 'red'}}
        styleDisabled={{color: 'red'}}
        onPress={() => loginn()}>
        点击
      </Button>
        
      </View>
    );
  }

  
}

