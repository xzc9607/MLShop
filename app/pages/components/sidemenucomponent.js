import React, { Component } from 'react';
import { Alert, AsyncStorage, FlatList, Text, TouchableWithoutFeedback, View } from 'react-native';
import Indexheader from './indexheader';
import Global from '../Global';

export default class Sidemenucomponent extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props);

        this.state={
            list:[]
        };

        //获取店铺列表
        fetch(gUrl.httpurl+'/getshoplist')
            .then((response) => {
              this.res=JSON.parse(response._bodyText);
              this.setState({list:this.res});
            })
            .catch((error) => {
              console.log(error)
            })
    }
  


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Indexheader />
                <View style={{ height: 45, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ color: 'black', fontSize: 20 }}>请选择店铺</Text>
                </View>
                <View style={{ height: 1, backgroundColor: '#ebebeb' }}></View>
                <FlatList
                    data={this.state.list}
                    renderItem={({ item }) =>
                        <TouchableWithoutFeedback
                            onPress={()=>{
                                Alert.alert('已选择'+item.name);
                                AsyncStorage.setItem('number',''+item.number+'');
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
            </View>
        );
    }
}