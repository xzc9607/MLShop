import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import Minepageheader from './../../../components/minepageheader';


const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class mySetting extends Component {
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
          <Text style={{ fontSize: 15, color: 'black' }}>清除缓存</Text>
        </View>
        <View style={{ height: 1, backgroundColor: '#cccccc', marginStart: 20 }}></View>
        <View style={{ height: 40, marginStart: 20, justifyContent: 'center' }}>
          <Text style={{ fontSize: 15, color: 'black' }}>关于猛龙汽车商城</Text>
        </View>
        <View style={{ height: 1, backgroundColor: '#cccccc' }}></View>
        <View style={{ height: 10, backgroundColor: '#ebebeb' }}></View>
        <View style={{ height: 1, backgroundColor: '#cccccc' }}></View>
        <View style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 15, color: 'black' }}>退出账号</Text>
        </View>
        <View style={{ height: 1, backgroundColor: '#cccccc' }}></View>



      </View>
    );
  }
}