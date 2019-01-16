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
    StatusBar,
    BackHandler,
    ToastAndroid,
    FlatList
} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import SideMenu from 'react-native-side-menu';
import Swiper from 'react-native-swiper';

import { Query } from "react-apollo";
import gql from "graphql-tag";

// const query = gql`
// query{
//     AdvertisementList{
//       content{
//         id
//         image
//       }
//     }
// }
// `;

// const GetAdvList = () => (<Query
//     query={query}>{
//         ({ loading, error, data }) => {
//             let advurl = '';
//             let adv = [];
//             if (loading == true) {
//                 return null
//             } else {
//                 this.advurl = data.AdvertisementList.content[0].image;
//                 this.adv = this.advurl.split(',');

//             }

//             return (
//                 <Swiper style={styles.wrapper}
//                     paginationStyle={styles.paginationStyle}
//                     dotStyle={styles.dotStyle}
//                     activeDotStyle={styles.activeDotStyle}
//                     autoplay
//                     loop>
                    
//                     <View style={styles.slide}>
//                         <Image resizeMode='stretch' style={{ width: this.width, height: 150 }}
//                             source={{ uri: 'http://mlshopimage.oss-cn-shanghai.aliyuncs.com/' + this.adv[0] }} />
//                     </View>
//                     <View style={styles.slide}>
//                         <Image resizeMode='stretch' style={{ width: this.width, height: 150 }}
//                             source={{ uri: 'http://mlshopimage.oss-cn-shanghai.aliyuncs.com/' + this.adv[1] }} />
//                     </View>
//                     <View style={styles.slide}>
//                         <Image resizeMode='stretch' style={{ width: this.width, height: 150 }}
//                             source={{ uri: 'http://mlshopimage.oss-cn-shanghai.aliyuncs.com/' + this.adv[2] }} />
//                     </View>
//                     <View style={styles.slide}>
//                         <Image resizeMode='stretch' style={{ width: this.width, height: 150 }}
//                             source={{ uri: 'http://mlshopimage.oss-cn-shanghai.aliyuncs.com/' + this.adv[3] }} />
//                     </View>
//                 </Swiper>

//             )
//         }
//     }
// </Query>);

const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class Swipercomponent extends Component {


    render() {
        return (
            <Swiper style={styles.wrapper}
                    paginationStyle={styles.paginationStyle}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}
                    autoplay
                    autoplayTimeout={5}
                    loop>
                    
                    <View style={styles.slide}>
                        <Image resizeMode='stretch' style={{ width: this.width, height: 150 }}
                            source={{ uri: 'https://mlshopimg.oss-cn-hangzhou.aliyuncs.com/1.jpg' }} />
                    </View>
                    <View style={styles.slide}>
                        <Image resizeMode='stretch' style={{ width: this.width, height: 150 }}
                            source={{ uri: 'https://mlshopimg.oss-cn-hangzhou.aliyuncs.com/2.jpg' }} />
                    </View>
                    <View style={styles.slide}>
                        <Image resizeMode='stretch' style={{ width: this.width, height: 150 }}
                            source={{ uri: 'https://mlshopimg.oss-cn-hangzhou.aliyuncs.com/3.jpg' }} />
                    </View>
                    
                </Swiper>

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
        height: 80
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
    iconboxview1: {
        height: 70,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    iconboxview2: {
        height: 30,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    iconbox: {
        width: width / 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ciclebox1: {
        width: width / 7,
        height: width / 7,
        backgroundColor: '#00b7ee',
        borderRadius: 360,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ciclebox2: {
        width: width / 7,
        height: width / 7,
        backgroundColor: '#f84d1f',
        borderRadius: 360,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ciclebox3: {
        width: width / 7,
        height: width / 7,
        backgroundColor: '#ffa602',
        borderRadius: 360,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ciclebox4: {
        width: width / 7,
        height: width / 7,
        backgroundColor: '#bd69d8',
        borderRadius: 360,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconboxtext: {
        fontSize: 14,
        color: 'black'
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
