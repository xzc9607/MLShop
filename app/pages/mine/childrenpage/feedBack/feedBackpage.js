import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import Minepageheader from './../../../components/minepageheader';
const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class userInformation extends Component {

    static navigationOptions = {
        header: null,

    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Minepageheader/>
                <View style={{ height: 50, width: width, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 18 }}>意见反馈</Text>
                </View>
                <View style={{ height: 40, backgroundColor: '#ebebeb', justifyContent: 'center' }}>
                    <Text style={{ marginStart: 20 }}>问题分类</Text>
                </View>
                <View style={{ height: 100, flexDirection: 'row' }}>

                </View>
                <View style={{ height: 40, backgroundColor: '#ebebeb', justifyContent: 'center' }}>
                    <Text style={{ marginStart: 20 }}>问题描述</Text>
                </View>
                <View style={{ height: 200, flexDirection: 'row' }}>

                </View>
                <View style={{ height: 40, backgroundColor: '#ebebeb', justifyContent: 'center' }}>
                    <Text style={{ marginStart: 20 }}>联系方式</Text>
                </View>
                <View style={{ height: 200, flexDirection: 'row' }}>

                </View>






            </View>
        );
    }
}