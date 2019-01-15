import React, { Component } from 'react';
import { Text, View, TextInput, Dimensions } from 'react-native';
import Button from 'react-native-button';

const { width } = Dimensions.get('window')//获取当前屏幕宽度


export default class Register extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { 
            username: '' ,
            password:''

        };
    }

    static navigationOptions = {
        title: '注册',
    };
    register() {
        let formData = {
          "username":this.state.username,
          "password":this.state.password
        }
      
        fetch(gUrl.url+'/register',
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
                this.props.navigation.navigate('Login');
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
            <View style={{ flex: 1, backgroundColor: 'white' , alignItems: 'center' }}>
                <View style={{ width:width-40}}>
                    <TextInput
                        placeholder='手机号'
                        onChangeText={(username) => this.setState({username})}
                    ></TextInput>
                    <View style={{ height: 1, backgroundColor: 'gray' }}></View>
                </View>
                <View style={{ width:width-40}}>
                    <TextInput
                        placeholder='设置密码'
                        onChangeText={(password) => this.setState({password})}
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
                    onPress={() => this.register()}>
                    注册
                </Button>

            </View>
        );
    }
}


