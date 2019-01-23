import React, { Component } from 'react';
import { Dimensions, Text, TouchableWithoutFeedback, View } from 'react-native';
import Minepageheader from './../../../components/minepageheader';
import Global from '../Global';

const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class userInformation extends Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Minepageheader/>
                <View style={{ height: 50, width: width, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'black', fontSize: 18 }}>我的关注</Text></View>
                <View style={{ height: 10, backgroundColor: '#ebebeb' }}></View>
                <View style={{height:40,justifyContent:'center'}}><TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('MyFocusCar')}><View style={{justifyContent:'center',marginStart:20}}><Text style={{color:'black'}}>关注车辆</Text></View></TouchableWithoutFeedback></View>
                <View style={{ height: 10, backgroundColor: '#ebebeb' }}></View>
            </View>
        );
    }
}