import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableWithoutFeedback,AsyncStorage,Alert} from 'react-native';
import Indexheader from './../components/indexheader';


const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class Purchase extends Component {
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

        <View>
            <Text>联系电话</Text>
        </View>

        <View>
            <Text>订单内容</Text>
        </View>

        <View>
            <Text>预约联系OR到店</Text>
        </View>

        <View>
            <Text>付款方式</Text>
        </View>

        <View>
            <Text>提交</Text>
        </View>

        

        


      </View>
    );
  }
}