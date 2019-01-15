import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import Minepageheader from './../../../components/minepageheader';
import { AsyncStorage } from "react-native";



const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class userInformation extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:''
        }

        AsyncStorage.getItem('user', function (error, result) {
            if (error) {
                alert('读取失败')
            }else {
                console.log(result)
                //JSON.parse(result);
            }
        }).then(result=>{
            this.setState({'username':JSON.parse(result).username});
            console.log(this.state.username);
        })
    
    }

    static navigationOptions = {
        header: null,

    };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Minepageheader/>

                <View style={{ height: 50, width: width, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'black', fontSize: 18 }}>编辑资料</Text></View>
                <View style={{ height: 1, backgroundColor: '#ebebeb' }}></View>

                <View style={{ marginStart: 20, width: width - 40 }}>
                    <View style={{ height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: (width - 40) / 4 }}><Text style={{ fontSize: 15, color: 'black' }}>头像</Text></View>
                        <View style={{ width: (width - 40) / 4 * 2 }}>
                            <View style={{marginStart:(width - 40) / 2}}>
                                <Image
                                    style={{ height: 50, width: 50 }}
                                    source={{uri: 'https://mlshopimg.oss-cn-hangzhou.aliyuncs.com/'+this.state.username+'.png'}} />
                            </View>

                        </View>
                        <View style={{ width: (width - 40) / 4 }}>
                            <View style={{marginStart:(width - 40) / 5}}>
                                <Icon name='right' size={20} color="gray" />
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#ebebeb' }}></View>

                </View>

                <View style={{ marginStart: 20, width: width - 40 }}>
                    <View style={{ height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: (width - 40) / 4 }}><Text style={{ fontSize: 15, color: 'black' }}>昵称</Text></View>
                        <View style={{ width: (width - 40) / 4 * 2,alignItems:'center' }}>
                            <View>
                                <Text>{this.state.username}</Text>
                            </View>

                        </View>
                        <View style={{ width: (width - 40) / 4 }}>
                            <View style={{marginStart:(width - 40) / 5}}>
                                <Icon name='right' size={20} color="gray" />
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#ebebeb' }}></View>

                </View>

                <View style={{ marginStart: 20, width: width - 40 }}>
                    <View style={{ height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: (width - 40) / 4 }}><Text style={{ fontSize: 15, color: 'black' }}>手机号</Text></View>
                        <View style={{ width: (width - 40) / 4 * 2,alignItems:'center' }}>
                            <View>
                                <Text>{this.state.username}</Text>
                            </View>

                        </View>
                        <View style={{ width: (width - 40) / 4 }}>
                            <View style={{marginStart:(width - 40) / 5}}>
                                <Icon name='right' size={20} color="gray" />
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#ebebeb' }}></View>

                </View>
                <View style={{ marginStart: 20, width: width - 40 }}>
                    <View style={{ height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: (width - 40) / 4 }}><Text style={{ fontSize: 15, color: 'black' }}>更改密码</Text></View>
                        <View style={{ width: (width - 40) / 4 * 2 }}>
                            <View style={{marginStart:100}}>
                                <Text></Text>
                            </View>

                        </View>
                        <View style={{ width: (width - 40) / 4 }}>
                            <View style={{marginStart:(width - 40) / 5}}>
                                <Icon name='right' size={20} color="gray" />
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#ebebeb' }}></View>

                </View>
                <View style={{ marginStart: 20, width: width - 40 }}>
                    <View style={{ height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: (width - 40) / 4 }}><Text style={{ fontSize: 15, color: 'black' }}>身份认证</Text></View>
                        <View style={{ width: (width - 40) / 4 * 2 ,alignItems:'center'}}>
                            <View>
                                <Text>未通过</Text>
                            </View>

                        </View>
                        <View style={{ width: (width - 40) / 4 }}>
                            <View style={{marginStart:(width - 40) / 5}}>
                                <Icon name='right' size={20} color="gray" />
                            </View>
                        </View>
                    </View>
                    

                </View>
                <View style={{ height: 1, backgroundColor: '#ebebeb' }}></View>


            </View>
        );
    }
}