import React, { Component } from 'react';
import { AsyncStorage, Dimensions, FlatList, Text, View } from 'react-native';
import Minepageheader from './../../../components/minepageheader';
import Global from '../Global';

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

            }
        }).then(result=>{
            this.setState({'username':result});
            fetch(gUrl.httpurl+'/getuserlist')
                      .then((response) => {
                        this.res=JSON.parse(response._bodyText);
                        for(var i=0;i<this.res.length;i++){
                            if(this.res[i].username==this.state.username){
                              this.setState({userid:this.res[i].id});
                            }
                        }
                        fetch(gUrl.httpurl+'/getfeedbacklist?userid='+this.state.userid)
                          .then((response) => {
                              this.res=JSON.parse(response._bodyText);
                              this.setState({'data':this.res});
                        
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
                    </View>}/>
            </View>
        );
    }
}