import React, { Component } from 'react';
import { Alert, AsyncStorage, Button, Dimensions, Text, TextInput, View } from 'react-native';
import Minepageheader from './../../../components/minepageheader';
import Global from '../Global';

const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class userInformation extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            userid:null,
            number:null,
            title:'',
            content:''
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
                              this.setState({userid:this.res[i].id})
                            }
                        }
                        console.log(this.state)
                        
                        
                      })
                      .catch((error) => {
                        console.log(error)
                      })
      
        })
    }

    static navigationOptions = {
        header:null
    };

    add(){
        let formData = {
          "userid":this.state.userid,
          "title":this.state.title,
          "content":this.state.content,
          "number":this.state.number
        }
     
        fetch(gUrl.httpurl+'/addfeedback',
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
                <Minepageheader/>
                <View style={{ height: 50, width: width, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 18 }}>意见反馈</Text>
                </View>
                <View style={{ height: 40, backgroundColor: '#ebebeb', justifyContent: 'center'}}>
                    <TextInput placeholder={'请输入标题'}
                    onChangeText={(title) => this.setState({title})}/>
                </View>
                <View style={{ height: 5, flexDirection: 'row' }}>

                </View>
                <View style={{ height: 300, backgroundColor: '#ebebeb', justifyContent: 'center' }}>
                    <TextInput placeholder={'请输入详细问题'}
                    onChangeText={(content) => this.setState({content})}/>
                </View>
                <View style={{ height: 5, flexDirection: 'row' }}>

                </View>
                <View style={{ height: 40, backgroundColor: '#ebebeb', justifyContent: 'center' }}>
                    <TextInput placeholder={'请输入您的联系方式'}
                    onChangeText={(number) => this.setState({number})}/>
                </View>
                <View style={{ height: 50, flexDirection: 'row' }}></View>

                <Button
                    onPress={()=> this.add()}
                    title="提交"
                    color="red"/>
            </View>
        );
    }
}