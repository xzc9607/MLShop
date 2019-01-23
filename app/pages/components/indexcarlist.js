import gql from "graphql-tag";
import React, { Component } from 'react';
import { Query } from "react-apollo";
import { Alert, FlatList, Text, TouchableWithoutFeedback, View } from 'react-native';
import Indexheader from './indexheader';
import Global from '../Global';

const query = gql`
query{
    ShopList{
      content{
        id
        name
        address
      }
    }
}
`;

const GetShopList = () => (<Query
    query={query}>{
        ({ loading, error, data }) => {
            if (loading == true) return null;
            console.log(data.ShopList.content)
            return (

                <FlatList
                    data={data.ShopList.content}
                    renderItem={({ item }) =>
                        <TouchableWithoutFeedback
                            onPress={()=>{
                                Alert.alert(item.id)
                            }}>
                            <View style={{ height: 110, marginStart: 20 }}>
                                <View style={{ justifyContent: 'center', marginTop: 10 }}><Text style={{ color: 'black', fontSize: 18 }}>{item.name}</Text></View>
                                <View style={{ justifyContent: 'center', marginTop: 10 }}><Text>{item.address}</Text></View>
                                <View style={{ justifyContent: 'center', marginTop: 10 }}>
                                    <View style={{ height: 20, width: 100, backgroundColor: '#ffbf00', flexDirection: 'row', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 13, color: '#FF2d16', borderRadius: 10 }}>猛龙汽车商城</Text>
                                    </View>
                                </View>
                                <View style={{ height: 1, backgroundColor: '#ebebeb', marginTop: 10 }}></View>
                            </View>
                        </TouchableWithoutFeedback>
                    }
                />
            )
        }
    }
</Query>);


export default class IndexCarListComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Indexheader />
                <View style={{ height: 45, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ color: 'black', fontSize: 20 }}>请选择店铺</Text>
                </View>
                <View style={{ height: 1, backgroundColor: '#ebebeb' }}></View>
                <GetShopList />
            </View>
        );
    }
}