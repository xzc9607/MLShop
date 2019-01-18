import {Dimensions,Platform,StatusBar,PixelRatio} from  'react-native';

const {width, height} = Dimensions.get('window');
const  OS = Platform.OS;
const ios = (OS == 'ios');
const android = (OS == 'android');
const  isIPhoneX = (ios && height == 812 && width == 375);
const  statusBarHeight = (ios ? (isIPhoneX ? 44 : 20) : StatusBar.currentHeight);
const httpurl='http://47.101.160.154/mlshop';
const localurl='http://192.168.0.112:8080';
const carimgurl='https://mlshopimg.oss-cn-hangzhou.aliyuncs.com/carimg/';


global.gScreen = {
    screen_width:width,
    screen_height:height,
    statusBarHeight:statusBarHeight,
    onePixelRatio:1/PixelRatio.get(),
}

global.gDevice = {
    ios:ios,
    android:android,
    isIPhoneX:isIPhoneX,
}

global.gUrl={
    httpurl:httpurl,
    localurl:localurl,
    carimgurl:carimgurl
}