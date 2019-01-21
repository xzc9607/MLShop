/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import Login from './app/pages/login/loginpage';
import {TabNav} from './app/pages/root'
import Indexpage from './app/pages/index/indexpage';
import NewCarpage from './app/pages/newcar/newcarpage';
import Minepage from './app/pages/mine/minepage';
import feedBack from './app/pages/mine/childrenpage/feedBack/feedBackpage';
import help from './app/pages/mine/childrenpage/help/helppage';
import modifyinformation from './app/pages/mine/childrenpage/modifyInformation/modifyInformationpage';
import myAdvice from './app/pages/mine/childrenpage/myAdvice/myAdvicepage';
import myFocus from './app/pages/mine/childrenpage/myFocus/myFocuspage';
import myFocusCar from './app/pages/mine/childrenpage/myFocusCar/myFocusCarpage';
import myFocusStore from './app/pages/mine/childrenpage/myFocusStore/myFocusStorepage';
import myOrder from './app/pages/mine/childrenpage/myOrder/myOrderpage';
import mySetting from './app/pages/mine/childrenpage/mySetting/mySetting';
import understanding from './app/pages/mine/childrenpage/understanding/understanding';
import Register from './app/pages/login/register/registerpage';
import Forgetpassword from './app/pages/login/forgetpassword/forgetpasswordpage';
import userInformation from './app/pages/mine/childrenpage/userinformation/userinformation';
import Carpage from './app/pages/car/carpage';
import Purchasepage from './app/pages/purchase/purchasepage';
import Aboutpage from './app/pages/mine/childrenpage/mySetting/about/aboutpage';
import Searchpage from './app/pages/search/searchpage';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

const RootStack = createStackNavigator(
  {
    //登陆页面
    Login: {screen: Login},
    Register:{screen:Register},
    ForgetPassword:{screen:Forgetpassword},
    //车辆详情页
    CarPage:{screen:Carpage},
    //首页（以下）
    Index: {screen: Indexpage},
    //新车页面（以下）
    Newcar: {screen: NewCarpage},
    //个人页面（以下）
    Mine: {screen: Minepage},
    UserInformation:{screen:userInformation},
    FeedBack:{screen: feedBack},
    Help:{screen:help},
    ModifyInformation:{screen:modifyinformation},
    MyAdvice:{screen:myAdvice},
    MyFocus:{screen:myFocus},
    MyFocusCar:{screen:myFocusCar},
    MyFocusStore:{screen:myFocusStore},
    MyOrder:{screen:myOrder},
    MySetting:{screen:mySetting},
    Understanding:{screen:understanding},
    Purchase:{screen:Purchasepage},
    About:{screen:Aboutpage},
    Search:{screen:Searchpage},
    Main: {
      screen: TabNav,
      navigationOptions: ({navigation}) => ({
          header: null
      })
  }

  },
  {
    initialRouteName: 'Main',
    headerMode: 'screen'
  }
);

const client = new ApolloClient({
  uri: `http://115.159.154.194/mlshop/graphql`
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <ApolloProvider client={client}>
              <AppContainer/>
          </ApolloProvider>;
  }
}

//export default App;


