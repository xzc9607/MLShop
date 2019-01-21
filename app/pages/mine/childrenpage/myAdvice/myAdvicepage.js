import React, { Component } from 'react';
import { Text, View, Image, Dimensions,AsyncStorage,FlatList } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import Minepageheader from './../../../components/minepageheader';


const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class userInformation extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            userid:null,
            data:null

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
                        //console.log(this.res);
                        for(var i=0;i<this.res.length;i++){
                            if(this.res[i].username==this.state.username){
                              this.setState({userid:this.res[i].id});
                            }
                        }
                        //console.log(this.state)
                        fetch(gUrl.httpurl+'/getfeedbacklist?userid='+this.state.userid)
                          .then((response) => {
                              //console.log(response._bodyText)
                              this.res=JSON.parse(response._bodyText);
                              this.setState({'data':this.res});
                              //console.log(this.state.data)
                        
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

                <View style={{ height: 50, width: width, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: 'black', fontSize: 18 }}>我的反馈</Text></View>

                <FlatList
            data={this.state.data}
            renderItem={({item}) => 
            <View style={{height:120}}>
            <View style={{marginEnd:5}}>
                <View style={{height:38,flexDirection: 'row',}}><View><Text style={{fontSize:18}}>问题：</Text></View><View><Text style={{color:'black',fontSize:18}}>{item.title}</Text></View></View>
                <View style={{height:38,flexDirection: 'row',}}><View><Text style={{fontSize:18}}>内容：</Text></View><View><Text style={{color:'black',fontSize:18}}>{item.content}</Text></View></View>
                <View style={{height:38,flexDirection: 'row',}}><View><Text style={{fontSize:18}}>联系方式：</Text></View><View><Text style={{color:'black',fontSize:18}}>{item.number}</Text></View></View>
                <View style={{ height: 5, backgroundColor: '#ebebeb' }}></View>
            </View>
            </View>
        }/>
            
                



                


            </View>
        );
    }
}