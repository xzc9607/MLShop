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
} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import Swipercomponent from './../components/swipercomponent';
import Indexheader from './../components/indexheader';



const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class NewCarpage extends Component {
    static navigationOptions = {
        tabBarLabel: '新车',
        tabBarIcon: ({ focused, tintColor }) => (
            <Icon name='car' size={25} color="#ffffff" />
        )
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
                        style={{ height: 40, width: (width / 4) * 3, backgroundColor: '#f1f1f1', borderRadius: 15, justifyContent: 'center' }}
                        placeholder={this.state.text}
                    /></View>
                    <View
                        style={{ justifyContent: 'flex-end', marginStart: 10 }}
                    ><Icon name='phone' size={20} color="#000" /></View>
                </View>
                <ScrollView>
                    <View style={styles.swiperview}>
                        <Swipercomponent/>
                    </View>

                    <View style={{ marginTop: 15, backgroundColor: 'white' }}></View>

                    <TouchableWithoutFeedback
                        onPress={()=> this.props.navigation.navigate('CarPage')}
                    >
                    <View style={{ backgroundColor: 'white' }}>
                        <View style={styles.listtext}>
                            <View style={{ width: width / 2 ,justifyContent: 'center', alignItems: 'center',}}>
                                <Image resizeMode='stretch' style={styles.listimage}
                                    source={require('./../../../static/img/car.jpg')} />
                            </View>
                            <View style={styles.listbody}>
                                <View style={{ width: width / 2, marginStart: 20 }}>
                                    <Text style={{ color: 'black', fontSize: 20 }}>轩逸·纯电</Text>
                                    <Text style={{ color: 'black', fontSize: 20 }}>2018款 高配版</Text>
                                    <Text>厂商指导价9.58万</Text>
                                    <Text style={{ color: '#FF2d16' }}>首付0元 月供6000元</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                    </TouchableWithoutFeedback>

                </ScrollView>
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
