import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TextInput, Dimensions, TouchableWithoutFeedback, BackHandler, ToastAndroid } from 'react-native';
import Button from 'react-native-button';
import Global from '../Global';
import { AsyncStorage } from "react-native";
const { width } = Dimensions.get('window')//获取当前屏幕宽度


export default class Login extends Component {

    constructor(props, context) {
        super(props, context);
        AsyncStorage.clear();
        this.state = { 
            username: '' ,
            password:'',

        };
    }

    static navigationOptions = {
        header: null,

    };

    // componentWillMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    // }

    // componentWillUnmount() {
    //     BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    // }

    // onBackAndroid = () => {
    //     if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
    //         //最近2秒内按过back键，可以退出应用。
    //         BackHandler.exitApp();
    //         return false;
    //     }
    //     this.lastBackPressed = Date.now();
    //     ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    //     // return true;
    //     return true;
    // };

    login() {
        let formData = {
          "username":this.state.username,
          "password":this.state.password,
        }
      
        fetch(gUrl.httpurl+'/login',
        {
           method:"POST",   //请求方法
           mode: "cors",
           body:JSON.stringify(formData),   //请求体
      　　　　headers: {
      　　　　'Accept': 'application/json',
      　　　　'Content-Type': 'application/json',
      　　　　 }})
            .then((response) => {
              res=JSON.parse(response._bodyText)
              if(res.code==200){
                AsyncStorage.setItem('user', formData.username).then((res)=>{
                    this.props.navigation.navigate('Main');
                }).catch((res)=>{
                    console.log(formData.username)
                    alert('存入失败')
                });
                
              }else{
                  alert(res.msg)
              }
            })
            .catch((error) => {
              console.log(error)
            })
      }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                <View style={{ marginTop: 10 }}>
                    <Image
                        style={login.logintitle}
                        source={require('./../../../static/img/猛龙图标@1,5x.png')}
                    />
                </View>

                <Text style={login.font1}>猛龙汽车商城</Text>
                <Text style={login.font2}>0元起新车开回家</Text>

                <TextInput
                    style={login.textInput1}
                    placeholder={'请输入用户名'}
                    onChangeText={(username) => this.setState({username})}
                    underlineColorAndroid={'gray'}
                />
                <TextInput
                    style={login.textInput2}
                    placeholder={'请输入密码'}
                    onChangeText={(password) => this.setState({password})}
                    secureTextEntry={true}
                />

                <Button
                    style={{ fontSize: 20, color: 'white' }}
                    styleDisabled={{ color: 'red' }}
                    containerStyle={{ padding: 5, height: 40, width: 280, marginTop: 50, overflow: 'hidden', borderRadius: 12, backgroundColor: 'red' }}
                    onPress={() => this.login()}>
                    登陆
                </Button>

                <View style={{ marginTop: 40, flexDirection: 'row' }}>
                    <View style={{ width: width / 2 , justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.navigate('ForgetPassword')}>
                            <Text>忘记密码</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ width: width / 2 , justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={{ color:'red'}}>新用户注册</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>


            </View>
        );
    }
}


const login = StyleSheet.create({
    logintitle: {
        width: 111,
        height: 74,
        marginTop: 30,
        resizeMode: 'contain'
    },
    font1: {
        color: 'black',
        fontSize: 18,
        marginTop: 20
    },
    font2: {
        fontSize: 14,
        marginTop: 10
    },
    textInput1: {
        //height: 50,
        width: 280,
        marginBottom: 5,
        //textAlign: 'center',
        //flex: 5,
        fontSize: 18,
        marginTop: 40
    },
    textInput2: {
        //height: 50,
        width: 280,
        marginBottom: 5,
        //textAlign: 'center',
        //flex: 5,
        fontSize: 18,
        marginTop: -20
    },
});