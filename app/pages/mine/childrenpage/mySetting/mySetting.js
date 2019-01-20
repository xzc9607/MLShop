import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableWithoutFeedback,AsyncStorage,Alert} from 'react-native';
import Minepageheader from './../../../components/minepageheader';


const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class mySetting extends Component {
  constructor(props){
    super(props);
  }
  static navigationOptions = {
    header: null,

  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Minepageheader/>

        <View style={{ height: 50, width: width, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'black', fontSize: 18 }}>设置</Text></View>

        <View style={{ height: 10, backgroundColor: '#ebebeb' }}></View>
        <View style={{ height: 1, backgroundColor: '#cccccc' }}></View>
        <View style={{ height: 40, marginStart: 20, justifyContent: 'center' }}>
        <TouchableWithoutFeedback
            onPress={()=>{
              AsyncStorage.clear().then(
                alert('清除成功！')
              )
            }}><Text style={{ fontSize: 15, color: 'black' }}>清除缓存</Text></TouchableWithoutFeedback>
          
        </View>
        <View style={{ height: 1, backgroundColor: '#cccccc', marginStart: 20 }}></View>
        <View style={{ height: 40, marginStart: 20, justifyContent: 'center' }}>
          <TouchableWithoutFeedback
              onPress={()=>{this.props.navigation.navigate('About')}}>
              <Text style={{ fontSize: 15, color: 'black' }}>关于猛龙汽车商城</Text>
          </TouchableWithoutFeedback>
          
        </View>
        <View style={{ height: 1, backgroundColor: '#cccccc' }}></View>
        <View style={{ height: 10, backgroundColor: '#ebebeb' }}></View>
        <View style={{ height: 1, backgroundColor: '#cccccc' }}></View>
        <View style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableWithoutFeedback
            onPress={()=>{
              AsyncStorage.clear().then(
                this.props.navigation.navigate('Login')
              )
              //this.props.navigation.navigate('Login')
            }}><Text style={{ fontSize: 15, color: 'black' }}>退出账号</Text></TouchableWithoutFeedback>
          
        </View>
        <View style={{ height: 1, backgroundColor: '#cccccc' }}></View>



      </View>
    );
  }
}