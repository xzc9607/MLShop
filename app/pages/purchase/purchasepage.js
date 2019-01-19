import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableWithoutFeedback,AsyncStorage,Alert} from 'react-native';
import Indexheader from './../components/indexheader';


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
        <Indexheader/>
        


      </View>
    );
  }
}