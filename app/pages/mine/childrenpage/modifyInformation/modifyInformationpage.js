import React, { Component } from 'react';
import { Dimensions, Text, View } from 'react-native';
import Minepageheader from './../../../components/minepageheader';
import Global from '../../../Global';
const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class modifyinformation extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Minepageheader/>
        <View style={{ height: 50, width: width, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'black', fontSize: 18 }}>XXXXXX</Text></View>
      </View>
    );
  }
}