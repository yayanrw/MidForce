<script src="http://localhost:8097"></script>
import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import Login from './app/components/Login';
import Home from './app/components/Home';
import P5m from './app/components/P5m';
import Complain from './app/components/Complain';

const AppNavigator = StackNavigator({
  LoginScreen: {
    screen: Login
  },
  HomeScreen: {
    screen: Home
  },
  P5mScreen: {
    screen: P5m
  },
  ComplainScreen: {
    screen: Complain
  }
},
{
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
});


export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}