import React, { Component } from 'react';
import { Text, View, Image, Dimensions, ScrollView } from 'react-native';
import Minepageheader from './../../../components/minepageheader';


const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class understanding extends Component {
  static navigationOptions = {
    header: null,

  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Minepageheader/>

        <View style={{ height: 50, width: width, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'black', fontSize: 18 }}>了解猛龙汽车商城</Text></View>
        <ScrollView>
          <Image
            style={{ height:500,width: width, resizeMode: 'contain' }}
            source={require('./../../../../../static/img/understanding/1.png')}
          />
          <Image
            style={{ height:500,width: width, resizeMode: 'contain' }}
            source={require('./../../../../../static/img/understanding/2.png')}
          />
          <Image
            style={{ height:500,width: width, resizeMode: 'contain' }}
            source={require('./../../../../../static/img/understanding/3.png')}
          />
          <Image
            style={{ height:500,width: width, resizeMode: 'contain' }}
            source={require('./../../../../../static/img/understanding/4.png')}
          />
          <Image
            style={{ height:500,width: width, resizeMode: 'contain' }}
            source={require('./../../../../../static/img/understanding/5.png')}
          />
          <Image
            style={{ height:500,width: width, resizeMode: 'contain' }}
            source={require('./../../../../../static/img/understanding/6.png')}
          />
          <Image
            style={{ height:500,width: width, resizeMode: 'contain' }}
            source={require('./../../../../../static/img/understanding/7.png')}
          />
          <Image
            style={{ height:500,width: width, resizeMode: 'contain' }}
            source={require('./../../../../../static/img/understanding/8.png')}
          />
          <Image
            style={{ height:500,width: width, resizeMode: 'contain' }}
            source={require('./../../../../../static/img/understanding/9.png')}
          />
        </ScrollView>


      </View>
    );
  }
}