import React, { Component } from 'react';
import { AsyncStorage, Dimensions, Image, Linking, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View,FlatList } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Icon from "react-native-vector-icons/AntDesign";
import Sidemenucomponent from '../components/sidemenucomponent';
import Indexheader from './../components/indexheader';
import Indexiconbox from './../components/indexiconbox';
import Swipercomponent from './../components/swipercomponent';
import IndexLabel from './../components/indexlabel';
import Global from '../Global';

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
            isOpen: false,
            carlist:null,
            lsf:[],
            cdyg:[],
            xcsj:[],
            rxhc:[],
            cjsj:[],
            zjq:[],
            zq:[],
            mckzq:[]

        };

        fetch(gUrl.httpurl+'/getcarlist')
            .then((response) => {
              this.res=JSON.parse(response._bodyText);
              this.setState({carlist:this.res});
              var lsf = [];
              var cdyg = [];
              var xcsj = [];
              var rxhc = [];
              var cjsj = [];
              var zjq = [];
              var zq = [];
              var mckzq = [];

                for (var i = 0; i < this.state.carlist.length; i++) {
                if (this.state.carlist[i].label == '0首付') {
                    lsf.push(this.state.carlist[i]);
                } if (this.state.carlist[i].label == '新车上架') {
                    xcsj.push(this.state.carlist[i]);
                } if (this.state.carlist[i].label == '超低月供') {
                    cdyg.push(this.state.carlist[i]);
                } if (this.state.carlist[i].label == '热销好车') {
                    rxhc.push(this.state.carlist[i]);
                } if (this.state.carlist[i].label == '超级试驾') {
                    cjsj.push(this.state.carlist[i]);
                } if (this.state.carlist[i].label == '直降区') {
                    zjq.push(this.state.carlist[i]);
                } if (this.state.carlist[i].label == '5%专区') {
                    zq.push(this.state.carlist[i]);
                } if (this.state.carlist[i].label == '买车可赚钱') {
                    mckzq.push(this.state.carlist[i]);
                }
            }
            this.setState({"lsf":lsf});
            this.setState({"cdyg":cdyg});
            this.setState({"xcsj":xcsj});
            this.setState({"rxhc":rxhc});
            this.setState({"cjsj":cjsj});
            this.setState({"zjq":zjq});
            this.setState({"zq":zq});
            this.setState({"mckzq":mckzq});
            })
            .catch((error) => {
              console.log(error)
            })
    }

    getnumber(){
        //拨打选中店铺电话
        AsyncStorage.getItem('number', function (error, result) {
            if (error) {
                alert('读取失败')
            }else {

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
                        
                        <View style={{ justifyContent: 'flex-start' }}>
                            <TouchableWithoutFeedback onPress={() => {
                                this.setState({
                                    isOpen: true
                                })
                            }}>
                                <Text style={{ justifyContent: 'center' }} >店铺<Icon name='down' size={15} color="#000" /></Text>
                            </TouchableWithoutFeedback>
                        </View>

                        <TouchableWithoutFeedback  onPress={() => this.props.navigation.navigate('Search')}>
                            <View style={{ height: 35, width: (width / 4) * 3, backgroundColor: '#f1f1f1', borderRadius: 15, justifyContent: 'center',alignItems:'center' }}>
                                <View style={{flexDirection:'row'}}><Icon name='search1' size={15} color="#000" /><Text>搜索</Text></View>
                            </View>
                        </TouchableWithoutFeedback>

                        <View style={{ justifyContent: 'flex-end', marginStart: 10 }}>
                        
                            <TouchableWithoutFeedback  onPress={() => this.getnumber()}>
                                <Icon name='phone' size={20} color="#000" />
                            </TouchableWithoutFeedback>
                        </View>
                    </View>

                    <ScrollView ref={(view) => { this.myScrollView = view; }}>
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

                        <View style={styles.newcarchooseview3}>
                            <View style={styles.newcarchoosebox}><TouchableWithoutFeedback onPress={()=> this.myScrollView.scrollTo({ x: 0, y: this.lsflayoutY, animated: true})}><Text style={styles.newcarchooseview3text}>0首付</Text></TouchableWithoutFeedback></View>
                            <View style={styles.newcarchoosebox}><TouchableWithoutFeedback onPress={()=> this.myScrollView.scrollTo({ x: 0, y: this.mckzqlayoutY, animated: true})}><Text style={styles.newcarchooseview3text}>买车可赚钱</Text></TouchableWithoutFeedback></View>
                            <View style={styles.newcarchoosebox}><TouchableWithoutFeedback onPress={()=> this.myScrollView.scrollTo({ x: 0, y: this.zqlayoutY, animated: true})}><Text style={styles.newcarchooseview3text}>5%专区</Text></TouchableWithoutFeedback></View>
                            <View style={styles.newcarchoosebox}><TouchableWithoutFeedback onPress={()=> this.myScrollView.scrollTo({ x: 0, y: this.zjqlayoutY, animated: true})}><Text style={styles.newcarchooseview3text}>直降区</Text></TouchableWithoutFeedback></View>
                        </View>
                        <View style={styles.newcarchooseview3}>
                            <View style={styles.newcarchoosebox}><TouchableWithoutFeedback onPress={()=> this.myScrollView.scrollTo({ x: 0, y: this.cjsjlayoutY, animated: true})}><Text style={styles.newcarchooseview3text}>超级试驾</Text></TouchableWithoutFeedback></View>
                            <View style={styles.newcarchoosebox}><TouchableWithoutFeedback onPress={()=> this.myScrollView.scrollTo({ x: 0, y: this.rxhclayoutY, animated: true})}><Text style={styles.newcarchooseview3text}>热销好车</Text></TouchableWithoutFeedback></View>
                            <View style={styles.newcarchoosebox}><TouchableWithoutFeedback onPress={()=> this.myScrollView.scrollTo({ x: 0, y: this.cdyglayoutY, animated: true})}><Text style={styles.newcarchooseview3text}>超低月供</Text></TouchableWithoutFeedback></View>
                            <View style={styles.newcarchoosebox}><TouchableWithoutFeedback onPress={()=> this.myScrollView.scrollTo({ x: 0, y: this.xcsjlayoutY, animated: true})}><Text style={styles.newcarchooseview3text}>新车上架</Text></TouchableWithoutFeedback></View>
                        </View>

                        <View
                        onLayout={event=>{this.lsflayoutY = event.nativeEvent.layout.y}}>
                        <IndexLabel
                            labeltext={'0首付'}
                            bgcolor={'#f94806'} />
                        <FlatList
                            data={this.state.lsf}
                            renderItem={({ item }) =>
                            <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.navigate('CarPage',{item})}>
                                <View style={{ backgroundColor: 'white' }}>
                                    <View style={styles.listtext}>
                                        <View style={styles.listhead}><View style={{ alignItems: 'center' }}><Text style={{ color: 'white' }}>{item.label}</Text></View></View>
                                        <View style={styles.listbody}>
                                            <View style={{ width: width / 2, marginStart: 20 }}>
                                                <Text style={{ color: 'black', fontSize: 30 }}>{item.brand}</Text>
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
                            </TouchableWithoutFeedback>
                            } />
                        </View>

                        <View onLayout={event=>{this.mckzqlayoutY = event.nativeEvent.layout.y}}>
        
                            <IndexLabel
                                labeltext={'买车可赚钱'}
                                bgcolor={'#00b7ee'} />
                            <FlatList
                                data={this.state.mckzq}
                                renderItem={({ item }) =>
                                <TouchableWithoutFeedback
                                onPress={() => this.props.navigation.navigate('CarPage',{item})}>
                                    <View style={{ backgroundColor: 'white' }}>
                                        <View style={styles.listtext}>
                                            <View style={styles.listhead}><View style={{ alignItems: 'center' }}><Text style={{ color: 'white' }}>{item.label}</Text></View></View>
                                            <View style={styles.listbody}>
                                                <View style={{ width: width / 2, marginStart: 20 }}>
                                                    <Text style={{ color: 'black', fontSize: 30 }}>{item.brand}</Text>
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
                                </TouchableWithoutFeedback>
                            } />
                            </View>
                            <View
                            onLayout={event=>{this.zqlayoutY = event.nativeEvent.layout.y}}>
                        <IndexLabel
                            labeltext={'5%专区'}
                            bgcolor={'#ff2e75'} />
                        <FlatList
                            data={this.state.zq}
                            renderItem={({ item }) =>
                            <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.navigate('CarPage',{item})}>
                                <View style={{ backgroundColor: 'white' }}>
                                    <View style={styles.listtext}>
                                        <View style={styles.listhead}><View style={{ alignItems: 'center' }}><Text style={{ color: 'white' }}>{item.label}</Text></View></View>
                                        <View style={styles.listbody}>
                                            <View style={{ width: width / 2, marginStart: 20 }}>
                                                <Text style={{ color: 'black', fontSize: 30 }}>{item.brand}</Text>
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
                                </TouchableWithoutFeedback>
                            } />
                            </View>
                            <View
                            onLayout={event=>{this.zjqlayoutY = event.nativeEvent.layout.y}}>
                        <IndexLabel
                            labeltext={'直降区'}
                            bgcolor={'#ff4141'} />
                        <FlatList
                            data={this.state.zjq}
                            renderItem={({ item }) =>
                            <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.navigate('CarPage',{item})}>
                                <View style={{ backgroundColor: 'white' }}>
                                    <View style={styles.listtext}>
                                        <View style={styles.listhead}><View style={{ alignItems: 'center' }}><Text style={{ color: 'white' }}>{item.label}</Text></View></View>
                                        <View style={styles.listbody}>
                                            <View style={{ width: width / 2, marginStart: 20 }}>
                                                <Text style={{ color: 'black', fontSize: 30 }}>{item.brand}</Text>
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
                                </TouchableWithoutFeedback>
                            } />
                            </View>

                            <View
                            onLayout={event=>{this.rxhclayoutY = event.nativeEvent.layout.y}}>
                        <IndexLabel
                            labeltext={'热销好车'}
                            bgcolor={'#bd69d8'} />
                        <FlatList
                            data={this.state.rxhc}
                            renderItem={({ item }) =>
                            <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.navigate('CarPage',{item})}>
                                <View style={{ backgroundColor: 'white' }}>
                                    <View style={styles.listtext}>
                                        <View style={styles.listhead}><View style={{ alignItems: 'center' }}><Text style={{ color: 'white' }}>{item.label}</Text></View></View>
                                        <View style={styles.listbody}>
                                            <View style={{ width: width / 2, marginStart: 20 }}>
                                                <Text style={{ color: 'black', fontSize: 30 }}>{item.brand}</Text>
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
                                </TouchableWithoutFeedback>
                            } />
                            </View>

                            <View
                            onLayout={event=>{this.cdyglayoutY = event.nativeEvent.layout.y}}>

                        <IndexLabel
                            labeltext={'超低月供'}
                            bgcolor={'#fe9833'} />
                        <FlatList
                            data={this.state.cdyg}
                            renderItem={({ item }) =>
                            <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.navigate('CarPage',{item})}>
                                <View style={{ backgroundColor: 'white' }}>
                                    <View style={styles.listtext}>
                                        <View style={styles.listhead}><View style={{ alignItems: 'center' }}><Text style={{ color: 'white' }}>{item.label}</Text></View></View>
                                        <View style={styles.listbody}>
                                            <View style={{ width: width / 2, marginStart: 20 }}>
                                                <Text style={{ color: 'black', fontSize: 30 }}>{item.brand}</Text>
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
                                </TouchableWithoutFeedback>
                            } />
                            </View>
                        
                        <View style={{ height: 5, backgroundColor: '#ebebeb' }}></View>

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
