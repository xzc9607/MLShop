import React, { Component } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import Indexheader from './../../../../components/indexheader';
import Global from '../../../../Global';

const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class About extends Component {
  constructor(props){
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Indexheader/>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width:200,height:200,justifyContent: 'center',alignItems: 'center',marginTop:50}}
            source={require('./../../../../../../static/img/wechatTitle.png')}
          />
          <Text style={{fontSize:30, color:'red'}}>毕业设计</Text>
          <Text></Text>
          <Text style={{fontSize:20, color:'black'}}>指导老师</Text>
          <Text></Text>
          <Text>刘笑锋</Text>
          <Text></Text>
          <Text style={{fontSize:20, color:'black'}}>组员</Text>
          <Text></Text>
          <Text>软件1602 向子忱 16002090230</Text>
          <Text></Text>
          <Text>软件1601 周紫琳 16002090144</Text>
          <Text></Text>
        </View>
      </View>
    );
  }
}