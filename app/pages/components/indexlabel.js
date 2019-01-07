import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

const { width } = Dimensions.get('window')//获取当前屏幕宽度

export default class IndexLabel extends Component {


    render() {
        return (
            <View>
                <View style={styles.zero}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 80,
                        width: (width / 8) * 7,
                        backgroundColor: this.props.bgcolor,
                        borderRadius: 10,
                        flexDirection: 'row',
                    }}>
                        <View><Text style={{ fontSize: 20, color: 'white' }}>{this.props.labeltext}</Text></View>
                        <View style={{ width: (width / 10) * 4 }}></View>
                        <View style={{ width: (width / 5), height: 30, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', }}><Text style={{ fontSize: 15, color: '#FF2d16' }}>更多车型</Text></View>
                    </View>
                </View>

            </View>
        );


    }

}

const styles = StyleSheet.create({
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
        width: 60,
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