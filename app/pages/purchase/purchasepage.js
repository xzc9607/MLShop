import React, { Component } from 'react';
import { Button, Dimensions, Image, ScrollView, StyleSheet, Switch, Text, View,AsyncStorage,Alert } from 'react-native';
import Indexheader from './../components/indexheader';


const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class Purchase extends Component {
  constructor(props){
    super(props);
    this.state={
      trueSwitchIsOn1: true,
      falseSwitchIsOn1: false,
      trueSwitchIsOn2: true,
      falseSwitchIsOn2: false,
      username:'',
      userid:null
    }

    AsyncStorage.getItem('user', function (error, result) {
      if (error) {
          alert('读取失败')
      }else {
          //console.log(result)
          //JSON.parse(result);
      }
  }).then(result=>{
      this.setState({'username':result});
      fetch(gUrl.httpurl+'/getuserlist')
                .then((response) => {
                  this.res=JSON.parse(response._bodyText);
                  console.log(this.res);
                  for(var i=0;i<this.res.length;i++){
                      if(this.res[i].username==this.state.username){
                        this.setState({userid:this.res[i].id});
                      }
                  }
                  //console.log(this.state.userid);
                })
                .catch((error) => {
                  console.log(error)
                })

  })
}

  static navigationOptions = {
    header: null,

  };

  add(){
    let formData = {
      "userid":this.state.userid,
      "carid":this.props.navigation.state.params[0].id
    }
    console.log(formData);
  
    fetch(gUrl.httpurl+'/addorder',
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
          if(res.code==201){
            Alert.alert('提交成功')
            
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
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Indexheader/>
        <ScrollView style={{ backgroundColor: 'white' }}>

        <View style={{height:50,flexDirection:'row'}}>
          <View style={{width:2*width/5,justifyContent: 'center', alignItems: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center',flexDirection:'row'}}>
              <Text style={{fontSize:17}}>联系电话:</Text><Text style={{color:'red'}}>*</Text>
            </View>  
          </View>

          <View style={{width:3*width/5,justifyContent: 'center', alignItems: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize:17,color:'black'}}>13333333333</Text>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: 'white' }}>
          <View style={styles.listtext}>
            <View style={{ width: 2*width / 5, justifyContent: 'center', alignItems: 'center', }}>
              <Image resizeMode='stretch' style={styles.listimage}
                     source={require('./../../../static/img/car.jpg')} />
            </View>
            <View style={styles.listbody}>
                <View style={{ width: 3*width / 5, marginStart: 20 }}>
                  <Text style={{ color: 'black', fontSize: 19 }}>{this.props.navigation.state.params[0].brend}</Text>
                  <Text style={{ color: 'black', fontSize: 19 }}>{this.props.navigation.state.params[0].model}</Text>
                  <Text>{this.props.navigation.state.params[0].guideprice}</Text>
                  <Text style={{ color: '#FF2d16' }}>首付0元 月供6000元</Text>
                </View>
            </View>
          </View>
        </View>

        <View style={{height:50,flexDirection:'row'}}>
          <View style={{width:width/2,justifyContent: 'center', alignItems: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center',flexDirection:'row'}}>
              <Text style={{fontSize:17}}>接受通知？(短信/电话)</Text>
            </View>  
          </View>

          <View style={{width:width/2,justifyContent: 'center', alignItems: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Switch
                onValueChange={(value) => this.setState({falseSwitchIsOn1: value})}
                style={{marginBottom:10,marginTop:10}}
                value={this.state.falseSwitchIsOn1} />
            </View>
          </View>
        </View>

        <View style={{height:50,flexDirection:'row'}}>
          <View style={{width:width/2,justifyContent: 'center', alignItems: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center',flexDirection:'row'}}>
              <Text style={{fontSize:17}}>到店付款？</Text>
            </View>  
          </View>

          <View style={{width:width/2,justifyContent: 'center', alignItems: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Switch
                onValueChange={(value) => this.setState({falseSwitchIsOn2: value})}
                style={{marginBottom:10,marginTop:10}}
                value={this.state.falseSwitchIsOn2} />
            </View>
          </View>
        </View>

        

        

        

        </ScrollView>
        <View>
          <Button
            onPress={()=> this.add()}
            title="提交订单"
            color="red"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      //justifyContent: 'center',
      //alignItems: 'stretch',
  },
  center: {
      height: 45,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'center'

  },
  center2: {
      //height: 45,
      backgroundColor: 'white',
      //flexDirection: 'row',
      alignItems: 'center',
      marginTop: -5


  },
  logo: {
      width: 45,
      height: 45,
      resizeMode: 'contain',
      marginLeft: -50,
  },
  text1: {
      fontSize: 20,
      color: 'black',
      marginTop: 10,
      marginStart: 5
      //marginRight:-40
  },
  text2: {
      fontSize: 11,
      //color: 'black',
      //marginTop: 10,
      //marginStart:5
      //marginRight:-40
  },
  tabBarIcon: {
      width: 21,
      height: 21,
  },
  swiperview: {
      height: 150,
  },
  swiperview2: {
      height: 20,
      backgroundColor: 'white',
      alignItems: 'center',
  },
  wrapper: {
      height: 50
  },
  slide: {
      justifyContent: 'center',
      backgroundColor: 'transparent'
  },
  image: {
      width,
  },
  paginationStyle: {
      bottom: 6,
  },
  dotStyle: {
      width: 22,
      height: 3,
      backgroundColor: '#fff',
      opacity: 0.4,
      borderRadius: 0,
  },
  activeDotStyle: {
      width: 22,
      height: 3,
      backgroundColor: '#fff',
      borderRadius: 0,
  },
  zero: {
      height: 150,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',

  },
  zerobox: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
      width: (width / 8) * 7,
      backgroundColor: '#FF2d16',
      borderRadius: 10,
      flexDirection: 'row',


  },
  listtext: {
      height: 130,
      flexDirection: 'row',
  },
  listbody: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  listimage: {
      height: 120,
      width: width / 3,
      resizeMode: 'contain'
  }
});
