import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TextInput, Alert, Button } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import Minepageheader from './../../../components/minepageheader';

const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class userInformation extends Component {

    static navigationOptions = {
        header:null
        //headerTitle: 'afadsf',
        //title: 'Home',
        

    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Minepageheader/>
                <View style={{ height: 50, width: width, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 18 }}>意见反馈</Text>
                </View>
                <View style={{ height: 40, backgroundColor: '#ebebeb', justifyContent: 'center'}}>
                    <TextInput placeholder={'请输入标题'}/>
                </View>
                <View style={{ height: 5, flexDirection: 'row' }}>

                </View>
                <View style={{ height: 300, backgroundColor: '#ebebeb', justifyContent: 'center' }}>
                    <TextInput placeholder={'请输入详细问题'}/>
                </View>
                <View style={{ height: 5, flexDirection: 'row' }}>

                </View>
                <View style={{ height: 40, backgroundColor: '#ebebeb', justifyContent: 'center' }}>
                    <TextInput placeholder={'请输入您的联系方式'}/>
                </View>
                <View style={{ height: 50, flexDirection: 'row' }}></View>

                <Button
                    onPress={()=> (alert('已提交'))}
                    title="提交"
                    color="red"
                    accessibilityLabel="Learn more about this purple button"/>






            </View>
        );
    }
}