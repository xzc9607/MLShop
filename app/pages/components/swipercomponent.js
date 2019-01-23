import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
import Global from '../Global';

const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class Swipercomponent extends Component {
    constructor(props){
        super(props);

        this.state={
            imgname: 0
        }

    }


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
                            source={{ uri: gUrl.carimgurl+ Math.ceil(Math.random()*10) +'.jpg' }} />
                    </View>

                    <View style={styles.slide}>
                        <Image resizeMode='stretch' style={{ width: this.width, height: 150 }}
                            source={{ uri: gUrl.carimgurl+ Math.ceil(Math.random()*10) +'.jpg' }} />
                    </View>

                    <View style={styles.slide}>
                        <Image resizeMode='stretch' style={{ width: this.width, height: 150 }}
                            source={{ uri: gUrl.carimgurl+ Math.ceil(Math.random()*10) +'.jpg' }} />
                    </View>
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: 80
    },
    slide: {
        justifyContent: 'center',
        backgroundColor: 'transparent'
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
});
