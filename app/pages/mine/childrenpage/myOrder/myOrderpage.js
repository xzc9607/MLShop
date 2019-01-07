import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import Minepageheader from './../../../components/minepageheader';


const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class myOrder extends Component {

  static navigationOptions = {
    header: null,

  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Minepageheader/>

        <View style={{ height: 50, width: width, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'black', fontSize: 18 }}>我的订单</Text></View>

        <View style={{ width: width, height: 100, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: width / 3, justifyContent: 'center', alignItems: 'center'  }}>
            <Image
              style={{ width: 100, height: 100, resizeMode: 'contain' }}
              source={require('./../../../../../static/img/car.jpg')}
            />
          </View>
          <View style={{ width: width / 3 }}>
            <Text>轩逸·纯电  新订单</Text>
            <View style={{ height: 3 }}></View>
            <Text>首付:5000元</Text>
            <View style={{ height: 3 }}></View>
            <Text>月供:5000元</Text>
            <View style={{ height: 3 }}></View>
            <Text>期数:36期</Text>
          </View>
          <View style={{ width: width / 3, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: width / 5, height: 25, backgroundColor: 'red', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'white' }}>分享砍价</Text></View>
            <View style={{ height: 10 }}></View>
            <View style={{ width: width / 5, height: 25, backgroundColor: 'red', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'white' }}>完善信息</Text></View>
          </View>
        </View>

      </View>
    );
  }
}