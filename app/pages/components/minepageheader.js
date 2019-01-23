import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import Global from '../Global';

export default class Minepageheader extends Component {
    render() {
        return (
            <View style={{ height: 45, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center' }} >
                    <Image
                        style={{ width: 45, height: 45, resizeMode: 'contain', marginLeft: -65, }}
                        source={require('./../../../static/img/猛龙图标.png')}
                    />
                    <Text style={{ fontSize: 20, color: 'black', marginTop: 10, marginStart: 30 }}>猛龙汽车商城</Text>
                </View>
        );
    }
}