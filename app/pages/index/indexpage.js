import React, { Component } from 'react';
import { AsyncStorage, Dimensions, Image, Linking, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Icon from "react-native-vector-icons/AntDesign";
import Sidemenucomponent from '../components/sidemenucomponent';
import Indexheader from './../components/indexheader';
import Indexiconbox from './../components/indexiconbox';
import IndexLabellist from './../components/indexlabellist';
import Swipercomponent from './../components/swipercomponent';




const { width } = Dimensions.get('window')//获取当前屏幕宽度



export default class Indexpage extends Component {
    static navigationOptions = {
        tabBarLabel: '首页',
        tabBarIcon: ({ focused, tintColor }) => (
            <Icon name='home' size={25} color="#ffffff" />
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            text: '个性SUV',
            isOpen: false

        };
    }

    getnumber(){
        //拨打选中店铺电话
        AsyncStorage.getItem('number', function (error, result) {
            if (error) {
                alert('读取失败')
            }else {
                //console.log(result)
                //JSON.parse(result);
            }
        }).then(result=>{
            Linking.openURL('tel:${'+ result +'}')
        })
           
    }

    render() {
        return (
            <SideMenu
                menu={<Sidemenucomponent />}
                disableGestures={true}
                isOpen={this.state.isOpen}>

                <View style={styles.container}>
                    <Indexheader />
                    <View style={{ height: 45, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                        <View
                            style={{ justifyContent: 'flex-start' }}
                        >
                            <TouchableWithoutFeedback onPress={() => {
                                this.setState({
                                    isOpen: true
                                })
                            }}>
                                <Text style={{ justifyContent: 'center' }} >店铺<Icon name='down' size={15} color="#000" /></Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <View><TextInput
                            defaultValue={'个性SUV'}
                            style={{ height: 40, width: (width / 4) * 3, backgroundColor: '#f1f1f1', borderRadius: 15, justifyContent: 'center' }}
                            //placeholder={this.state.text}
                        /></View>
                        <View
                            style={{ justifyContent: 'flex-end', marginStart: 10 }}
                        ><TouchableWithoutFeedback  onPress={() => this.getnumber()}><Icon name='phone' size={20} color="#000" /></TouchableWithoutFeedback></View>
                    </View>


                    <ScrollView>
                        <View style={styles.swiperview}>
                            <Swipercomponent />
                        </View>
                        <View style={styles.swiperview2}>
                            <Text style={{ color: 'black' }}>0元起新车开回家车辆做个人名下安心放心</Text>
                        </View>

                        <View style={{ height: 5, backgroundColor: '#ebebeb' }}></View>
                        <Indexiconbox />
                        <View style={{ height: 5, backgroundColor: '#ebebeb' }}></View>

                        <View style={styles.newcarchooseview}>
                            <View style={styles.newcarchoosebox}><Text style={{ fontSize: 20, color: 'black', marginStart: 10 }}>新车优选</Text></View>
                            <View style={styles.newcarchoosebox2}></View>
                            <View style={styles.newcarchoosebox}><TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('Newcar')}><Text style={{ fontSize: 15, color: '#FF2d16' }}>全部新车</Text></TouchableWithoutFeedback></View>
                        </View>

                        <View style={styles.newcarchooseview2}>
                            <View style={styles.newcarchoosebox}><Text style={{ color: 'black' }}>北汽新..</Text></View>
                            <View style={styles.newcarchoosebox}><Text style={{ color: 'black' }}>广汽乘..</Text></View>
                            <View style={styles.newcarchoosebox}><Text style={{ color: 'black' }}>江铃汽车</Text></View>
                            <View style={styles.newcarchoosebox}><Text style={{ color: 'black' }}>东风日产</Text></View>
                        </View>
                        <View style={styles.newcarchooseview2}>
                            <View style={styles.newcarchoosebox}><Text style={{ color: 'black' }}>10万以下</Text></View>
                            <View style={styles.newcarchoosebox}><Text style={{ color: 'black' }}>10万-20万</Text></View>
                            <View style={styles.newcarchoosebox}><Text style={{ color: 'black' }}>20万-30万</Text></View>
                            <View style={styles.newcarchoosebox}><Text style={{ color: 'black' }}>30万-40万</Text></View>
                        </View>
                        <View style={styles.newcarchooseview3}>
                            <View style={styles.newcarchoosebox}><Text style={styles.newcarchooseview3text}>0首付</Text></View>
                            <View style={styles.newcarchoosebox}><Text style={styles.newcarchooseview3text}>买车可赚钱</Text></View>
                            <View style={styles.newcarchoosebox}><Text style={styles.newcarchooseview3text}>5%专区</Text></View>
                            <View style={styles.newcarchoosebox}><Text style={styles.newcarchooseview3text}>直降区</Text></View>
                        </View>
                        <View style={styles.newcarchooseview3}>
                            <View style={styles.newcarchoosebox}><Text style={styles.newcarchooseview3text}>超级试驾</Text></View>
                            <View style={styles.newcarchoosebox}><Text style={styles.newcarchooseview3text}>热销好车</Text></View>
                            <View style={styles.newcarchoosebox}><Text style={styles.newcarchooseview3text}>超低月供</Text></View>
                            <View style={styles.newcarchoosebox}><Text style={styles.newcarchooseview3text}>新车上架</Text></View>
                        </View>

                        <IndexLabellist/>

                        
                    
                        <View style={{ height: 5, backgroundColor: '#ebebeb' }}></View>

                        <View style={{ height: 80, backgroundColor: '#ebebeb', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: width / 3, justifyContent: 'center', alignItems: 'center' }}><View style={{ width: 60, height: 1, backgroundColor: 'gray' }}></View></View>
                            <View style={{ width: width / 3, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name='star' size={25} color="#FF2d16" />
                                    <Text style={{ color: 'black', fontSize: 18 }}>品牌专区</Text>
                                </View>
                            </View>
                            <View style={{ width: width / 3, justifyContent: 'center', alignItems: 'center' }}><View style={{ width: 60, height: 1, backgroundColor: 'gray' }}></View></View>
                        </View>

                        <View style={{ backgroundColor: 'white', height: 220 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                <Image
                                    resizeMode='stretch' style={styles.listimage2}
                                    source={require('./../../../static/img/car.jpg')} />
                            </View>
                            <View style={{ marginStart: 20 }}>
                                <Text style={{ color: 'black', fontSize: 15 }}>北汽新能源</Text>
                                <Text>新一代北汽新能源汽车，其优点...</Text>
                            </View>
                        </View>
                        <View style={{ height: 5, backgroundColor: '#ebebeb' }}></View>

                        <View style={{ backgroundColor: 'white', height: 220, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.zero2}>
                                <View style={styles.zerobox2}>
                                    <View><View style={{ backgroundColor: 'white', height: 30, width: 30 }}></View></View>
                                    <View style={{ width: (width / 10) * 4, marginStart: 20 }}>
                                        <Text style={{ fontSize: 17, color: 'white' }}>北汽新能源</Text>
                                        <Text style={{ fontSize: 12, color: 'white' }}>新能源汽车开回家</Text>
                                    </View>
                                    <View style={{ width: (width / 5), height: 30, backgroundColor: '#ffa500', borderRadius: 10, justifyContent: 'center', alignItems: 'center', }}><Text style={{ fontSize: 15, color: '#fff' }}>更多车型</Text></View>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: 5, backgroundColor: '#ebebeb' }}></View>
                        <View style={{ backgroundColor: 'white', height: 220 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                <Image
                                    resizeMode='stretch' style={styles.listimage2}
                                    source={require('./../../../static/img/car.jpg')} />
                            </View>
                            <View style={{ marginStart: 20 }}>
                                <Text style={{ color: 'black', fontSize: 15 }}>北汽新能源</Text>
                                <Text>新一代北汽新能源汽车，其优点...</Text>
                            </View>
                        </View>




                    </ScrollView>
                </View>





            </SideMenu>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    narbarview: {
        height: 45,
        backgroundColor: 'white',
        //flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    swiperview: {
        height: 150,
    },
    swiperview2: {
        height: 20,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    tabBarIcon: {
        width: 21,
        height: 21,
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
    newcarchooseview: {
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    newcarchoosebox: {
        width: width / 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    newcarchoosebox2: {
        width: width / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    newcarchooseview2: {
        height: 30,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    newcarchooseview3: {
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    newcarchooseview3text: {
        color: 'black',
        fontSize: 16
    },
    zero: {
        height: 150,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    zero2: {
        height: 220,
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
        backgroundColor: '#f94806',
        borderRadius: 10,
        flexDirection: 'row',
    },
    zerobox2: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        width: (width / 8) * 7,
        backgroundColor: '#0000ff',
        borderRadius: 10,
        flexDirection: 'row',
    },
    listtext: {
        height: 150
    },
    listhead: {
        borderRadius: 5,
        height: 20,
        width: 40,
        backgroundColor: '#FF2d16',
        marginStart: 20
    },
    listbody: {
        marginStart: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listimage: {
        height: 120,
        width: width / 3,
        resizeMode: 'contain'
    },
    listimage2: {
        height: 150,
        width: width - 40,
        resizeMode: 'contain',
        marginStart: 20
    }
});
