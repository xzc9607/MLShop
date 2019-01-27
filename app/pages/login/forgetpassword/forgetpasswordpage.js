import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions } from 'react-native';
import Button from 'react-native-button';
import Global from '../../Global';

const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class Forgetpassword extends Component {

    static navigationOptions = {
        title: '忘记密码',
    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' , alignItems: 'center' }}>
                <View style={{ width:width-40}}>
                    <TextInput
                        placeholder='请输入您注册时的手机号'
                    ></TextInput>
                    <View style={{ height: 1, backgroundColor: 'gray' }}></View>
                </View>
                <View style={{ width:width-40}}>
                    <TextInput
                        placeholder='设置新密码'
                    ></TextInput>
                    <View style={{ height: 1, backgroundColor: 'gray' }}></View>
                </View>
                <View style={{ width:width-40}}>
                    <TextInput
                        placeholder='请再次输入密码'
                    ></TextInput>
                    <View style={{ height: 1, backgroundColor: 'gray' }}></View>
                </View>
                <View style={{ width:width-40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{width:((width-40)/3)*2}}>
                        <TextInput
                            placeholder='请输入短信验证码'
                        ></TextInput>
                        <View style={{ height: 1, backgroundColor: 'gray' }}></View>
                    </View>

                    <View style={{width:(width-40)/3}}><Text style={{ color: 'red' }}>       获取验证码</Text></View>
                </View>

                <Button
                    style={{ fontSize: 20, color: 'white' }}
                    styleDisabled={{ color: 'red' }}
                    containerStyle={{ padding: 5, height: 40, width:width-40, marginTop: 50, overflow: 'hidden', borderRadius: 12, backgroundColor: 'red' }}
                    onPress={() => this.props.navigation.navigate('Main')}>
                    保存密码
                </Button>
            </View>
        );
    }
}


