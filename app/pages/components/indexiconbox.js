import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback,

} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

const { width } = Dimensions.get('window')//获取当前屏幕宽度


export default class Indexiconbox extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <View>
                <View style={styles.iconboxview1}>
                    <View style={styles.iconbox}>
                        <View style={styles.ciclebox1}>
                            <TouchableWithoutFeedback 
                            >
                                <View>
                                    <Icon name='car' size={25} color="#fff" />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>

                    <View style={styles.iconbox}>
                        <View style={styles.ciclebox2}>
                            <View>
                                <Icon name='sync' size={25} color="#fff" />
                            </View></View>
                    </View>

                    <View style={styles.iconbox}>
                        <View style={styles.ciclebox3}>
                            <View>
                                <Icon name='wallet' size={25} color="#fff" />
                            </View></View>
                    </View>

                    <View style={styles.iconbox}>
                        <View style={styles.ciclebox4}>
                            <View>
                                <Icon name='Safety' size={25} color="#fff" />
                            </View></View>
                    </View>
                </View>

                <View style={styles.iconboxview2}>
                    <View style={{ marginStart: 1, flexDirection: 'row' }}>
                        <View style={styles.iconbox}>
                            <Text style={styles.iconboxtext}>猛龙新车</Text>
                        </View>
                        <View style={styles.iconbox}>
                            <Text style={styles.iconboxtext}>以旧换新</Text>
                        </View>
                        <View style={styles.iconbox}>
                            <Text style={styles.iconboxtext}>分期按揭</Text>
                        </View>
                        <View style={styles.iconbox}>
                            <Text style={styles.iconboxtext}>保险</Text>
                        </View>
                    </View>
                </View>
            </View>
        );


    }

}

const styles = StyleSheet.create({
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
    
    
});