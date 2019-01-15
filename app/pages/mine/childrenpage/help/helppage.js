import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from 'react-native-button';
import Minepageheader from './../../../components/minepageheader';
import { AsyncStorage } from "react-native";



import { Query } from "react-apollo";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from "graphql-tag";

const query = gql`
query{
  CarInfoList{
    content{
      id
      model
    }
  }
}
`;

const GetCarInfoList = () => (<Query
  query={query}>{
    ({ loading, error, data }) => {
      if (loading == true) return <View><Text>正在加载</Text></View>;
      console.log(data.CarInfoList.content)
      return <View><Text>成功</Text></View>
    }
  }
</Query>);
export default class help extends Component {
  render() {
    return (
      <View>

        <GetCarInfoList />
      </View>
    );
  }
}