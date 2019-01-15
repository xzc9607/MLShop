import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    FlatList,
    TouchableOpacity,
    Alert,
    TouchableWithoutFeedback,
    BackHandler,
    ToastAndroid
} from 'react-native';
import { AsyncStorage } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Minepageheader from './../components/minepageheader';


//列表分割线
class ItemDivideComponent extends Component {
    render() {
        return (
            <View style={{ height: 1.3, backgroundColor: 'white', marginRight: Dimensions.get('window').width - 20 }} />
        );
    }
};


export default class Minepage extends Component {
    static navigationOptions = {
        tabBarLabel: '个人',
        tabBarIcon: ({ focused, tintColor }) => (
            <Icon name='user' size={25} color="#ffffff" />
        )
        

    };
    
    constructor(props) {
        super(props);
        ()=>{
            this.props.navigation.setParams({abc: 'Updated!'})
        }


        this.state = {
            sourceData1: [
                { key: '我的订单', function: 'MyOrder' },
                { key: '我的关注', function: 'MyFocus' },
                { key: '我的咨询', function: 'MyAdvice' }],
            sourceData2: [
                { key: '了解猛龙汽车', function: 'Understanding' },
                { key: '意见反馈', function: 'FeedBack' },
                { key: '帮助中心', function: 'Help' },
                { key: '设置', function: 'MySetting' }],
                
  
        }
        
        console.log();
        
        

    }



    render() {
        return (
            //头部
            <View style={styles.container}>
                <Minepageheader/>
                <View style={styles.profilephotoview}>
                    <Image
                        source={require('./../../../static/img/背景图@1,5x.png')}
                        style={styles.imgStyle} />
                    <View style={{ flex: 1, alignItems: 'center', marginTop: -90 }}>
                        <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.navigate('UserInformation')}
                        >
                            <Image
                                style={styles.profilephoto}
                                source={require('./../../../static/img/brightPoints/gps导航系统.png')} />
                        </TouchableWithoutFeedback>
                    </View>
                </View>

                <View style={styles.nameview}>
                    <Text>{this.username}</Text>
                </View>
                <View style={styles.nameview}>
                    <Text>0首付，开新车</Text>
                </View>
                <View style={styles.attentionview}>
                    <View style={styles.attentionviewinside}>
                        <Text>0</Text>
                        <Text>关注车辆</Text>
                    </View>
                    <View style={styles.attentionviewinside}>
                        <Text>0</Text>
                        <Text>关注门店</Text>
                    </View>
                    <View style={styles.attentionviewinside}>
                        <Text>0</Text>
                        <Text>我的咨询</Text>
                    </View>
                </View>
                <View style={{ marginTop: 15 }}></View>
                <FlatList
                    data={this.state.sourceData1}
                    ItemSeparatorComponent={ItemDivideComponent}
                    renderItem={({ item }) => 
                    <View style={styles.menulist2}>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate(item.function)}>
                            <View style={{ flex: 1, justifyContent: 'center', marginStart: 20 }}>
                                <Text style={styles.menutext}>{item.key}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>}
                />
                <FlatList
                    //style={{ marginTop: -50 }}
                    data={this.state.sourceData2}
                    ItemSeparatorComponent={ItemDivideComponent}
                    renderItem={({ item }) => 
                    <View style={styles.menulist2}>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate(item.function)}>
                            <View style={{ flex: 1, justifyContent: 'center', marginStart: 20 }}>
                                <Text style={styles.menutext}>{item.key}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>}
                />

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        //主容器
        flex: 1,
        flexDirection: 'column',
        backgroundColor:'#ebebeb'
    },
    nameview: {
        height: 20,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    profilephotoview: {
        //头像容器
        height: 100,
        backgroundColor: 'white',

    },
    attentionview: {
        //关注主容器
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',

    },
    attentionviewinside: {
        width: Dimensions.get('window').width / 3,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 10
    },
    menulist1: {
        //菜单列表第一项
        height: 40,
        backgroundColor: 'white',
        //alignItems: 'center',
        marginTop: 15
    },
    menulist2: {
        //菜单列表第二项起
        height: 40,
        backgroundColor: 'white',
        //alignItems: 'center',
        //marginTop: 15
    },
    menutext: {
        fontSize: 15,
        color: 'black'
    },
    imgStyle: {
        //头像背景图片
        // 设置背景颜色
        //backgroundColor:'green',
        // 设置宽度
        width: Dimensions.get('window').width,
        // 设置高度
        height: 100,
        //resizeMode:'contain'
    },
    profilephoto: {
        //头像
        alignItems: 'center'
    },
    tabBarIcon: {
        width: 21,
        height: 21,
    }
});

