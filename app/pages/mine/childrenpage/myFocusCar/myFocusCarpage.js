import React, { Component } from 'react';
import { Text, View, Image, Dimensions ,AsyncStorage,FlatList} from 'react-native';
import Minepageheader from './../../../components/minepageheader';


const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class myFocusCar extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      userid:null,
      data:null,
    }

    this.car=[]

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
                  //console.log(this.res);
                  for(var i=0;i<this.res.length;i++){
                      if(this.res[i].username==this.state.username){
                        this.setState({userid:this.res[i].id});
                      }
                  }
                  //console.log(this.state);
                  fetch(gUrl.httpurl+'/getfocuslistbyuserid?userid='+this.state.userid)
                .then((response) => {
                    this.res=JSON.parse(response._bodyText);
                    this.setState({'data':this.res})
                    console.log(this.state.data)
                    for(var j=0;j<this.state.data.length;j++){
                      fetch(gUrl.httpurl+'/findcarbyid?id='+this.state.data[j].carid)
                      .then((response) => {
                        this.res=JSON.parse(response._bodyText);
                        this.car.push(this.res[0])
                        
                  //console.log(this.state.userid);
                })
                .catch((error) => {
                  console.log(error)
                })
                    }
                    console.log(this.car)
            })
            .catch((error) => {
              console.log(error)
            })
                })
                .catch((error) => {
                  console.log(error)
                })

  })

    
  }

  static navigationOptions = {
    header: null,

  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Minepageheader/>

        <View style={{ height: 50, width: width, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'black', fontSize: 18 }}>关注车辆</Text></View>

          <FlatList
            data={this.car}
            renderItem={({item}) => 
            <View style={{ width: width, height: 130, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: width / 3, justifyContent: 'center', alignItems: 'center'  }}>
              <Image
                style={{ width: 100, height: 100, resizeMode: 'contain' }}
                source={require('./../../../../../static/img/car.jpg')}
              />
            </View>
            <View style={{ width: width / 3 }}>
              <Text>{item.model}</Text>
 
            </View>
            <View style={{ width: width / 3, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ width: width / 5, height: 25, backgroundColor: 'red', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'white' }}>取消关注</Text></View>
              <View style={{ height: 10 }}></View>
              <View style={{ width: width / 5, height: 25, backgroundColor: 'red', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'white' }}>查看详情</Text></View>
            </View>
          </View>
          }/>

        

      </View>
    );
  }
}