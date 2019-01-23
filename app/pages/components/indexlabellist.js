import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    FlatList
} from 'react-native';

import IndexLabel from './indexlabel';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const { width } = Dimensions.get('window')//获取当前屏幕宽度
const query = gql`
query{
    CarInfoList{
      content{
        id
        brand
        label
        model
      }
    }
}
`;
const GetLabelList = () => (<Query
    query={query}>{
        ({ loading, error, data }) => {
            var carlist = [];
            var lsf = [];
            var cdyg = [];
            var xcsj = [];
            var rxhc = [];
            var cjsj = [];
            var zjq = [];
            var zq = [];
            var mckzq = [];
            if (loading == true) {
                return null;
            } else {
                this.carlist = data.CarInfoList.content;
                //console.log(this.carlist);
                for (var i = 0; i < this.carlist.length; i++) {
                    if (this.carlist[i].label == '0首付') {
                        lsf.push(this.carlist[i]);
                        //console.log(lsf);
                    } if (this.carlist[i].label == '新车上架') {
                        xcsj.push(this.carlist[i]);
                    } if (this.carlist[i].label == '超低月供') {
                        cdyg.push(this.carlist[i]);
                    } if (this.carlist[i].label == '热销好车') {
                        rxhc.push(this.carlist[i]);
                    } if (this.carlist[i].label == '超级试驾') {
                        cjsj.push(this.carlist[i]);
                    } if (this.carlist[i].label == '直降区') {
                        zjq.push(this.carlist[i]);
                    } if (this.carlist[i].label == '5%专区') {
                        zq.push(this.carlist[i]);
                    } if (this.carlist[i].label == '买车可赚钱') {
                        mckzq.push(this.carlist[i]);
                    }
                }

                return (

                    <View>

                        <View>
                        <IndexLabel
                            labeltext={'0首付'}
                            bgcolor={'#f94806'} />
                        <FlatList
                            data={lsf}
                            renderItem={({ item }) =>
                                <View style={{ backgroundColor: 'white' }}>
                                    <View style={styles.listtext}>
                                        <View style={styles.listhead}><View style={{ alignItems: 'center' }}><Text style={{ color: 'white' }}>{item.label}</Text></View></View>
                                        <View style={styles.listbody}>
                                            <View style={{ width: width / 2, marginStart: 20 }}>
                                                <Text style={{ color: 'black', fontSize: 30 }}>轩逸·纯电</Text>
                                                <Text>{item.model}</Text>
                                                <Text style={{ color: '#FF2d16' }}>首付5000元</Text>
                                                <Text>月供5000元</Text>
                                            </View>
                                            <View style={{ width: width / 2, justifyContent: 'center', alignItems: 'center', marginStart: -30 }}>
                                                <Image
                                                    resizeMode='stretch' style={styles.listimage}
                                                    source={require('./../../../static/img/car.jpg')} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            } />
                        </View>
                        <View
                        onLayout={event=>{this.layoutY = event.nativeEvent.layout.y;this.layoutX=event.nativeEvent.layout.x}}>
                        

                        <IndexLabel
                            labeltext={'买车可赚钱'}
                            bgcolor={'#00b7ee'} />
                        <FlatList
                            data={mckzq}
                            renderItem={({ item }) =>
                                <View style={{ backgroundColor: 'white' }}>
                                    <View style={styles.listtext}>
                                        <View style={styles.listhead}><View style={{ alignItems: 'center' }}><Text style={{ color: 'white' }}>{item.label}</Text></View></View>
                                        <View style={styles.listbody}>
                                            <View style={{ width: width / 2, marginStart: 20 }}>
                                                <Text style={{ color: 'black', fontSize: 30 }}>轩逸·纯电</Text>
                                                <Text>{item.model}</Text>
                                                <Text style={{ color: '#FF2d16' }}>首付5000元</Text>
                                                <Text>月供5000元</Text>
                                            </View>
                                            <View style={{ width: width / 2, justifyContent: 'center', alignItems: 'center', marginStart: -30 }}>
                                                <Image
                                                    resizeMode='stretch' style={styles.listimage}
                                                    source={require('./../../../static/img/car.jpg')} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            } />
                            </View>
                            <View>
                        <IndexLabel
                            labeltext={'5%专区'}
                            bgcolor={'#ff2e75'} />
                        <FlatList
                            data={zq}
                            renderItem={({ item }) =>
                                <View style={{ backgroundColor: 'white' }}>
                                    <View style={styles.listtext}>
                                        <View style={styles.listhead}><View style={{ alignItems: 'center' }}><Text style={{ color: 'white' }}>{item.label}</Text></View></View>
                                        <View style={styles.listbody}>
                                            <View style={{ width: width / 2, marginStart: 20 }}>
                                                <Text style={{ color: 'black', fontSize: 30 }}>轩逸·纯电</Text>
                                                <Text>{item.model}</Text>
                                                <Text style={{ color: '#FF2d16' }}>首付5000元</Text>
                                                <Text>月供5000元</Text>
                                            </View>
                                            <View style={{ width: width / 2, justifyContent: 'center', alignItems: 'center', marginStart: -30 }}>
                                                <Image
                                                    resizeMode='stretch' style={styles.listimage}
                                                    source={require('./../../../static/img/car.jpg')} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            } />
                            </View>
                            <View>
                        <IndexLabel
                            labeltext={'直降区'}
                            bgcolor={'#ff4141'} />
                        <FlatList
                            data={zjq}
                            renderItem={({ item }) =>
                                <View style={{ backgroundColor: 'white' }}>
                                    <View style={styles.listtext}>
                                        <View style={styles.listhead}><View style={{ alignItems: 'center' }}><Text style={{ color: 'white' }}>{item.label}</Text></View></View>
                                        <View style={styles.listbody}>
                                            <View style={{ width: width / 2, marginStart: 20 }}>
                                                <Text style={{ color: 'black', fontSize: 30 }}>轩逸·纯电</Text>
                                                <Text>{item.model}</Text>
                                                <Text style={{ color: '#FF2d16' }}>首付5000元</Text>
                                                <Text>月供5000元</Text>
                                            </View>
                                            <View style={{ width: width / 2, justifyContent: 'center', alignItems: 'center', marginStart: -30 }}>
                                                <Image
                                                    resizeMode='stretch' style={styles.listimage}
                                                    source={require('./../../../static/img/car.jpg')} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            } />
                            </View>

                            <View>
                        <IndexLabel
                            labeltext={'热销好车'}
                            bgcolor={'#bd69d8'} />
                        <FlatList
                            data={rxhc}
                            renderItem={({ item }) =>
                                <View style={{ backgroundColor: 'white' }}>
                                    <View style={styles.listtext}>
                                        <View style={styles.listhead}><View style={{ alignItems: 'center' }}><Text style={{ color: 'white' }}>{item.label}</Text></View></View>
                                        <View style={styles.listbody}>
                                            <View style={{ width: width / 2, marginStart: 20 }}>
                                                <Text style={{ color: 'black', fontSize: 30 }}>轩逸·纯电</Text>
                                                <Text>{item.model}</Text>
                                                <Text style={{ color: '#FF2d16' }}>首付5000元</Text>
                                                <Text>月供5000元</Text>
                                            </View>
                                            <View style={{ width: width / 2, justifyContent: 'center', alignItems: 'center', marginStart: -30 }}>
                                                <Image
                                                    resizeMode='stretch' style={styles.listimage}
                                                    source={require('./../../../static/img/car.jpg')} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            } />
                            </View>

                            <View>

                        <IndexLabel
                            labeltext={'超低月供'}
                            bgcolor={'#fe9833'} />
                        <FlatList
                            data={cdyg}
                            renderItem={({ item }) =>
                                <View style={{ backgroundColor: 'white' }}>
                                    <View style={styles.listtext}>
                                        <View style={styles.listhead}><View style={{ alignItems: 'center' }}><Text style={{ color: 'white' }}>{item.label}</Text></View></View>
                                        <View style={styles.listbody}>
                                            <View style={{ width: width / 2, marginStart: 20 }}>
                                                <Text style={{ color: 'black', fontSize: 30 }}>轩逸·纯电</Text>
                                                <Text>{item.model}</Text>
                                                <Text style={{ color: '#FF2d16' }}>首付5000元</Text>
                                                <Text>月供5000元</Text>
                                            </View>
                                            <View style={{ width: width / 2, justifyContent: 'center', alignItems: 'center', marginStart: -30 }}>
                                                <Image
                                                    resizeMode='stretch' style={styles.listimage}
                                                    source={require('./../../../static/img/car.jpg')} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            } />
                            </View>

                    </View>



                )
            }


        }
    }
</Query>);

export default class IndexLabellist extends Component {



    render() {
        return (
            // <View>
            //     <IndexLabel
            //         labeltext={'0首付'}
            //         bgcolor={'#f94806'} />

            //     <View style={{ backgroundColor: 'white' }}>
            //         <View style={styles.listtext}>
            //             <View style={styles.listhead}><View style={{ alignItems: 'center' }}><Text style={{ color: 'white' }}>0首付</Text></View></View>
            //             <View style={styles.listbody}>
            //                 <View style={{ width: width / 2, marginStart: 20 }}>
            //                     <Text style={{ color: 'black', fontSize: 30 }}>轩逸·纯电</Text>
            //                     <Text>2018款 高配版</Text>
            //                     <Text style={{ color: '#FF2d16' }}>首付5000元</Text>
            //                     <Text>月供5000元</Text>
            //                 </View>
            //                 <View style={{ width: width / 2, justifyContent: 'center', alignItems: 'center', marginStart: -30 }}>
            //                     <Image
            //                         resizeMode='stretch' style={styles.listimage}
            //                         source={require('./../../../static/img/car.jpg')} />
            //                 </View>
            //             </View>
            //         </View>
            //     </View>

            // </View>

            <GetLabelList />

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