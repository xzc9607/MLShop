import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';


export default class Indexheader extends Component {


    render() {
        return (
            <View>
                <View style={{ height: 45, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center' }} >
                    <Image
                        style={{ width: 45, height: 45, resizeMode: 'contain', marginLeft: -50, }}
                        source={require('./../../../static/img/猛龙图标.png')}
                    />
                    <Text style={{ fontSize: 20, color: 'black', marginTop: 10, marginStart: 5 }}>猛龙汽车商城</Text>
                </View>
                <View style={{ backgroundColor: 'white', alignItems: 'center', marginTop: -5 }}>
                    <Text style={{ fontSize: 11 }}>0元起新车开回家   中国开创者</Text>
                </View>
            </View>
        );


    }

}