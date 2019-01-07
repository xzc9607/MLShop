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

                <View style={{ height: 50, width: width, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'black', fontSize: 18 }}>我的咨询</Text></View>



                


            </View>
        );
    }
}