import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    TextInput,
    TouchableWithoutFeedback,
    BackHandler,
    ToastAndroid,
    Button
} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import SideMenu from 'react-native-side-menu';
import Swiper from 'react-native-swiper';
import Indexheader from './../components/indexheader';

const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class Carpage extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            text: '个性SUV',
            isOpen: false

        };
    }

    

    render() {
        return (
            //头部
            <View style={styles.container}>
                <Indexheader/>

                <ScrollView style={{ backgroundColor: 'white' }}>
                    <View style={styles.swiperview}>
                        <Swiper style={styles.wrapper}
                            onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                            paginationStyle={styles.paginationStyle}
                            dotStyle={styles.dotStyle}
                            activeDotStyle={styles.activeDotStyle}
                            autoplay
                            autoplayTimeout={5}
                            loop>
                            <View style={styles.slide}>
                                <Image resizeMode='stretch' style={styles.image}
                                    source={require('./../../../static/img/1.jpg')} />
                            </View>
                            <View style={styles.slide}>
                                <Image resizeMode='stretch' style={styles.image}
                                    source={require('./../../../static/img/2.jpg')} />
                            </View>
                            <View style={styles.slide}>
                                <Image resizeMode='stretch' style={styles.image}
                                    source={require('./../../../static/img/3.jpg')} />
                            </View>
                            <View style={styles.slide}>
                                <Image resizeMode='stretch' style={styles.image}
                                    source={require('./../../../static/img/4.jpg')} />
                            </View>
                        </Swiper>
                    </View>

                    <View style={{ height: 50, backgroundColor: 'red', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, color: 'white', marginStart: 20 }}>0首付</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ height: 140, width: width - 40, marginTop: 20 }}>
                            <View>
                                <Text style={{ fontSize: 20, color: 'black' }}>轩逸·纯电 高配版</Text>

                            </View>
                            <View style={{ marginTop: 5 }}><Text>厂商指导价：9.58万</Text></View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <View style={{ height: 20, width: 200, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'white' }}>服务费2888，砍0元开新车</Text>

                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={{}}>已售1台</Text>
                                </View>
                            </View>
                            <View style={{ height: 1, backgroundColor: '#ebebeb' }}></View>
                            <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
                                <View style={styles.listhead}><Text style={{ color: 'white' }}>0首付</Text></View>
                                <Text>详情【立即咨询】卖家</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ height: 10, backgroundColor: '#ebebeb' }}></View>



                </ScrollView>
                <Button
                    onPress={()=> (alert('立刻购买'))}
                    title="提交"
                    color="red"
                    />
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
        height: 200,
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
    },
    listhead: {
        borderRadius: 5,
        height: 20,
        width: 40,
        backgroundColor: '#FF2d16',
    },
});
