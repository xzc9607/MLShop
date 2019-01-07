import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import Indexheader from './indexheader';


export default class Sidemenucomponent extends Component {


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Indexheader/>

                <View style={{ height: 45, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ color: 'black', fontSize: 20 }}>请选择店铺</Text>
                </View>
                <View style={{ height: 1, backgroundColor: '#ebebeb' }}></View>

                <View style={{ height: 110, marginStart: 20 }}>
                    <View style={{ justifyContent: 'center', marginTop: 10 }}><Text style={{ color: 'black', fontSize: 18 }}>温州茶山门店</Text></View>
                    <View style={{ justifyContent: 'center', marginTop: 10 }}><Text>温州市瓯海区茶山街道梅泉大街12号122</Text></View>
                    <View style={{ justifyContent: 'center', marginTop: 10 }}>
                        <View style={{ height: 20, width: 100, backgroundColor: '#ffbf00', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 13, color: '#FF2d16', borderRadius: 10 }}>猛龙汽车商城</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#ebebeb', marginTop: 10 }}></View>
                </View>

                <View style={{ height: 110, marginStart: 20 }}>
                    <View style={{ justifyContent: 'center', marginTop: 10 }}><Text style={{ color: 'black', fontSize: 18 }}>温州茶山门店2</Text></View>
                    <View style={{ justifyContent: 'center', marginTop: 10 }}><Text>温州市瓯海区茶山街道梅泉大街</Text></View>
                    <View style={{ justifyContent: 'center', marginTop: 10 }}>
                        <View style={{ height: 20, width: 100, backgroundColor: '#ffbf00', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 13, color: '#FF2d16', borderRadius: 10 }}>猛龙汽车商城</Text>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#ebebeb', marginTop: 10 }}></View>
                </View>

            </View>

        );


    }

}